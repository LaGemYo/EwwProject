import React, { Component } from 'react';
import { connect } from 'react-redux';
import standByEww from '../components/images/standByEww.gif';
import playingEww from '../components/images/playingEwwGif.gif';
import sadEww from '../components/images/sadEww.gif';
import talkingEww from '../components/images/talkingEww.gif';

class GameScreen extends Component {
  constructor(props) {
    super(props);

  }
  toTalk = (e)=> {
    e.preventDefault()
    this.props.dispatch({type:"TALKING"})
  }

  
  imageToShow(ewwState) {
    ewwState = this.props.ewwState
    switch(ewwState = "standBy") {
      case 'playing':
        return <img className="eww-img" src= {playingEww} alt="EwwImage"/>;       
      case 'talking':
        return <img className="eww-img" src= {talkingEww} alt="EwwImage"/> ;
      default:
        return <img className="eww-img" src= {standByEww} alt="EwwImage"/>;
    }
  }

  render() {
    return (
        <div id="eww-image">
          <button className="eww-pet" onClick={this.toTalk}>
           {this.imageToShow()}
          </button>
        </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    talking: state.talkingReducer.talking,
    ewwState: state.playingReducer.state,
  }
}


export default connect (mapStateToProps)(GameScreen);