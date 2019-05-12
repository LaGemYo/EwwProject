import * as firebase from 'firebase';

export default class AuthService {
  static async signup(email, password) {
    let error = null;

    try {
      await firebase.auth().createUserWithEmailAndPassword(email, password);
    } catch (err) {
			error = err.code;
    }
    return error;
  }

  static async login(email, password) {
    let error = null;

    try {
      await firebase.auth().signInWithEmailAndPassword(email, password);
    } catch (err) {
			error = err.code;
    }
    return error;
  }

  static getErrorMessage(code){
		console.log("TCL: AuthService -> staticgetErrorMessage -> code", code)
    const errMsg = ERROR_MESSAGES[code];
    return errMsg || 'Error inesperado';
  }

  static registerAuthObserver(callback){
    return firebase.auth().onAuthStateChanged(callback);
  }

  static logout() {
    firebase.auth().signOut();
  }
}

const ERROR_MESSAGES = {
  'auth/weak-password'        : 'La contraseña debe tener al menos 6 caracteres',
  'auth/invalid-email'        : 'El email no es válido',
  'auth/email-already-in-use' : 'El usuario ya está registrado',
  'auth/wrong-password'       : 'Usuario y/o contraseña incorrectos',
  'auth/user-not-found'       : 'Este usuario no existe'
}