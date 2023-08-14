import { initializeApp } from 'firebase/app';

import { getAuth, signInWithPopup, GoogleAuthProvider } from 'firebase/auth';

import { getFirestore, doc, getDoc, setDoc, } from 'firebase/firestore';
const firebaseConfig = {
    apiKey: "AIzaSyDjLcQYlP3pqvOZeF29U0utrXVOZ1Hc_LA",
    authDomain: "crwn-clothing-c4927.firebaseapp.com",
    projectId: "crwn-clothing-c4927",
    storageBucket: "crwn-clothing-c4927.appspot.com",
    messagingSenderId: "903356424826",
    appId: "1:903356424826:web:0b0bae324c734a226b91c3",
    measurementId: "G-B9YKT25YEK"
  };

const app = initializeApp(firebaseConfig);

const googleProvider = new GoogleAuthProvider();

googleProvider.setCustomParameters({
  prompt: "select_account",
})

export const auth = getAuth(); 

export const signInWithGooglePopup = () => signInWithPopup(auth, googleProvider);


export const db = getFirestore(); 

export const creatUserDocumentFromAuth = async (userAuth) => {
  const userDocRef = doc(db, 'users', userAuth.user.uid)

  const userSnapshot = await getDoc(userDocRef)

  if(!userSnapshot.exists()) 
  {
    const { displayName, email } = userAuth.user
    const createdAt = new Date()

    try {
      await setDoc(userDocRef, {
        displayName,
        email,
        createdAt,
      });
    } catch (err) {
      console.log('error creating the user', err.message);
    }
  }
  return userDocRef;
}