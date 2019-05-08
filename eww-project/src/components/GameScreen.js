import React, { Component } from 'react';
import { connect } from 'react-redux';

class GameScreen extends Component {
  constructor() {
    super();
    this.state = {
      talking: []    
    }
  }
  toTalk = ()=> {
    this.props.dispatch({type:"TALKING"})
  }
  render() {
    return (
        <div id="eww-image">
          <button className="eww-pet" onClick={this.toTalk}/>
        </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    talking: state.talkingReducer.talking
  }
}

export default connect (mapStateToProps)(GameScreen);