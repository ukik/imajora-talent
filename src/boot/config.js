// import PouchDB from 'pouchdb'
import * as firebase from 'firebase/app'
import '@firebase/messaging'

// const remoteDB = new PouchDB('https://database_url')

const firebaseConfig = {
  databaseURL: '',
  apiKey: "AIzaSyAA4CbbVfKtB0Uj8TF3lF3PuXboqkY02Sc",
  authDomain: "cubix-0.firebaseapp.com",
  projectId: "cubix-0",
  storageBucket: "cubix-0.appspot.com",
  messagingSenderId: "907739369245",
  appId: "1:907739369245:web:684363bd01b12bd5735bf4",
  measurementId: "G-NK5F0JJDM9"
}

firebase.initializeApp(firebaseConfig)

const messaging = firebase.messaging()
messaging.onMessage(function (payload) {
  //console.log('On message ' + payload)
})

export {
  // remoteDB,
  messaging
}
