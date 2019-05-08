const firebaseApp = require('firebase/app');
const firebase = require('firebase');

var firebaseConfig = {
    apiKey: "AIzaSyCTi0eQ29OASXBCdGUFrluEDVSIURVmv0w",
    authDomain: "ewwproject-7aafb.firebaseapp.com",
    databaseURL: "https://ewwproject-7aafb.firebaseio.com",
    projectId: "ewwproject-7aafb",
    storageBucket: "ewwproject-7aafb.appspot.com",
    messagingSenderId: "797234592144",
    appId: "1:797234592144:web:611a541bbb1f49cb"
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