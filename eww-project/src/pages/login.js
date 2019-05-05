import React from 'react';
import forms from './forms.scss';
import { BrowserRouter as Router, Link } from 'react-router-dom';

export default class Login extends React.Component {
  constructor(props) {
    super(props);

    this.state = {

    }
  }

  componentDidMount() {

  }

  onFormSubmit = (event) => {
    event.preventDefault();
    console.log('submit pressed')
  }

  render() {
    return (
      <div id="loginDiv">
        <Link to="/" >
          <div className="return-space">
            <button className="return-arrow-button" />
          </div>
        </Link>
        <h1 className="font-effect-shadow-multiple" id="mainTitle">Log in</h1>
        <div form="form-div">
          <form onSubmit={this.onFormSubmit}>
            <label className="form-class">
              Name:
          <input className="input-form" type="text" />
            </label>
            <label className="form-class">
              Password:
          <input className="input-form" type="text" />
            </label>
            <input className="menu-button" id="submit" type="submit" value="Submit" />
          </form>
        </div>
      </div>
    )
  }
}