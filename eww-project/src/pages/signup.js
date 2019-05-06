import React from 'react';
import signup from './signup.scss';
import { BrowserRouter as Router, Link } from 'react-router-dom';
import StorageService from '../services/storageService';
import AuthService from '../services/authService'
import DataService from '../services/dataService'

export default class SignUp extends React.Component{
  constructor(props) {
    super(props);

    this.state = {
      name: props.name || '',
      email: props.email || '',
      message: props.message || '',
      imageUrl: props.imageUrl || '',
      error: ''
    }
  }
  onChangeInput = (e) => {
    this.setState({[e.target.name]: e.target.value})
  }

  onSubmitForm = (e) => {
    e.preventDefault();
    const {name, email, message, imageUrl} = this.state;

    this.props.onSubmitForm({name, email, message, imageUrl});
  }

  deleteImage = () => {
    this.setState({imageUrl: ''});
  }

  onFileSelected = (e) => {
    const file = e.target.files[0];
		console.log("TCL: ContactForm -> onFileSelected -> file", file)
    StorageService.uploadFile(file, 'contact-images',(imageUrl) => {
      this.setState({imageUrl})
    });
  }
  onSignup = async (e) => {
    e.preventDefault();
    const { email, password } = this.state;

    this.setState({errorMessage: ''});

    const error = await AuthService.signup(email, password)

    if(error) {
      this.setState({errorMessage: AuthService.getErrorMessage(error)});
    }
  }
  
  componentDidMount() {
    AuthService.registerAuthObserver((user) => {
      if (user) {
        // User is signed in.
        const { name, lastname, email } = this.state;
        const success = DataService.addObjectWithId('user', user.uid, { 
          name, 
          lastname, 
          email,
          uid: user.uid 
        });

        if(success) {
          console.log("GUARDAR NUEVO USUARIO EN REDUX");
          this.props.history.push('/');
        }
        
      } else {
        console.log("OJO: no hay usuario")

      }
    })
  }

    render(){
      const { email, name, lastname, password, errorMessage } = this.state;

      return (
        <div id="signUpDiv">
        <Link to="/" >
            <button className="return">
             <span>Return to Main</span> 
            </button> 
        </Link>
          <h1 className="font-effect-shadow-multiple" id="mainTitle">Sign Up</h1>
          <form onSubmit={this.onSignup}>
          <div>
            <label>Name</label>
            <input type="name" name="name" value={name} onChange={this.onChangeInput} />
          </div>
          <div>
            <label>Lastname</label>
            <input type="lastname" name="lastname" value={lastname} onChange={this.onChangeInput} />
          </div>
          <div>
            <label>Email</label>
            <input type="email" name="email" value={email} onChange={this.onChangeInput} />
          </div>
          <div>
            <label>Contraseña</label>
            <input type="password" name="password" value={password} onChange={this.onChangeInput} />
          </div>
          <button>Crear cuenta!</button>
          {errorMessage && <p>{errorMessage}</p>}
        </form>
        </div>
      )
    }
  }