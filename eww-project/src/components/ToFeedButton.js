import React, { Component } from 'react';
import feedButton from '../components/images/feed-button.png';
import { connect } from 'react-redux';
import { ewwAppearenceAction } from '../redux/actions/ewwAppearenceAction'
import { modifyStatusBarAction } from '../redux/actions/modifyStatusBarAction'
import eatingeww from '../components/sounds/eatingeww.mp3';
import eatingeww2 from '../components/sounds/eatingeww2.mp3';
import eatingeww3 from '../components/sounds/eatingeww3.mp3';
import DataService from '../services/dataService';

class ToFeedButton extends Component {
  constructor() {
    super();

  }

  onFeed = (e, noise) => {
    e.preventDefault()
    this.props.ewwAppearence({appearence: "eating"})    
      const foodbar = this.props.eww.foodbar + 20;
      const cleanbar = this.props.eww.cleanbar -20;
      const poohs = this.props.eww.poohs +1;
      const allPoohs = this.props.allPoohs
      let counter = 0
    if(this.props.eww.foodbar < 100){
      DataService.updateDetail('ewws', this.props.eww.id, {foodbar: foodbar})
    } else {
      DataService.updateDetail('ewws', this.props.eww.id, {cleanbar: cleanbar -20, poohs: poohs})
      counter ++
      allPoohs.forEach((pooh) => {
        if (pooh.id === `pooh${counter}`) {
            pooh.visible = true;
        }
    })
    console.log('COUNTER', counter)
    }     
    setTimeout(() => { this.props.ewwAppearence({appearence: "standard"}) }, 2000)
    noise.play()    
  }

  render() {
    return (
      <div className="interact-button">
        <div className="dropup">
          <button className="down-button" id="to-feed-button" />
          <div className="dropup-content">
            <span className="insect" id="insect1" onClick= {(e, noise) => {this.onFeed(e, audio)}} />
            <span className="insect" id="insect2" onClick= {(e, noise) => {this.onFeed(e, audio2)}} />
            <span className="insect" id="insect3" onClick= {(e, noise) => {this.onFeed(e, audio3)}} />
          </div>
        </div>
      </div>
    );
  }
}

const audio = new Audio(eatingeww);
const audio2 = new Audio(eatingeww2);
const audio3 = new Audio(eatingeww3);

const mapStateToProps = (state) => {
  return {
    foodBarLevel: state.modifyStatusBarReducer.foodBarLevel,
    cleanBarLevel: state.modifyStatusBarReducer.cleanBarLevel,
    eww: state.ewwDataReducer,
    allPoohs: state.poohReducer.allPoohs,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    ewwAppearence: (appearence) => dispatch(ewwAppearenceAction(appearence)),
    modifyStatusBarAction: (statusBar) => dispatch(modifyStatusBarAction(statusBar))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ToFeedButton);
