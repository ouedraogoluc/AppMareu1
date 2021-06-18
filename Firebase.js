import firebase from 'firebase/app'
import "firebase/auth";
import "firebase/firestore";
import "firebase/storage";
import "firebase/database";
var firebaseConfig = {
  apiKey: "AIzaSyDw3IZq9gDJvtWoxRPYDfw9XJTk7IoEf2Y",
  authDomain: "mareuapp-65565.firebaseapp.com",
  projectId: "mareuapp-65565",
  storageBucket: "mareuapp-65565.appspot.com",
  messagingSenderId: "785803539095",
  appId: "1:785803539095:web:f0df394d36f2463bc1efd2",
  measurementId: "G-DSFJF0ZBM9"
};
firebase.initializeApp(firebaseConfig);
  let app ;
  if (firebase.apps.length==0) {
    app=firebase.initializeApp(firebaseConfig)
  }else{
    app = firebase.app();
  }
const db = app.firestore();
const auth = firebase.auth();
const storage=app.storage();
export {db , auth,storage};

export default firebase