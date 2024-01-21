// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getStorage, ref, uploadBytes } from "firebase/storage";
import { extname } from "path";
import { v4 } from "uuid";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MSG_SENDER_ID,
  appId: process.env.NEXT_PUBLIC_APP_ID,
  projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
};

// Initialize Firebase
const firebase = initializeApp({
  ...firebaseConfig,
  authDomain: `${firebaseConfig.projectId}.firebaseapp.com`,
  storageBucket: `${firebaseConfig.projectId}.appspot.com`,
});

export default firebase;
export const uploadFile = async (file: File) => {
  const ext = extname(file.name);
  const id = v4();
  const storage = getStorage();
  const storageRef = ref(storage, `think/${id}${ext}`);

  try {
    // 'file' comes from the Blob or File API
    const snapshot = await uploadBytes(storageRef, file);
    return snapshot.ref.name;
  } catch (err: any) {
    console.error(err.message);
    return null;
  }
};
