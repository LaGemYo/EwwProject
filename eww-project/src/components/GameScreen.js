import React, { Component } from 'react';
import { connect } from 'react-redux';
import standard from '../components/images/standard.gif';
import playing from '../components/images/playing.gif';
import talking from '../components/images/talking.gif';
import showering from '../components/images/showering.gif';
import eating from '../components/images/eating.gif';
import Poohs from './Poohs';
import {toTalkAction} from '../redux/actions/talkingAction';
import { ewwAppearenceAction } from '../redux/actions/ewwAppearenceAction';
import talkingeww from '../components/sounds/talkingeww.mp3';

class GameScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: null
    }
  }
  toTalk = (e) => {
    e.preventDefault()
    audio.play()
    
    this.props.toTalk()
    this.props.ewwAppearenceAction({appearence: "talking"})
    setTimeout(() => { this.props.ewwAppearenceAction({appearence: "standard"}) }, 2000)
  }

  async componentDidMount() {
    // let user = await DataService.getObjectDetail('users', this.props.user);
    // let ewws = await DataService.getObjectDetail('ewws', this.props.ewws);

  }

  render() {
    const { ewwAppearence } = this.props
    const ewwStates = {
      '@@init': standard,
      standard: standard,
      playing: playing,
      talking: talking,
      showering: showering,
      eating: eating,
    }

    const ewwImage = ewwStates[ewwAppearence]

    return (
      <div id="eww-image">
        <div className="eww-pet" onClick={this.toTalk}>
          <img className="eww-img" src={ewwImage} alt="EwwImage" />
        </div>
        <div className="poohs-div">
        <Poohs />
        </div>
      </div>
    );
  }
}

var audio = new Audio(talkingeww)

const mapStateToProps = (state) => {
  console.log('state', state)
  return {
    talking: state.talkingReducer.talking,
    ewwAppearence: state.ewwAppearenceReducer.ewwAppearence,
    levelWaterBar: state.poohReducer.levelWaterBar,
    user: state.userReducer.user
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    toTalk: () => dispatch(toTalkAction()),
    ewwAppearenceAction: (appearence) => dispatch(ewwAppearenceAction(appearence))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(GameScreen);