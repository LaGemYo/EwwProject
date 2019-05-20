import React, { Component } from 'react';
import {BrowserRouter as Router} from 'react-router-dom';
import Routes from './routes';
import AuthService from './services/authService';
import DataService from './services/dataService';

import { connect } from 'react-redux'
import { setUserInfo } from './redux/actions/userActions';

class App extends Component {

  constructor(props){
    super(props);

    this.state = {
      loading: true
    }
  }

  componentDidMount() {
    AuthService.registerAuthObserver(async (user) => {
      if (user) {
        console.log('User is signed in')
        const userDetail = await DataService.getObjectDetail('users', user.uid);

        if(userDetail) {
          this.props.setUserInfo(userDetail)
          console.log("usuario está en redux")
        } else {
          console.log("ESPERAAAAAA me estoy registrando");
        }
        
      } else {
        console.log('User is signed out')
      }
      this.setState({loading: false})
    })
  }

  render() {
    const { loading } = this.state;

    if(loading) return <div>Loading</div>;

    return (
      <div className="Eww-app">
        <Router>  
          <Routes />
        </Router>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    userInfo: state.userReducer.user
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    setUserInfo: (user) => dispatch(setUserInfo(user))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);

