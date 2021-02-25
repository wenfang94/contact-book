// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDhgSBFnTqsdCD0bpK2ODH0kRvPeTASwqc",
    authDomain: "contact-book-48560.firebaseapp.com",
    projectId: "contact-book-48560",
    storageBucket: "contact-book-48560.appspot.com",
    messagingSenderId: "167436886614",
    appId: "1:167436886614:web:82e6164aa73c0a376111f7"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  
  const db = firebase.firestore()