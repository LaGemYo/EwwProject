import React, { Component } from 'react';
import { connect } from 'react-redux';

class ToPlayWithEwwButton extends Component {
    constructor(props) {
        super(props);
        this.state = {
            playing: "",
            ewwState:"",
        }
    }
    toChangeImage = (e) => {
        e.preventDefault()
        this.props.dispatch({ type: "PLAYING" })
    }

    render() {
        return (
            <div className="interact-button">
                <button onClick={this.toChangeImage} className="down-button" id="play-with-button" />
            </div>
        );
    }
}
const mapStateToProps = (state) => {
    return {
      playing: state.playingReducer.playing,
      ewwState: state.playingReducer.ewwState,
    }
  }

  export default connect (mapStateToProps)(ToPlayWithEwwButton);