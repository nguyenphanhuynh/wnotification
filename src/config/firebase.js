// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getMessaging, getToken, onMessage } from "firebase/messaging";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyBbumjFW-R2QAN1Hl-kMV54fcMh8oB--EI",
    authDomain: "wax-notification.firebaseapp.com",
    projectId: "wax-notification",
    storageBucket: "wax-notification.appspot.com",
    messagingSenderId: "1029035108545",
    appId: "1:1029035108545:web:c55c1f764218356b6e0c40",
    measurementId: "G-VYMQC1VSCG"
};

// Initialize Firebase
export const firebaseApp = initializeApp(firebaseConfig);
const messaging = getMessaging(firebaseApp);

export const getDeviceToken = (setTokenFound) => {
    return getToken(messaging, { vapidKey: 'BKijh3BN5RtkTQrKK-VV3fOC-rmBlAuuFWTJdTB51dCPwGnUhMIKeqvyYOkS9m_ETs1vjtrhUm_z5aQXHgvuC9s' }).then((currentToken) => {
        if (currentToken) {
            console.log('current token for client: ', currentToken);
            setTokenFound(true);
            // Track the token -> client mapping, by sending to backend server
            // show on the UI that permission is secured
        } else {
            console.log('No registration token available. Request permission to generate one.');
            setTokenFound(false);
            // shows on the UI that permission is required
        }
    }).catch((err) => {
        console.log('An error occurred while retrieving token. ', err);
        // catch error while creating client token
    });
}

export const onMessageListener = () =>
    new Promise((resolve) => {
        onMessage(messaging, (payload) => {
            resolve(payload);
        });
    });