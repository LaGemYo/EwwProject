import React from 'react';
import forms from './forms.scss';
import { BrowserRouter as Router, Link } from 'react-router-dom';
import AuthService from '../services/authService';

export default class Login extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      name: '',
      lastname: '',
      email: '',
      password: '',
      errorMessage: '',
    }

    this.authUnRegister = null;
  }

  onChangeInput = (e) => {
    this.setState({ [e.target.name]: e.target.value })
  }

  componentWillUnmount() {
    this.authUnRegister && this.authUnRegister();
  }

  onSignup = async (e) => {
    e.preventDefault();
    const { email, password } = this.state;

    this.setState({ errorMessage: '' });

    if (!email || !password) {
      this.setState({ errorMessage: 'Email y password necesarios para login' });
      return;
    }

    const error = await AuthService.login(email, password)

    if (error) {
      this.setState({ errorMessage: AuthService.getErrorMessage(error) });
    } else {
      this.props.history.push('/user');
    }
  }

  render() {
    const { email, password, errorMessage } = this.state;
    return (
      <div id="loginDiv">
        <Link to="/" >
          <div className="return-space">
            <button className="return-arrow-button" />
          </div>
        </Link>
        <h1 className="font-effect-shadow-multiple" id="mainTitle">Log in</h1>
        <div form="form-div">
          <form onSubmit={this.onSignup}>
            <div>
              <label className="form-class">Email</label>
              <input className="input-form" type="email" name="email" value={email} onChange={this.onChangeInput} />
            </div>
            <div>
              <label className="form-class">Password</label>
              <input className="input-form" type="password" name="password" value={password} onChange={this.onChangeInput} />
            </div>
            <button onClick = {this.onSignup} id="login-button" className="menu-button">Enter</button>
            {errorMessage && <p className='error'>{errorMessage}</p>}
          </form>
        </div>
      </div>
    )
  }
}