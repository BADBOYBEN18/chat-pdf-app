import { getApp, getApps, initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";


const firebaseConfig = {
	apiKey: "AIzaSyBtGs_kCwpvzIRDjhWxQZp5VwM6-evtm7E",
	authDomain: "chat-with-pdf-e214e.firebaseapp.com",
	projectId: "chat-with-pdf-e214e",
	storageBucket: "chat-with-pdf-e214e.appspot.com",
	messagingSenderId: "492551464372",
	appId: "1:492551464372:web:78a972b478c53f49c1fee1"
};

const app = getApps().length === 0 ? initializeApp(firebaseConfig) : getApp();

const db = getFirestore(app)
const storage = getStorage(app)

export {db,storage}