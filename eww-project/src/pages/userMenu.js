import React from 'react';
import { BrowserRouter as Router, Link } from 'react-router-dom';
import userMenu from './userMenu.scss'
import AuthService from '../services/authService';
import DataService from '../services/dataService';
import { connect } from 'react-redux'


import { setUserInfo } from '../redux/actions/userActions';

class UserMenu extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      loading: true

    }
  }

  async componentDidMount() {
    const userInfo = this.props.userInfo
    if (userInfo) {
      this.checkUserEww(userInfo.uid)
    }
    
  }

  checkUserEww = async (uid) => {

    //Llamar a firebase a ver si el usuario tiene Eww.
    const eww = await DataService.getUserEwwAlive(uid)

    if (eww) {
      //Si existe, lo metemos en redux

    }else {
      //Si no existe, creamos un eww nuevo.
      this.createNewEww()
    }
  } 

  createNewEww = () => {
    //Pedimos el nombre con un MODAL
    //Insertamos el eww en la base de datos
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
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    userInfo: state.userReducer.user
  }
}

export default connect(mapStateToProps)(UserMenu);