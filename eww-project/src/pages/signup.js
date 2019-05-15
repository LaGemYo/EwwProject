import React from 'react';
import { BrowserRouter as Router, Link } from 'react-router-dom';
import AuthService from '../services/authService';
import DataService from '../services/dataService';


export default class SignUp extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      name: props.name || '',
      email: props.email || '',
      message: props.message || '',
      error: '',
    }
  }
  onChangeInput = (e) => {
    this.setState({ [e.target.name]: e.target.value })
  }

  onSubmitForm = (e) => {
    e.preventDefault();
    const { name, email, message, imageUrl } = this.state;

    this.props.onSubmitForm({ name, email, message, imageUrl });
  }

  onSignup = async (e) => {
    e.preventDefault();
    const { email, password } = this.state;

    this.setState({ errorMessage: '' });

    const error = await AuthService.signup(email, password)

    if (error) {
      this.setState({ errorMessage: AuthService.getErrorMessage(error) });
    }
  }

  componentDidMount() {
    AuthService.registerAuthObserver((user) => {
      if (user) {
        // User is signed in.
        const { name, lastname, email } = this.state;
        const success = DataService.addObjectWithId('users', user.uid, {
          name,
          lastname,
          email,
          uid: user.uid
        });

        if (success) {
          this.props.history.push('/user');
        }

      } else {
        console.log("OJO: no hay usuario")

      }
    })
  }

  render() {
    const { email, name, lastname, password, errorMessage } = this.state;

    return (
      <div id="signUpDiv">
        <Link to="/" >
          <div className="return-space-play">
            <button className="return-arrow-button" />
          </div>
        </Link>
        <h1 className="font-effect-shadow-multiple" id="mainTitle">Sign Up</h1>
        <form onSubmit={this.onSignup}>
          <div>
            <label className="form-class">Name</label>
            <input className="input-form" type="name" name="name" value={name} onChange={this.onChangeInput} />
          </div>
          <div>
            <label className="form-class">Lastname</label>
            <input className="input-form" type="lastname" name="lastname" value={lastname} onChange={this.onChangeInput} />
          </div>
          <div>
            <label className="form-class">Email</label>
            <input className="input-form" type="email" name="email" value={email} onChange={this.onChangeInput} />
          </div>
          <div>
            <label className="form-class">Password</label>
            <input className="input-form" type="password" name="password" value={password} onChange={this.onChangeInput} />
          </div>
          <button id="create-account-button" className="menu-button">
          Create account
          </button>
          {errorMessage && <p>{errorMessage}</p>}
        </form>
      </div>
    )
  }
}