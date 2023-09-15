import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth'

const firebaseConfig = {
  apiKey: "AIzaSyBZiFkDIHy1OjRXLKecpCcdwwhhYIQbhq4",
  authDomain: "auth-development-116d4.firebaseapp.com",
  projectId: "auth-development-116d4",
  storageBucket: "auth-development-116d4.appspot.com",
  messagingSenderId: "468348931936",
  appId: "1:468348931936:web:0b1803de394372fb011805"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export default app
