import React, { Component } from 'react';


export default class Talking extends Component {

  render() {

    return (
      <div id="talking-out-div">
        <div id="talking-div">
          <div id="talking-space" type="text">{`Eww dice...${this.props.talking}`}</div>
        </div>
      </div>
    );
  }
}