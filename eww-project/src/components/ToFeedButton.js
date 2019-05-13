import React, { Component } from 'react';
import feedButton from '../components/images/feed-button.png';
import { connect } from 'react-redux';
import { ewwAppearenceAction } from '../redux/actions/ewwAppearenceAction'
import { modifyStatusBarAction } from '../redux/actions/modifyStatusBarAction'
import eatingeww from '../components/sounds/eatingeww.mp3';
import eatingeww2 from '../components/sounds/eatingeww2.mp3';
import eatingeww3 from '../components/sounds/eatingeww3.mp3';

class ToFeedButton extends Component {
  constructor() {
    super();

  }

  onFeed = (e, noise) => {
    e.preventDefault()
    this.props.ewwAppearence({appearence: "eating"})
    this.props.modifyStatusBarAction({id: 'foodBar', quantity: 20})
    setTimeout(() => { this.props.ewwAppearence({appearence: "standard"}) }, 2000)
    noise.play()    
  }

  render() {
    return (
      <div className="interact-button">
        <div className="dropup">
          <button className="down-button" id="to-feed-button" />
          <div className="dropup-content">
            <button className="insect" id="insect1" onClick= {(e, noise) => {this.onFeed(e, audio)}} />
            <button className="insect" id="insect2" onClick= {(e, noise) => {this.onFeed(e, audio2)}} />
            <button className="insect" id="insect3" onClick= {(e, noise) => {this.onFeed(e, audio3)}} />
          </div>
        </div>
      </div>
    );
  }
}

const audio = new Audio(eatingeww);
const audio2 = new Audio(eatingeww2);
const audio3 = new Audio(eatingeww3);

const mapDispatchToProps = (dispatch) => {
  return {
    ewwAppearence: (appearence) => dispatch(ewwAppearenceAction(appearence)),
    modifyStatusBarAction: (statusBar) => dispatch(modifyStatusBarAction(statusBar))
  }
}

export default connect(null, mapDispatchToProps)(ToFeedButton);
