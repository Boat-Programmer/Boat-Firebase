import firebase from "firebase";

const firebaseProjectName = "b-cloud-app";

const config = {
  apiKey: "M4vwGufRaHhaTtefCixty6ps5irq5NfrxwQUnVZD",
  authDomain: `${firebaseProjectName}.firebaseapp.com`,
  databaseURL: `https://${firebaseProjectName}.firebaseio.com`,
  projectId: `${firebaseProjectName}`,
};

export default !firebase.apps.length
  ? firebase.initializeApp(config)
  : firebase.app();
