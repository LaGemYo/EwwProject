import * as firebase from 'firebase';


export default class DataService {
    
  static async getContacts() {
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

  static async getObjectDetail(collection, objId) {
    const db = firebase.firestore();
    let contact = null;

    try{ 
      const contactRef = await db.collection(collection).doc(objId).get();
      if(contactRef.exists) {
        contact = contactRef.data();
      }
    } catch (err){
			console.log("TCL: DataService -> getObjectDetail -> err", err)
    } 

    return contact;
  }

  static async addObjectWithId(collection, objId, data) {
    return await DataService.updateDetail(collection, objId, data)
  }

  static async updateDetail(collection, id, data) {
    const db = firebase.firestore();
    let success = true;

    try {
      await db.collection(collection).doc(id).set(data, {merge: true});
    } catch (err) {
      success = false;
		  console.log("TCL: DataService -> updateDetail -> err", err)
    }

    return success;
  }

  static observeContacts(callback, userId){
    const db = firebase.firestore();

    return db.collection('contacts')
      .where('userId','==', userId)
      .onSnapshot((querySnapshot)=>{
      let results = [];

      querySnapshot.forEach(doc => {
				const objectResult = doc.data();
        objectResult.id = doc.id;
        results.push(objectResult);  
      });

      callback(results);
    })
  }

  static async deleteContact(contactId) {
    const db = firebase.firestore();
    let success = true;

    try {
      await db.collection("contacts").doc(contactId).delete();

    } catch (err) {
      success = false;
			console.log("TCL: DataService -> deleteContact -> err", err)
    }

    return success;
  }

  static async addContact(contactData) {
    const db = firebase.firestore();
    let success = false;

    try {
      const docRef = await db.collection('contacts').add(contactData);
      if(docRef && docRef.id) {
        success = true;
      }
    } catch (err) {
			console.log("TCL: DataService -> addContact -> err", err)
    }

    return success;
  }

}