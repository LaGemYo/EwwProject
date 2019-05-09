import React, { Component } from 'react';
import { connect } from 'react-redux';
import standard from '../components/images/standard.gif';
import playing from '../components/images/playing.gif';
import talking from '../components/images/talking.gif';
import showering from '../components/images/showering.gif';
import DataService from '../services/dataService';

class GameScreen extends Component {
  constructor(props) {
    super(props);
    this.state={
      user:null
    }
  }
  toTalk = (e)=> {
    e.preventDefault()
    this.props.dispatch({type:"TALKING"})
    setTimeout(() => {this.props.dispatch({type:"STANDARD"})}, 4000)
  }

  async componentDidMount(){
      let user= await DataService.getObjectDetail('users',this.props.user);
    //hacer el let eww = await.......

  }

  render() {
    const {ewwState} = this.props
    console.log(this.props, 'props')
    console.log(standard)
    const ewwStates = {
      '@@init': standard,
      standard: standard,
      playing: playing,
      talking: talking,
      showering: showering,
    }

    console.log('first',ewwState )

    const ewwImage = ewwStates[ewwState]
    console.log('ewwImage', ewwImage)
    return (
        <div id="eww-image">
          <button className="eww-pet" onClick={this.toTalk}>
          <img className="eww-img" src={ewwImage} alt="EwwImage"/>
          </button>
        </div>
    );
  }
}

const mapStateToProps = (state) => {
  console.log('state', state)
  return {
    talking: state.talkingReducer.talking,
    ewwState: state.ewwReducer.ewwState,
    showering: state.showeringReducer.showering,
    user: state.userReducer.user,
  }
}


export default connect(mapStateToProps)(GameScreen);