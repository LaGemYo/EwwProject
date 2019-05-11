import React, { Component } from 'react';
import donkey from '../components/sounds/donkey-kong.mp3';
import { connect } from 'react-redux';
import { musicAction } from '../redux/actions/musicAction'

class Music extends Component {
  constructor(props) {
    super(props);

  }

  onPlayMusic = () => {
    
    this.props.musicAction()
    const musicOn = this.props.musicIsPlaying
    if (musicOn) {
      console.log(musicOn)
      audio.play()     
    } else {
      console.log("se supone que es false")
      audio.pause()
    }
  }

  render() {
    return (
      <div>
        <button type="button" onClick={this.onPlayMusic} className="left-button" id="music-button">
        </button>
      </div>
    );
  }
}
var audio = new Audio(donkey)
const mapStateToProps = (state) => {
  return {
    musicIsPlaying: state.musicReducer.musicIsPlaying,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
      musicAction: () => dispatch(musicAction()),
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(Music);