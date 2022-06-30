import firebase from "firebase/app";
import "firebase/auth";

export const auth = firebase.initializeApp({
    apiKey: "AIzaSyDmKSSjQOYj_YSG6RYEgV3Wie7bUx3-FiI",
    authDomain: "meowchat-8bf7a.firebaseapp.com",
    projectId: "meowchat-8bf7a",
    storageBucket: "meowchat-8bf7a.appspot.com",
    messagingSenderId: "521480528250",
    appId: "1:521480528250:web:73451f15bf9018fe6f36c3"
}).auth();