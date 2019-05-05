import React, { Component } from 'react';
import wetButton from '../components/images/wet-button.png'

export default class ToWetButton extends Component {
  constructor() {
    super();

  }

  render() {
    return (
      <div className="interact-button">
        <button className="down-button" id="wet-button"/>
      </div>
    );
  }
}