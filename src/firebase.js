import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyCZErrE0gVH83bucmfIjMydPqWNbYT_7GU",
    authDomain: "whatsapp-clone-d33d1.firebaseapp.com",
    databaseURL: "https://whatsapp-clone-d33d1.firebaseio.com",
    projectId: "whatsapp-clone-d33d1",
    storageBucket: "whatsapp-clone-d33d1.appspot.com",
    messagingSenderId: "205187263243",
    appId: "1:205187263243:web:91e67c7512d42052bf100e",
    measurementId: "G-ZZZRL7NMLT"
  };

const firebaseApp=firebase.initializeApp(firebaseConfig)
const db=firebaseApp.firestore();
const auth=firebase.auth();
const provider=new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;