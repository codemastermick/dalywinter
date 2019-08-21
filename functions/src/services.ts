import * as functions from "firebase-functions";
import * as gapi from "googleapis";
import { handleCors, mapServiceData } from "./helpers";
const g = gapi.google;

const SERVICE_SHEET_ID = "1_3l67htFqxW4A9aazyft46rQUrJIAaGOBj5qXbSJp4U";

// https://us-central1-dalywinterllp.cloudfunctions.net/getServices
export const getServices = functions.https.onRequest(async (request, response) => {
  handleCors(request, response);
  const auth = await g.auth.getClient({
    scopes: ['https://www.googleapis.com/auth/spreadsheets']
  });
  const api = g.sheets({ version: 'v4', auth });
  api.spreadsheets.values.get({
    spreadsheetId: SERVICE_SHEET_ID,
    range: 'Sheet1!A2:Z'
  }).then(res => {
    if (res) {
      if (res.data) {
        const rows = res.data.values;
        if (rows) {
          response.send(mapServiceData(rows));
        } else {
          response.send(`No data in sheet ${SERVICE_SHEET_ID}`);
        }
      }
    }
  }).catch(err => {
    response.send(`Error opening services sheet: ${err}`);
  })
});

// https://us-central1-dalywinterllp.cloudfunctions.net/queryServices?q=fieldToCheck&v=searchTerm
export const queryServices = functions.https.onRequest(async (request, response) => {
  handleCors(request, response);
  const field = request.query.q;
  const searchTerm = request.query.v;
  const auth = await g.auth.getClient({
    scopes: ['https://www.googleapis.com/auth/spreadsheets']
  });
  const api = g.sheets({ version: 'v4', auth });
  api.spreadsheets.values.get({
    spreadsheetId: SERVICE_SHEET_ID,
    range: 'Sheet1!A2:Z'
  }).then(res => {
    if (res) {
      if (res.data) {
        const rows = res.data.values;
        if (rows) {
          const data = rows.filter(s => {
            switch (field) {
              case "ID":
                return s[0] === searchTerm;
              case "Name":
                return s[1] === searchTerm;
              case "Description":
                return s[2] === searchTerm;
              case "Cost":
                return s[3] === searchTerm;
              default:
                return `ERROR: ${field} is not a valid Service field!`;
            }
          });
          response.json(data);
        } else {
          response.send(`No data in sheet ${SERVICE_SHEET_ID}`);
        }
      }
    }
  }).catch(err => {
    response.send(`Error opening services sheet: ${err}`);
  })
});
