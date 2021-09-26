// import firebase from "firebase/app";
import { GoogleAuthProvider } from "firebase/auth";
import { initializeApp } from 'firebase/app';
import 'firebase/firestore'
import 'firebase/auth'


const firebaseConfig = {
    apiKey: "AIzaSyAVsaYgj0I6SVjVqUdMOrc7ikLeFYFLO8M",
    authDomain: "trenx-c0556.firebaseapp.com",
    projectId: "trenx-c0556",
    storageBucket: "trenx-c0556.appspot.com",
    messagingSenderId: "791245308073",
    appId: "1:791245308073:web:a1f0905ba462eb963b69b8",
    measurementId: "G-0YC8LYJC6R"
  };
  
  
const app = initializeApp(firebaseConfig);


const provider = new GoogleAuthProvider();



export {
   
    provider,
    app
 

}

