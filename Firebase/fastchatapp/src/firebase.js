import firebase from 'firebase';

const config = {
  apiKey: 'AIzaSyCLfswGtPsRjj9SGeYJyG-E501-EuvHJ8g',
  authDomain: 'chatapp-22964.firebaseapp.com',
  databaseURL: 'https://chatapp-22964.firebaseio.com',
  projectId: 'chatapp-22964',
  storageBucket: 'chatapp-22964.appspot.com',
  messagingSenderId: '1085499246562',
};

firebase.initializeApp(config);

export const googleProvider = new firebase.auth.GoogleAuthProvider();

export const database = firebase.database();
export const storage = firebase.storage();
export const auth = firebase.auth();
