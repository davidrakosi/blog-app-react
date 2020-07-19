import firebase from 'firebase'

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyCipGyc_EW7A3VPp8hfYSdJKCmpyfJ5M8M",
    authDomain: "blog-app-rea.firebaseapp.com",
    databaseURL: "https://blog-app-rea.firebaseio.com",
    projectId: "blog-app-rea",
    storageBucket: "blog-app-rea.appspot.com",
    messagingSenderId: "191716292673",
    appId: "1:191716292673:web:9cfec9969e072872586ec0"
})

const db = firebaseApp.firestore()
const auth = firebase.auth()
const storage = firebase.storage()

export { db, auth, storage }