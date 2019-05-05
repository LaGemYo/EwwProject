import React from 'react';
import main from './main.scss';
import { BrowserRouter as Router, Link } from 'react-router-dom';

export default class Main extends React.Component {
  constructor(props) {
    super(props);

    this.state = {

    }
  }
  componentDidMount() {
  }

  render() {
    return (
        <div id="mainDiv">
            <h1 className="font-effect-shadow-multiple" id="mainTitle">Main menu</h1>
            <Link to="/login" >
              <button className="menu-button" id="logInButton" type="button">
                <span>LOG IN</span>
              </button>
            </Link>
            <Link to="/signup" >
              <button className="menu-button" id="signUpButton">
              <span>SIGN UP</span> 
              </button> 
              </Link>
        </div>
    )
  }
}