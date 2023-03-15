// import firebase from 'firebase/compat/app';
// import 'firebase/messaging'

// // Initialize Firebase
// firebase.initializeApp({
//   'messagingSenderId': '907739369245'
// });

import { boot } from 'quasar/wrappers'

export default boot(async({ app, ssrContext, router, store }) => {

    try {
        navigator.serviceWorker.register('firebase-messaging-sw.js', {
          scope: "firebase-cloud-messaging-push-scope"
        })
        .then((registration) => {
            const messaging = firebase.messaging();
            messaging.useServiceWorker(registration);
        }).catch(err => {
            //console.log(err)
        })
    } catch (err) {}

})
