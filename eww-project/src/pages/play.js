import React from 'react';
import { BrowserRouter as Router, Link } from 'react-router-dom';
import playgrid from '../pages/playgrid.scss';

import {setEwwInfo} from '../redux/actions/ewwDataAction';

import Bar from '../components/bar/Bar.js';
import Foto from '../components/Foto.js';
import GameScreen from '../components/GameScreen.js';
import Music from '../components/Music.js';
import ShowUserData from '../components/ShowUserData.js';
import Talking from '../components/Talking.js';
import ToWetButton from "../components/ToWetButton";
import ToFeedButton from "../components/ToFeedButton";
import ToPlayWithEwwButton from '../components/ToPlayWithEwwButton';
import DataService from '../services/dataService';
import { connect } from 'react-redux';

class Play extends React.Component {
  constructor(props) {
    super(props);

  }

  async componentDidMount() {
    const { userInfo } = this.props
    if(userInfo){
      this.getEww(userInfo.uid)
    }
  }

  async componentDidUpdate(prevProps) {
    if (!prevProps.userInfo && this.props.userInfo) {
      this.getEww(this.props.userInfo.uid)
    }
  }

  getEww = (uid) => {
    DataService.observeEww(uid, (eww)=>{
      console.log(eww)
      if (eww && eww.status === 'alive') { //compeobar status alive
        //Si existe, lo metemos en redux
        this.props.setEwwInfo(eww)

      } else {
        //Si no existe, alert & redirect to user usermenu
        this.props.history.push('/user')
      }
    })

  }

  render() {
    return (
      <div id="game-div">
        <div className="grid">
          <div className="up">
            <div className="bar-label">FOOD</div>
            <Bar variant="success" id="food-bar" levelBar={this.props.foodBarLevel}/>
            <div className="bar-label">CLEAN</div>
            <Bar variant="info" id="water-bar" levelBar={this.props.cleanBarLevel}/>
            <div className="bar-label">FUN</div>
            <Bar variant="warning" id="fun-bar" levelBar={this.props.playingBarLevel}/>
          </div>
          <div className="left">
            <Link to="/user" >
              <div className="return-space-play">
                <button className="return-arrow-button" />
              </div>
            </Link>
            <Foto />
            <Music />
          </div>
          <div className="center">
            <GameScreen/>
          </div>
          <div className="down">
            <ToFeedButton/>
            <ToWetButton />
            <ToPlayWithEwwButton/>
          </div>
          <div className="right">
            <Talking talking={this.props.talking}/>
            <ShowUserData/>
          </div>
        </div>
      </div>
    )
  }
}
const mapStateToProps = (state) => {
  return {
    talking: state.talkingReducer.talking,
    playingBarLevel: state.ewwDataReducer.funbar,
    cleanBarLevel: state.ewwDataReducer.cleanbar,
    foodBarLevel: state.ewwDataReducer.foodbar,
    userInfo: state.userReducer.user
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    setEwwInfo: (eww) => dispatch(setEwwInfo(eww))
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(Play)

