
 
 import firebase from 'firebase/app';
 import 'firebase/auth'; 
 const config = {
    apiKey: "AIzaSyBB6mXvH05vZq1dbiM3L5habl9XDlI6Mag",
    authDomain: "uthenticate.firebaseapp.com",
    databaseURL: "https://uthenticate.firebaseio.com",
    projectId: "uthenticate",
    storageBucket: "uthenticate.appspot.com",
    messagingSenderId: "51516239695"
  };

  if(!firebase.apps.length){
    firebase.initializeApp(config);
  }
  
  const auth = firebase.auth();

  export{
    auth,
  }

