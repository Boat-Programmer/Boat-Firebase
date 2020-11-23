import firebase from "firebase";

const firebaseProjectName = "b-cloud-app";

const config = {
  apiKey: "AIzaSyDn2ythD5-lSEwPUWHKE3nxKMw6ctw49y0",
  authDomain: `${firebaseProjectName}.firebaseapp.com`,
  databaseURL: `https://${firebaseProjectName}.firebaseio.com`,
  projectId: `${firebaseProjectName}`,
};

export default !firebase.apps.length
  ? firebase.initializeApp(config)
  : firebase.app();
