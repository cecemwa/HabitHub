import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { auth, db } from "./firebase";
import { doc, setDoc } from "firebase/firestore";

export const registerUser = async (email, password) => {
  console.log("registerUser called with:", email);
  const cred = await createUserWithEmailAndPassword(auth, email, password);
  const user = cred.user;

  await setDoc(doc(db, "users", user.uid), {
    email: user.email,
    createdAt: Date.now(),
  });

  console.log("Firestore user doc created:", user.uid);
  return user;
};
