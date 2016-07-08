import firebase from "firebase";

try {
  var config = {
    apiKey: "AIzaSyAq30DFtzKA13ZykCAMFlpqC4R7F449g3w",
    authDomain: "todo-app-redux.firebaseapp.com",
    databaseURL: "https://todo-app-redux.firebaseio.com",
    storageBucket: "todo-app-redux.appspot.com",
  };
  firebase.initializeApp(config);

} catch (e) {
  console.log("Error", e);
  throw new Error("Error! " + e);
}

export var firebaseRef = firebase.database().ref();
export default firebase;
