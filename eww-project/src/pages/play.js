import React from 'react';
import { BrowserRouter as Router, Link } from 'react-router-dom';
import playgrid from '../pages/playgrid.scss';

import { setEwwInfo } from '../redux/actions/ewwDataAction';

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
import { poohAction } from '../redux/actions/poohAction';
import ModalBuried from '../components/ModalBuried';
import endgame from '../components/sounds/endgame.mp3';

class Play extends React.Component {
  constructor(props) {
    super(props);
    
    this.state = {
      visibleModal: false
    }

  }

  async componentDidMount() {
    const { userInfo } = this.props
    if (userInfo) {
      this.getEww(userInfo.uid)
    }
    this.showPoohs()   
  }

  async componentDidUpdate(prevProps) {
    if (!prevProps.userInfo && this.props.userInfo) {
      this.getEww(this.props.userInfo.uid)
    }
  }

  getEww = (uid) => {
    DataService.observeEww(uid, (eww) => {
      if (eww && eww.status === 'alive') { //compeobar status alive
        //Si existe, lo metemos en redux
        this.showPoohs()
        this.checkEwwAlive()
        this.props.setEwwInfo(eww)

      } else {
        //Si no existe, alert & redirect to user menu
        setTimeout(() => { this.props.history.push('/user') }, 8000) 
      }
    })
  }

  checkEwwAlive = (noise) => {
    const eww = this.props.eww
    if (eww.cleanbar <= 0 || eww.foodbar <= 0 || eww.funbar <= 0) {
      this.setState({visibleModal: true})
      eww.status = 'dead'
      DataService.updateDetail('ewws', this.props.eww.id, { status: 'dead' })
      audio.play() 
      setTimeout(() => { this.props.history.push('/user') }, 10000) 
    }
  }

  showPoohs = () => {
    const poohs = this.props.eww.poohs
    const allPoohs = this.props.allPoohs
    if (poohs === 1) {
      allPoohs[0].visible = true
    } else if (poohs === 2) {
      allPoohs[0].visible = true
      allPoohs[1].visible = true
    } else if (poohs === 3) {
      allPoohs[0].visible = true
      allPoohs[1].visible = true
      allPoohs[2].visible = true
    } else if (poohs === 4) {
      allPoohs[0].visible = true
      allPoohs[1].visible = true
      allPoohs[2].visible = true
      allPoohs[3].visible = true
    }
  }

  render() {
    return (
      <div id="game-div">
      <ModalBuried visible={this.state.visibleModal}/>
        <div className="grid">
          <div className="up">
            <div className="bar-label">FOOD</div>
            <Bar variant="success" id="food-bar" levelBar={this.props.foodBarLevel} />
            <div className="bar-label">CLEAN</div>
            <Bar variant="info" id="water-bar" levelBar={this.props.cleanBarLevel} />
            <div className="bar-label">FUN</div>
            <Bar variant="warning" id="fun-bar" levelBar={this.props.playingBarLevel} />
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
            <GameScreen />
          </div>
          <div className="down">
            <ToFeedButton />
            <ToWetButton />
            <ToPlayWithEwwButton />
          </div>
          <div className="right">
            <Talking talking={this.props.talking} />
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
    userInfo: state.userReducer.user,
    allPoohs: state.poohReducer.allPoohs,
    eww: state.ewwDataReducer,
  }
}

const audio = new Audio(endgame);

const mapDispatchToProps = (dispatch) => {
  return {
    setEwwInfo: (eww) => dispatch(setEwwInfo(eww)),
    poohAction: () => dispatch(poohAction())
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(Play)

