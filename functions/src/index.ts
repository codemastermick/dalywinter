import * as functions from "firebase-functions";
import * as admin from "firebase-admin";
import * as gapi from "googleapis";
import { handleCors, mapEmployeeData, mapServiceData, mapTestimonialData } from "./helpers";

const g = gapi.google;

admin.initializeApp({
  credential: admin.credential.applicationDefault(),
  databaseURL: "https://dalywinterllp.firebaseio.com"
});

const EMPLOYEE_SHEET_ID = "1mlRDAmYXV5UpfoTeGfTv0zqcMU2JVzgE6DI6SKUtK0E";
const SERVICE_SHEET_ID = "1_3l67htFqxW4A9aazyft46rQUrJIAaGOBj5qXbSJp4U";
const TESTIMONIAL_SHEET_ID = "1jBOudHa1fp_38RSPSYESemFhleuLaXd7mSb3HiTRbm8";

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
          response.json(mapEmployeeData(rows));
        } else {
          response.send(`No data in sheet ${EMPLOYEE_SHEET_ID}`);
        }
      }
    }
  }).catch(err => {
    response.send(`Error opening employees sheet: ${err}`);
  })
});

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

// https://us-central1-dalywinterllp.cloudfunctions.net/getTestimonials
export const getTestimonials = functions.https.onRequest(async (request, response) => {
  handleCors(request, response);
  const auth = await g.auth.getClient({
    scopes: ['https://www.googleapis.com/auth/spreadsheets']
  });
  const api = g.sheets({ version: 'v4', auth });
  api.spreadsheets.values.get({
    spreadsheetId: TESTIMONIAL_SHEET_ID,
    range: 'Sheet1!A2:Z'
  }).then(res => {
    if (res) {
      if (res.data) {
        const rows = res.data.values;
        if (rows) {
          response.send(mapTestimonialData(rows));
        } else {
          response.send(`No data in sheet ${TESTIMONIAL_SHEET_ID}`);
        }
      }
    }
  }).catch(err => {
    response.send(`Error opening testimonials sheet: ${err}`);
  })
});
