import React, { Component } from 'react';

export default class ShowUserData extends Component {
  constructor() {
    super();

  }

  render() {
    return (
      <div id="data-out-div">
        <div id="data-div">
          <input id="data-input" type="text" disabled="disabled" value="Name:..." />
        </div>
      </div>
    );
  }
}