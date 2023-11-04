 
import { initializeApp } from "firebase/app";

console.log('from firebase ',import.meta.env.VITE_KEYS)

const firebaseConfig = {
  apiKey:import.meta.env.VITE_KEYS_APIKEY,
  authDomain:import.meta.env.VITE_KEYS_AUTHDOMAIN,
  projectId:import.meta.env.VITE_KEYS_PROJECTID,
  storageBucket:import.meta.env.VITE_KEYS_STORAGEBUCKET,
  messagingSenderId:import.meta.env.VITE_KEYS_MESSAGINGSENDERID,
  appId:import.meta.env.VITE_KEYS_APPID,
};

 
const app = initializeApp(firebaseConfig);

export default app