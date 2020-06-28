import firebase from 'firebase/app';
import 'firebase/firestore';

const firestore = firebase.firestore();

firestore
  .collection('users')
  .doc('TrRyhmKdzWuvjidPAsQ6')
  .collection('cartItems')
  .doc('dn2MspBfupVrlOpvqqdf');
  
