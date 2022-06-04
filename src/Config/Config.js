import * as firebase from 'firebase'

import 'firebase/storage';
import 'firebase/firestore';
import 'firebase/auth'

const firebaseConfig = {
    apiKey: "AIzaSyCLDmfHKIXTy6YiUZ33kyiVz0OvAjqziPw",
    authDomain: "new-web-36b73.firebaseapp.com",
    databaseURL: "https://new-web-36b73-default-rtdb.firebaseio.com/",
    projectId: "new-web-36b73",
    storageBucket: "new-web-36b73.appspot.com",
    messagingSenderId: "272884481437",
    appId: "1:272884481437:web:04e576780212d5baaec374",
    measurementId: "G-3B9Q6JDT5X"
};

firebase.initializeApp(firebaseConfig);

const auth = firebase.auth();
const db = firebase.firestore();
const storage = firebase.storage();

export { auth, db, storage }