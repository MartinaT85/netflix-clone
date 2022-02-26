import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: process.env.REACT_APP_API_KEY_FB,

  authDomain: process.env.REACT_APP_AUTH_DOMAIN_FB,

  projectId: process.env.REACT_APP_PROJECT_ID_FB,

  storageBucket: process.env.REACT_APP_STORAGE_BUCKET_FB,

  messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID_FB,

  appId: process.env.REACT_APP_APP_ID_FB,
};

const firebaseApp = initializeApp(firebaseConfig);

export const auth = getAuth(firebaseApp);

export default firebaseApp;
