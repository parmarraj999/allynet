import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
import { getAuth } from 'firebase/auth';


const firebaseConfig = {
  apiKey: "AIzaSyBIJjw3MH_l_5l2PQCpL92fZBnAXR2jEag",
  authDomain: "allynet-b21ec.firebaseapp.com",
  projectId: "allynet-b21ec",
  storageBucket: "allynet-b21ec.firebasestorage.app",
  messagingSenderId: "372412723624",
  appId: "1:372412723624:web:547e0c30d003d5ca2a2d9d",
  measurementId: "G-KKQPJH5Q67"
};

const auth = getAuth(app);
const db = getFirestore(app);
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export { auth, db, analytics };