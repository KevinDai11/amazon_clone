import {initializeApp} from 'firebase/app';
import {getFirestore} from 'firebase/firestore';
import {getAuth} from 'firebase/auth';


// For Firebase JS SDK v7.20.0 and later, measurementId is optional



const firebaseConfig = {

    apiKey: "AIzaSyALk_atPXeRZkoguvYdN-Ca699_GCexZe4",
  
    authDomain: "fir-3d15e.firebaseapp.com",
  
    projectId: "fir-3d15e",
  
    storageBucket: "fir-3d15e.appspot.com",
  
    messagingSenderId: "270926378605",
  
    appId: "1:270926378605:web:050ab96be7cbc988c4f164",
  
    measurementId: "G-1TK97110XT"
  
  };

  const firebaseApp = initializeApp(firebaseConfig);

  const database = getFirestore(firebaseApp);
  const auth = getAuth(firebaseApp);


export { database, auth };