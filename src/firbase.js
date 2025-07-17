import { initializeApp } from "firebase/app";
import { createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { addDoc, collection, getFirestore } from "firebase/firestore";
import { toast } from "react-toastify";


const firebaseConfig = {
  apiKey: "AIzaSyCXH3M3B6Mn0romJ00XkyyO5UKJ3qtrfUc",
  authDomain: "netflix-clone-a8a3b.firebaseapp.com",
  projectId: "netflix-clone-a8a3b",
  storageBucket: "netflix-clone-a8a3b.firebasestorage.app",
  messagingSenderId: "494739694244",
  appId: "1:494739694244:web:404cc0f4504ebd16557c31"
};


const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

const signup  = async (name,email,password) => {
  try {
    const res = await createUserWithEmailAndPassword(auth, email, password);
    const user = res.user;
    await addDoc(collection(db,"user"),{
      uid: user.uid,
      name,
      authProvider: "local",
      email,
    });
  } catch (error) {
    console.log(error);
    toast.error(error.code.split('/')[1].split('-').join(" "))
  }
}

const login = async (email, password) => {
  try {
    await signInWithEmailAndPassword(auth, email, password);
  } catch (error) {
    console.log(error);
    toast.error(error.code.split('/')[1].split('-').join(" "))
  }
}

const logout = ()=>{
  signOut(auth);
}


export {auth, db, login, signup, signOut , logout};