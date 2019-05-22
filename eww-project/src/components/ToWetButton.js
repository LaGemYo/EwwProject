import React, { Component } from 'react';
import { connect } from 'react-redux';

import DataService from '../services/dataService';
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
    const cleanbar = this.props.eww.cleanbar + 40;
    if (this.props.eww.cleanbar >= 40) {
      DataService.updateDetail('ewws', this.props.eww.id, {cleanbar: Math.min(100, cleanbar)})
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
    cleanBarLevel: state.modifyStatusBarReducer.cleanBarLevel,
    eww: state.ewwDataReducer
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
      ewwAppearence: (appearence) => dispatch(ewwAppearenceAction(appearence)),
      modifyStatusBarAction: (statusBar) => dispatch(modifyStatusBarAction(statusBar))
    }
}

export default connect (mapStateToProps, mapDispatchToProps)(ToWetButton);