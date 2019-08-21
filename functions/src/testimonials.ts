import * as functions from "firebase-functions";
import * as gapi from "googleapis";
import { handleCors, mapTestimonialData } from "./helpers";
const g = gapi.google;

const TESTIMONIAL_SHEET_ID = "1jBOudHa1fp_38RSPSYESemFhleuLaXd7mSb3HiTRbm8";

// https://us-central1-dalywinterllp.cloudfunctions.net/getTestimonials
export const getTestimonials = functions.https.onRequest(async (request, response) => {
  handleCors(request, response);
  const auth = await g.auth.getClient({
    scopes: ['https://www.googleapis.com/auth/spreadsheets.readonly']
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

