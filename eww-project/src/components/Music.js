import React, { Component } from 'react';
import donkey from '../components/sounds/donkey-kong.mp3';

export default class Music extends Component {
  constructor() {
    super();

  }

  render() {
    return (
      <div>
        <button className="left-button" id="music-button"/>
      </div>
    );
  }
}