import React, { Component } from 'react';
import feedButton from '../components/images/feed-button.png'

export default class ToFeedButton extends Component {
  constructor() {
    super();

  }

  render() {
    return (
      <div className="interact-button">
        <button className="down-button" id="to-feed-button"/>
      </div>
    );
  }
}