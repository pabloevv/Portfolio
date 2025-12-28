import { initializeApp } from "https://www.gstatic.com/firebasejs/12.6.0/firebase-app.js";
import { getAnalytics, isSupported } from "https://www.gstatic.com/firebasejs/12.6.0/firebase-analytics.js";
import {
  getFirestore,
  addDoc,
  collection,
  serverTimestamp,
} from "https://www.gstatic.com/firebasejs/12.6.0/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyBspO8ZCJEg06055Iu7APf4FqEKcB-hAgY",
  authDomain: "sitioweb-1863d.firebaseapp.com",
  projectId: "sitioweb-1863d",
  storageBucket: "sitioweb-1863d.firebasestorage.app",
  messagingSenderId: "830467803970",
  appId: "1:830467803970:web:9b51d3c47d73778e2396db",
  measurementId: "G-WPY8SXH5H4",
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

let analytics = null;

isSupported()
  .then((supported) => {
    if (supported) {
      analytics = getAnalytics(app);
    }
  })
  .catch((error) => {
    console.warn("Firebase Analytics not initialized:", error);
  });

export { app, db, analytics, addDoc, collection, serverTimestamp };
