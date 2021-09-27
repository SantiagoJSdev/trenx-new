require("firebase/firestore");
const firebase = require("firebase");

import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";



// Initialize Cloud Firestore through Firebase


 const  firebaseApp = initializeApp({
      apiKey: "AIzaSyAVsaYgj0I6SVjVqUdMOrc7ikLeFYFLO8M",
      authDomain: "trenx-c0556.firebaseapp.com",
      projectId: "trenx-c0556"
    });
  
   const db = getFirestore();

  export {
  
    db
 

}