import firebase from 'firebase/app'
import 'firebase/firestore'

const miConfigFirebase = {
    apiKey: "AIzaSyChjdZXgx1jtkoAQkHQ20bfiC2POnW3b3g",
    authDomain: "react-proyect-2816d.firebaseapp.com",
    projectId: "react-proyect-2816d",
    storageBucket: "react-proyect-2816d.appspot.com",
    messagingSenderId: "413973488901",
    appId: "1:413973488901:web:ce577c399ecb082b23836c"
}

const app = firebase.initializeApp(miConfigFirebase)

export const firestore = firebase.firestore(app)