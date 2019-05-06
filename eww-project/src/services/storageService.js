import * as firebase from 'firebase';

export default class StorageService {
  static uploadFile(file, folder, callback) {
    const storageRef = firebase.storage().ref();
    const uploadTask = storageRef.child(`${folder}/${+(new Date())}-${file.name}`).put(file);

    uploadTask.on('state_changed', 
      (snapshot) => {
        var progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        console.log('Upload is ' + progress + '% done');
      },
      (error) => {
				console.log("TCL: StorageService -> uploadFile -> error", error)
      },
      async () => {
        console.log("File uploaded! YEEEII");
        const downloadURL = await uploadTask.snapshot.ref.getDownloadURL();
        callback(downloadURL);
      }
    )
  }
}