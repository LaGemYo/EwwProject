import React, { Component } from 'react';
import { connect } from 'react-redux';

class ToPlayWithEwwButton extends Component {
    constructor(props) {
        super(props);

    }
    toChangeImage = (e) => {
        e.preventDefault()
        this.props.dispatch({ type: "PLAYING" })
        setTimeout(() => {this.props.dispatch({type:"STANDARD"})}, 4000)
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