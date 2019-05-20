import * as firebase from 'firebase';


export default class DataService {
  
  static async getUserEwwAlive(userId) {
    const db = firebase.firestore();
    let results = [];

    try {
      const querySnapshot = await db.collection("ewws")
        .where('uid','==', userId)
        .where('status','==', "alive")
        .get();
      querySnapshot.forEach(doc => {
        const objectResult = doc.data();
        objectResult.id = doc.id;
        results.push(objectResult);
      }) 
    } catch (err) {
			console.log("TCL: DataService -> getContacts -> err", err)
    }
    return results.length > 0 ? results[0] : null;
  }

  static async getAllUserEwws(userId) {
    const db = firebase.firestore();
    let results = [];

    try {
      const querySnapshot = await db.collection("ewws")
        .where('uid','==', userId)
        .where('status', '==', "dead")
        .get();
      querySnapshot.forEach(doc => {
        const objectResult = doc.data();
        objectResult.id = doc.id;
        results.push(objectResult);
      }) 
    } catch (err) {
			console.log("TCL: DataService -> getContacts -> err", err)
    }
    return results
  }

  static async getList(collection) {
    const db = firebase.firestore();
    let results = [];

    try {
      const querySnapshot = await db.collection(collection).get();

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
//
  static async getObjectDetail(collection, objId) {
    const db = firebase.firestore();
    let object = null;

    try{ 
      const objectRef = await db.collection(collection).doc(objId).get();
      if(objectRef.exists) {
        object = objectRef.data();
      }
    } catch (err){
			console.log("TCL: DataService -> getObjectDetail -> err", err)
    } 

    return object;
  }

  static async addObjectWithId(collection, objId, data) {
    return await DataService.updateDetail(collection, objId, data)
  }

  static async updateDetail(collection, id, data) {
    const db = firebase.firestore();
    let success = true;

    try {
      //con la propiedad merge sólo sobreescribo el dato en concreto que me interesa.
      await db.collection(collection).doc(id).set(data, {merge: true});
    } catch (err) {
      success = false;
		  console.log("TCL: DataService -> updateDetail -> err", err)
    }

    return success;
  }

  static observeEww(userId, callback){
    const db = firebase.firestore();

    return db.collection('ewws')
      .where('uid','==', userId)
      .where('status','==', "alive")
      .onSnapshot((querySnapshot)=>{
        let results = [];

        querySnapshot.forEach(doc => {
          const objectResult = doc.data();
          objectResult.id = doc.id;
          results.push(objectResult);  
        });

        const eww = results.length > 0 ? results[0] : null;
        callback(eww);
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

  static async addObject(collection, data) {
    const db = firebase.firestore();
    let success = false;

    try {
      const docRef = await db.collection(collection).add(data);
      if(docRef && docRef.id) {
        success = true;
      }
    } catch (err) {
			console.log("TCL: DataService -> addContact -> err", err)
    }

    return success;
  }

  static async addEww(ewwData) {
    const db = firebase.firestore();
    let success = false;

    try {
        const docRef = await db.collection('ewws').add(ewwData);
        if (docRef && docRef.id) {
            await this.updateDetail('ewws',docRef.id,{id:docRef.id});
            await this.updateDetail('users', ewwData.uid,{ewwId:docRef.id})
            success = true;
            return docRef.id;
        }
    } catch (err) {
        console.log("TCL: DataService -> addEwws -> err", err)
    }

    return success;
}

}