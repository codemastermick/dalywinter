import * as functions from "firebase-functions";
import * as gapi from "googleapis";
import { handleCors, mapEmployeeData } from "./helpers";

const g = gapi.google;
const EMPLOYEE_SHEET_ID = "1mlRDAmYXV5UpfoTeGfTv0zqcMU2JVzgE6DI6SKUtK0E";

// https://us-central1-dalywinterllp.cloudfunctions.net/getEmployees
export const getEmployees = functions.https.onRequest(async (request, response) => {
  handleCors(request, response);
  const auth = await g.auth.getClient({
    scopes: ['https://www.googleapis.com/auth/spreadsheets']
  });
  const api = g.sheets({ version: 'v4', auth });
  api.spreadsheets.values.get({
    spreadsheetId: EMPLOYEE_SHEET_ID,
    range: 'Sheet1!A2:Z'
  }).then(res => {
    if (res) {
      if (res.data) {
        const rows = res.data.values;
        if (rows) {
          const staff = mapEmployeeData(rows);
          response.json(staff);
        } else {
          response.send(`No data in sheet ${EMPLOYEE_SHEET_ID}`);
        }
      }
    }
  }).catch(err => {
    response.send(`Error opening employees sheet: ${err}`);
  })
});

// https://us-central1-dalywinterllp.cloudfunctions.net/queryEmployees?q=fieldToCheck&v=searchTerm
export const queryEmployees = functions.https.onRequest(async (request, response) => {
  handleCors(request, response);
  const field = request.query.q;
  const searchTerm = request.query.v;
  const auth = await g.auth.getClient({
    scopes: ['https://www.googleapis.com/auth/spreadsheets']
  });
  const api = g.sheets({ version: 'v4', auth });
  api.spreadsheets.values.get({
    spreadsheetId: EMPLOYEE_SHEET_ID,
    range: 'Sheet1!A2:Z'
  }).then(res => {
    if (res) {
      if (res.data) {
        const rows = res.data.values;
        if (rows) {
          const data = rows.filter(e => {
            switch (field) {
              case "ID":
                return e[0] === searchTerm;
              case "Name":
                return e[1] === searchTerm;
              case "Location":
                return e[2] === searchTerm;
              case "Position":
                return e[3] === searchTerm;
              case "Department":
                return e[4] === searchTerm;
              case "Bio":
                return e[5] === searchTerm;
              default:
                return `ERROR: ${field} is not a valid Employee field!`;
            }
          });
          response.json(data);
        } else {
          response.send(`No data in sheet ${EMPLOYEE_SHEET_ID}`);
        }
      }
    }
  }).catch(err => {
    response.send(`Error opening employees sheet: ${err}`);
  })
});
