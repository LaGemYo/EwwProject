import React from 'react';
import { BrowserRouter as Router, Link } from 'react-router-dom';
import userMenu from './userMenu.scss'
import AuthService from '../services/authService';
import DataService from '../services/dataService';
import { connect } from 'react-redux';
import { setEwwInfo } from '../redux/actions/ewwDataAction';
import { setUserInfo } from '../redux/actions/userActions';
import ModalName from '../components/ModalName';
import withUser from '../helpers/withUser';

class UserMenu extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      loading: true,
      name: props.name || '',
      email: props.email || '',
      message: props.message || '',
      error: '',
      visibleModal: false
    }
  }

  async componentDidMount() {
    const { userInfo } = this.props

    if (userInfo) {
      this.checkUserEww(userInfo.uid)
    }
  }

  async componentDidUpdate(prevProps) {
    if (!prevProps.userInfo && this.props.userInfo) {
      this.checkUserEww(this.props.userInfo.uid)
    }
  }

  checkUserEww = async (uid) => {
    //Llamar a firebase a ver si el usuario tiene Eww.
    const eww = await DataService.getUserEwwAlive(uid)
    if (eww) {
      //Si existe, lo metemos en redux
      this.props.setEwwInfo(uid)

    } else {
      this.setState({ visibleModal: true })
      this.props.history.push('/user')
    }
  }

  logout = () => {
    AuthService.logout();
    this.props.setUserInfo(null);
    this.props.history.push('/');
  }

  onResetGame = () => {   
    const eww = this.props.eww
    eww.status = 'dead'
    DataService.updateDetail('ewws', this.props.eww.id, { status: 'dead' })
    window.location.reload()
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
          <button className="menu-button" id="reset-button"
            onClick={e =>
              window.confirm("¿Estás seguro de que quieres borrar todos los datos actuales y comenzar un nuevo juego?") &&
              this.onResetGame()
            }
          >
            Reset
      </button>
          <ModalName visible={this.state.visibleModal} />
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    userInfo: state.userReducer.user,
    ewwInfo: state.ewwDataReducer.ewwData,
    eww: state.ewwDataReducer,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    setUserInfo: () => dispatch(setUserInfo()),
    setEwwInfo: () => dispatch(setEwwInfo())
  }
}

export default withUser(connect(mapStateToProps, mapDispatchToProps)(UserMenu));