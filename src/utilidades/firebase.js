// Importa la función de inicialización de Firebase desde el SDK de Firebase
import { initializeApp } from "firebase/app";


// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Configuración de Firebase para la app
const firebaseConfig = {
    apiKey: "AIzaSyCeehdeIzjhSPo2oBQswGaw4_67158iMNY",
    authDomain: "datos-fisioconectt.firebaseapp.com",
    projectId: "datos-fisioconectt",
    storageBucket: "datos-fisioconectt.appspot.com",
    messagingSenderId: "494275880961",
    appId: "1:494275880961:web:1890a9b0d386e5ac93f800"
};

// Inicializa Firebase con la configuración proporcionada
export const initFirebase = initializeApp(firebaseConfig);