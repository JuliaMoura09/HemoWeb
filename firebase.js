// Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/13.0.0/firebase-app.js";
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  const firebaseConfig = {
    apiKey: "AIzaSyBrSiPa7aDyPUiuxWB1FoOxzCFdcb1MVlo",
    authDomain: "hemoconecta.firebaseapp.com",
    databaseURL: "https://hemoconecta-default-rtdb.firebaseio.com",
    projectId: "hemoconecta",
    storageBucket: "hemoconecta.firebasestorage.app",
    messagingSenderId: "215175259716",
    appId: "1:215175259716:web:d353aa032887f3934cfe11"
  };
  import { getAuth } from "https://www.gstatic.com/firebasejs/13.0.0/firebase-auth.js";

  const auth = getAuth(app);

  export { auth };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);