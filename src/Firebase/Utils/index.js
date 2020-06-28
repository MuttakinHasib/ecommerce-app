import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: 'AIzaSyCxLFyEhOpSnf-TxN6sp_9n-KCZGoGUJ_I',
  authDomain: 'crwn-db-a2228.firebaseapp.com',
  databaseURL: 'https://crwn-db-a2228.firebaseio.com',
  projectId: 'crwn-db-a2228',
  storageBucket: 'crwn-db-a2228.appspot.com',
  messagingSenderId: '827127684685',
  appId: '1:827127684685:web:3557933843f260776d0604',
  measurementId: 'G-FL4SG9P2E4',
};

export const createUserProfileDocument = async (userAuth, others) => {
  if (!userAuth) return;
  const userRef = firestore.doc(`users/${userAuth.uid}`);
  const snapShot = await userRef.get();
  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await userRef.set({ displayName, email, createdAt, ...others });
    } catch (err) {
      console.log(err.message);
    }
  }
  return userRef;
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
