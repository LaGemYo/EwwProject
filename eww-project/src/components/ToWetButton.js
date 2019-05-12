import React, { Component } from 'react';
import wetButton from '../components/images/wet-button.png';
import { connect } from 'react-redux';
import { ewwAppearenceAction } from '../redux/actions/ewwAppearenceAction'
import { modifyStatusBarAction } from '../redux/actions/modifyStatusBarAction'
import showeringeww from '../components/sounds/showeringeww.mp3';

class ToWetButton extends Component {
  constructor() {
    super();
  }

  toChangeImage = (e) => {
    e.preventDefault()
    audio.play()
    this.props.ewwAppearence({ appearence: "showering"})
    if (this.props.statusBar >= 60) {
      this.props.modifyStatusBarAction({id: 'cleanBar', quantity: 40})
    }
    setTimeout(() => { this.props.ewwAppearence({ appearence: "standard"}) }, 5000)
  }

  render() {
    return (
      <div className="interact-button">
        <button onClick={this.toChangeImage} className="down-button" id="wet-button" />
      </div>
    );
  }
}

var audio = new Audio(showeringeww)

const mapStateToProps = (state) => {
  return {
    statusBar: state.modifyStatusBarReducer.cleanBarLevel
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
      ewwAppearence: (appearence) => dispatch(ewwAppearenceAction(appearence)),
      modifyStatusBarAction: (statusBar) => dispatch(modifyStatusBarAction(statusBar))

    }
}

export default connect (mapStateToProps, mapDispatchToProps)(ToWetButton);