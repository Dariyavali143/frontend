


// Firebase configuration (Edi CRUD Operations ki sambandinchinadi ...? )

import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore/lite'
//import { getAnalytics } from "firebase/analytics";
//import {getAuth,GoogleAuthProvider} from 'firebase/auth';

const firebaseConfig = {
  
  apiKey:process.env.REACT_APP_SECRET_KEY_apiKey,
  authDomain:process.env.REACT_APP_SECRET_KEY_authDomain,
  projectId:process.env.REACT_APP_SECRET_KEY_projectId,
  storageBucket:process.env.REACT_APP_SECRET_KEY_storageBucket,
  messagingSenderId:process.env.REACT_APP_SECRET_KEY_messagingSenderId,
  appId:process.env.REACT_APP_SECRET_KEY_appId,
  measurementId:process.env.REACT_APP_SECRET_KEY_measurementId



};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
 export const db=getFirestore(app)
// end Firebase configuration
// 


