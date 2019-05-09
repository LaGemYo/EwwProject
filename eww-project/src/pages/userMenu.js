import React from 'react';
import { BrowserRouter as Router, Link } from 'react-router-dom';
import userMenu from './userMenu.scss'
import AuthService from '../services/authService';
import DataService from '../services/dataService';
import Confirm from '../components/Confirm';

import { setUserInfo } from '../redux/actions/userActions';

export default class UserMenu extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      loading: true

    }
  }

  logout = () => {
    AuthService.logout();
    this.props.history.push('/');
  }

  onResetGame = (e) => {

    //Cómo llamo aquí al confirm?
  }

  render() {
    return (
      <div id="userDiv">
        <button className="menu-button" id="logout-button" onClick={this.logout}>
          <span>Log out</span>
        </button>
        <h1 className="font-effect-shadow-multiple" id="userTitle">User Menu</h1>
        <Link to="/play" >
          <button className="menu-button" id="play-button">
            <span>Play</span>
          </button>
        </Link>
        <Link to="/story" >
          <button className="menu-button" id="story-button">
            <span>Story</span>
          </button>
        </Link>
        <Link to="/summary" >
          <button className="menu-button" id="summary-button">
            <span>Summary</span>
          </button>
        </Link>
        <div>
            <button onClick={this.onResetGame()} className="menu-button" id="reset-button">
              <span>Reset Game</span>
            </button>
        <Confirm/>
        </div>
      </div>
    )
  }
}
//Reset button is not a link, it's related to a function component that clears all the data stored and reset de game.