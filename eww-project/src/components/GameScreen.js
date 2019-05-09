import React, { Component } from 'react';
import { connect } from 'react-redux';
import standByEww from '../components/images/standByEww.gif';
import sadEww from '../components/images/standByEww.gif';

class GameScreen extends Component {
  constructor() {
    super();
    this.state = {
      talking: [],
    }

  }
  toTalk = (e)=> {
    e.preventDefault()
    this.props.dispatch({type:"TALKING"})
  }

  render() {
    return (
        <div id="eww-image">
          <button className="eww-pet" onClick={this.toTalk}>
            <img className="eww-img" src= {this.props.playing} alt="eww"/>
          </button>
        </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    talking: state.talkingReducer.talking,
  }
}


export default connect (mapStateToProps)(GameScreen);