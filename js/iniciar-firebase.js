const firebaseConfig = {
  apiKey: "AIzaSyBeUIu6eRCmiSpqE1FE8ZH8d8hY0Y7ZMCY",
  authDomain: "evan-definitivo.firebaseapp.com",
  projectId: "evan-definitivo",
  storageBucket: "evan-definitivo.appspot.com",
  messagingSenderId: "453527181238",
  appId: "1:453527181238:web:6383af6301d4fc83d41317"
};

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

const auth = firebase.auth();
const firestore = firebase.firestore();
const storage = firebase.storage();

