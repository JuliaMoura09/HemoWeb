// Importa as funções do Firebase necessários
import { initializeApp } from "https://www.gstatic.com/firebasejs/13.0.0/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/13.0.0/firebase-auth.js";

// Configuração do teu projeto no Firebase
const firebaseConfig = {
    apiKey: "AIzaSyBrSiPa7aDyPUiuxWB1FoOxzCFdcb1MVlo",
    authDomain: "hemoconecta.firebaseapp.com",
    databaseURL: "https://hemoconecta-default-rtdb.firebaseio.com",
    projectId: "hemoconecta",
    storageBucket: "hemoconecta.firebasestorage.app",
    messagingSenderId: "215175259716",
    appId: "1:215175259716:web:d353aa032887f3934cfe11"
  };

// 1. Inicializa a aplicação PRIMEIRO
const app = initializeApp(firebaseConfig);

// 2. Cria a autenticação usando a aplicação já inicializada
const auth = getAuth(app);

// 3. Exporta o auth para usar noutros ficheiros
export { auth };