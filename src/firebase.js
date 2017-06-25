import firebase from 'firebase';

  // Initialize Firebase

  //place config object from .env here:
  firebase.initializeApp(config);


export default firebase;

export const database = firebase.database();
