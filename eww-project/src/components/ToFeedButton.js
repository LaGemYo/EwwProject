import React, { Component } from 'react';
import feedButton from '../components/images/feed-button.png'

export default class ToFeedButton extends Component {
  constructor() {
    super();

  }

  render() {
    return (
      <div className="interact-button">
        <div class="dropup">
          <button className="down-button" id="to-feed-button" />
          <div class="dropup-content">
            <button className="insect" id="insect1"/>
            <button className="insect" id="insect2"/>
            <button className="insect" id="insect3"/>
          </div>
        </div>
      </div>
    );
  }
}