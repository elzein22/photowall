import * as firebase from 'firebase';

  var config = {
    apiKey: "AIzaSyDPJSBlL8Fysgr7smHhm_TT4lhbJUwRiKA",
    authDomain: "photowall-84447.firebaseapp.com",
    databaseURL: "https://photowall-84447.firebaseio.com",
    projectId: "photowall-84447",
    storageBucket: "photowall-84447.appspot.com",
    messagingSenderId: "546427655013",
    appId: "1:546427655013:web:f235784d35e3aea4"
  };

  firebase.initializeApp(config)

  const database = firebase.database()

  export {database};

