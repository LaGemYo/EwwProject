const firebaseApp = require('firebase/app');
const firebase = require('firebase');

var firebaseConfig = {
    apiKey: "AIzaSyDs8l25OE4LEdTr4chnlP62WZk8mNIlI4c",
    authDomain: "skylabtest-8e4d3.firebaseapp.com",
    databaseURL: "https://skylabtest-8e4d3.firebaseio.com",
    projectId: "skylabtest-8e4d3",
    storageBucket: "skylabtest-8e4d3.appspot.com",
    messagingSenderId: "301078835903",
    appId: "1:301078835903:web:3b0b48cb22ccedbf"
  };
  // Initialize Firebase
  firebaseApp.initializeApp(firebaseConfig);

async function getBichos () {
    const db = firebase.firestore();
    let results = [];

    try {
      const querySnapshot = await db.collection("contacts").get();

      querySnapshot.forEach(doc => {
        const objectResult = doc.data();
        objectResult.id = doc.id;
        results.push(objectResult);
      }) 
    } catch (err) {
			console.log("TCL: DataService -> getContacts -> err", err)
    }

    return results;
}

setInterval(async () => {
    const bichos = await getBichos();
    console.log(bichos)
}, 50000)

setInterval(async () => {
    const bichos = await getBichos();
    console.log(bichos)
}, 40000)