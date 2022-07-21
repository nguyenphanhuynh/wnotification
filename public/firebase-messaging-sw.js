// Scripts for firebase and firebase messaging
importScripts('https://www.gstatic.com/firebasejs/9.0.0/firebase-app-compat.js');
importScripts('https://www.gstatic.com/firebasejs/9.0.0/firebase-messaging-compat.js');

// Initialize the Firebase app in the service worker by passing the generated config
const firebaseConfig = {
    apiKey: "AIzaSyBbumjFW-R2QAN1Hl-kMV54fcMh8oB--EI",
    authDomain: "wax-notification.firebaseapp.com",
    projectId: "wax-notification",
    storageBucket: "wax-notification.appspot.com",
    messagingSenderId: "1029035108545",
    appId: "1:1029035108545:web:c55c1f764218356b6e0c40"
};

firebase.initializeApp(firebaseConfig);

// Retrieve firebase messaging
const messaging = firebase.messaging();

messaging.onBackgroundMessage(function (payload) {
    console.log('Received background message ', payload);

    const notificationTitle = payload.notification.title;
    const notificationOptions = {
        body: payload.notification.body,
    };

    self.registration.showNotification(notificationTitle,
        notificationOptions);
});