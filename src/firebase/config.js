import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";
import { getAuth } from "firebase/auth";
import * as fbConfig from "./firebase-config.json";

const firebaseConfig = fbConfig;

const app = initializeApp(firebaseConfig);
const db = getDatabase(app);
const auth = getAuth(app);

export { db, auth };
