import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";
import { getAuth } from "firebase/auth";

import * as fbConfig from "./firebase-config.json"; // TODO: get config file from desktop PC

const firebaseConfig = fbConfig;

const app = initializeApp(firebaseConfig);
const db = getDatabase(app);
const auth = getAuth(app);

export { db, auth };
