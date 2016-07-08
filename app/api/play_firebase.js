import firebase from "firebase";

// Initialize Firebase
var config = {
  apiKey: "AIzaSyAq30DFtzKA13ZykCAMFlpqC4R7F449g3w",
  authDomain: "todo-app-redux.firebaseapp.com",
  databaseURL: "https://todo-app-redux.firebaseio.com",
  storageBucket: "todo-app-redux.appspot.com",
};
firebase.initializeApp(config);

// firebase.database().ref().set({
//   appName: "Todo App with Redux and Firebase",
//   todos: [{
//     id: 1,
//     text: "hello"
//   }, {
//     id: 2,
//     text: "world"
//   }]
// });

var firebaseRef = firebase.database().ref();
//
// firebaseRef.set({
//   app: {
//     name: "Todo App",
//     version: "Ulalla"
//   },
//   user: {
//     name: "Jon",
//     job: "Lord Commander"
//   },
//   todos: [{
//     id: 1,
//     text: "hello"
//   }, {
//     id: 2,
//     text: "world"
//   }]
// });

var todosRef = firebaseRef.child("todos");
todosRef.on("child_added", (snapshot) => {
  console.log("New todo on the way!", snapshot.key);
});
var newTodoRef = todosRef.push({
  text: "Walk the dog"
});

// var notes = firebaseRef.child("notes");
//
// notes.on("child_added", (snapshot) => {
//   console.log(snapshot.key, snapshot.val());
// });
//
// var newNote = notes.push({
//   text: "Hello world"
// });
//
// console.log(newNote.key);
// newNote.set({
//   text: "Run thousands miles"
// });

// firebaseRef.child("app").on("value", (snapshot) => {
//   console.log(snapshot.key, snapshot.val());
// });
// firebaseRef.child("user").on("value", (snapshot) => {
//   console.log(snapshot.key, snapshot.val());
// });
//
// firebaseRef.child("app").update({
//   name: "New App"
// });
// firebaseRef.child("user").update({
//   name: "Jon Snow"
// });

// firebaseRef.on("value", (snapshot) => {
//   console.log("snapshot!", snapshot.val());
// });
//
// firebaseRef.child("user").once("value").then(
//   (snapshot) => {
//     console.log("key", snapshot.key);
//     console.log(snapshot.val());
//   },
//   (e) => {
//     console.log("Unable to fetch value", e);
//   }
// );

firebaseRef.child("user").update({
  job: "Pilot"
});
// firebaseRef.child("todos").remove();
// firebaseRef.child("todos").set({
//   something: "new"
// });

// {
//   "rules": {
//     ".read": "auth != null",
//     ".write": "auth != null"
//   }
// }
