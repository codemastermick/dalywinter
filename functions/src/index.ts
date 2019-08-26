import * as functions from "firebase-functions";
import * as admin from "firebase-admin";
import * as gapi from "googleapis";
const g = gapi.google;

// Initialize the Admin SDK
admin.initializeApp({
  credential: admin.credential.applicationDefault(),
  databaseURL: "https://dalywinterllp.firebaseio.com"
});

// Initialize express server
import * as express from "express";
import { mapEmployeeData } from "./helpers";
const app = express()


// ROUTE HANDLING
app.get("/", (request, response) => {
  response.send("Welcome to the User Demo API!")
})

// app.use("/api/*", (request, response) => {
//     response.send(`API call to ${request.path} successful!`);
// })

// app.get("/v1/*", (request, response) => {
//   response.send(`API call to ${request.path} successful!`);
// })


const EMPLOYEE_SHEET_ID = "1mlRDAmYXV5UpfoTeGfTv0zqcMU2JVzgE6DI6SKUtK0E";


app.get("/users", async (request, response) => {
  const auth = await g.auth.getClient({
    scopes: ['https://www.googleapis.com/auth/spreadsheets.readonly']
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
})



// export * from "./employees";
// export * from "./testimonials";
// export * from "./services";
// exports the express server as a function accessible under the route /api
export const API = functions.https.onRequest(app);
