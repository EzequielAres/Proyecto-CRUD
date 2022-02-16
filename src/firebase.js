import firebase from "firebase/app";
import "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyC1qmSLBslbIAnwg87gZuyVkD2SHp3g9b8",
    authDomain: "crud-tareas-clase.firebaseapp.com",
    projectId: "crud-tareas-clase",
    storageBucket: "crud-tareas-clase.appspot.com",
    messagingSenderId: "1025844045536",
    appId: "1:1025844045536:web:f1feb508e0b23a7ea2d285"
  };
  
  firebase.initializeApp(firebaseConfig);

  export {firebase}