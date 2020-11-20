import firebase from "firebase";

const firebaseProjectName = "my-boat-project-bc307";

const config = {
  apiKey: "WClSh85oPr2cf08hHUn7YejZ9IzSiXsqmSYGZQ9w",
  authDomain: `${firebaseProjectName}.firebaseapp.com`,
  databaseURL: `https://${firebaseProjectName}.firebaseio.com`,
  projectId: `${firebaseProjectName}`,
};

export default !firebase.apps.length
  ? firebase.initializeApp(config)
  : firebase.app();
