import React, { Component } from 'react';

export default class Talking extends Component {
  constructor() {
    super();

  }

  render() {
    return (
      <div id="talking-out-div">
        <div id="talking-div">
          <input id="talking-input" type="text" disabled="disabled" value="Eww says..." />
        </div>
      </div>
    );
  }
}