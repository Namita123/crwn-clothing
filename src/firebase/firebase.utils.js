import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';

const config = {
    apiKey: "AIzaSyCMtQml8mlxRPRZkfqZJR42cKVuYVGhfpE",
    authDomain: "crown-db-a968d.firebaseapp.com",
    projectId: "crown-db-a968d",
    storageBucket: "crown-db-a968d.appspot.com",
    messagingSenderId: "1037925246208",
    appId: "1:1037925246208:web:a7d476bcee0587a5feffe5",
    measurementId: "G-SZZ9X94R3S"
  }

  firebase.initializeApp(config);
  export const auth = firebase.auth();
  export const firestore = firebase.firestore();

  export const createUserProfileDocument = async (userAuth, additionalData) => {

    console.log("userAuth",userAuth);
    console.log("additionalData",additionalData);
    if(!userAuth) return;

    const userRef = firestore.doc(`users/${userAuth.uid}`);
    const snapshot = await userRef.get();

    if(!snapshot.exists){
      const {displayName, email} = userAuth;
    const createdDate = Date.now();
    try{
      await userRef.set({
        displayName,email, createdDate , ...additionalData
      })
    }catch(err){
      console.log("err",err);
    }
    }
    return userRef;
  }

  const provider =  new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({prompt: 'select_account'});
  export const signInWithGoogle = () => auth.signInWithPopup(provider);

  export default firebase;