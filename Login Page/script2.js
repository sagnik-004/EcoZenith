
const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyAWCEsL2MLvKg-r9v495VF0HVE_LM6EVOI",
  authDomain: "ecozenith-bc2df.firebaseapp.com",
  databaseURL: "https://ecozenith-bc2df-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "ecozenith-bc2df",
  storageBucket: "ecozenith-bc2df.appspot.com",
  messagingSenderId: "614951589457",
  appId: "1:614951589457:web:f0ef6159583c1113860a70",
  measurementId: "G-9W8FZZFWEM"
});

const db = firebaseApp.firestore();
const auth = firebase.auth(); // Corrected

document.getElementById("login").addEventListener('click', (e) => {
  const email = document.getElementById("email").value; // Replace "email" with the actual id of your email input field
  const password = document.getElementById("password").value; // Replace "password" with the actual id of your password input field

  
});
