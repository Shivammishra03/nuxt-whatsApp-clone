import { initializeApp } from "firebase/app";
import { getAuth} from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCDQXGrldCwcpcyK8EHo17Zgv9Cz4tizU8",
  authDomain: "whatsapp-clone-ff4ac.firebaseapp.com",
  projectId: "whatsapp-clone-ff4ac",
  storageBucket: "whatsapp-clone-ff4ac.appspot.com",
  messagingSenderId: "767254652645",
  appId: "1:767254652645:web:f069aa1aafef812077160c",
  measurementId: "G-3SE6LH9GT3"
};

const app = initializeApp(firebaseConfig);
export const firebaseAuth = getAuth(app);