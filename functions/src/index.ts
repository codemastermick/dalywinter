// import * as functions from "firebase-functions";
import * as admin from "firebase-admin";
// import * as gapi from "googleapis";
// const g = gapi.google;

admin.initializeApp({
  credential: admin.credential.applicationDefault(),
  databaseURL: "https://dalywinterllp.firebaseio.com"
});


export * from "./employees";
export * from "./testimonials";
export * from "./services";
