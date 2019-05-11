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

  async function updateBicho(id, data) {
    const db = firebase.firestore();
    let success = true;

    try {
      //con la propiedad merge sólo sobreescribo el dato en concreto que me interesa.
      await db.collection("ewws").doc(id).set(data, {merge: true});
    } catch (err) {
      success = false;
		  console.log("TCL: DataService -> updateDetail -> err", err)
    }

    return success;
  }

async function getBichos () {
    const db = firebase.firestore();
    let results = [];

    try {
      const querySnapshot = await db.collection("ewws").get();

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

//Incrementar cacas
setInterval(async () => {
    const bichos = await getBichos();
    console.log(bichos)
    bichos.forEach((bicho) => {
      
      if(!bicho.poohs){
        bicho.poohs = 0
      }
      bicho.poohs++
      updateBicho(bicho.id, bicho)
    })

}, 50000)
//Bajar barra food
setInterval(async () => {
    const bichos = await getBichos();
    console.log(bichos)
}, 40000)