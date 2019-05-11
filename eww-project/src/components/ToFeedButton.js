import React, { Component } from 'react';
import feedButton from '../components/images/feed-button.png';
import { connect } from 'react-redux';
import { ewwAppearenceAction } from '../redux/actions/ewwAppearenceAction'
import { modifyStatusBarAction } from '../redux/actions/modifyStatusBarAction'

class ToFeedButton extends Component {
  constructor() {
    super();

  }

  onFeed = (e) => {
    e.preventDefault()
    this.props.ewwAppearence({appearence: "eating"})
    this.props.modifyStatusBarAction({id: 'foodBar', quantity: 20})
    setTimeout(() => { this.props.ewwAppearence({appearence: "standard"}) }, 5000)
  }


  render() {
    return (
      <div className="interact-button">
        <div className="dropup">
          <button className="down-button" id="to-feed-button" />
          <div className="dropup-content">
            <button className="insect" id="insect1" onClick={this.onFeed} />
            <button className="insect" id="insect2" onClick={this.onFeed} />
            <button className="insect" id="insect3" onClick={this.onFeed} />
          </div>
        </div>
      </div>
    );
  }
}


const mapDispatchToProps = (dispatch) => {
  return {
    ewwAppearence: (appearence) => dispatch(ewwAppearenceAction(appearence)),
    modifyStatusBarAction: (statusBar) => dispatch(modifyStatusBarAction(statusBar))
  }
}

export default connect(null, mapDispatchToProps)(ToFeedButton);
