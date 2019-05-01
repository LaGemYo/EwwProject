import React, { Component } from 'react';

import SadEww from "./images/sad-eww.gif";

export default class GameScreen extends Component {
  constructor() {
    super();

  }

  render() {
    return (
      <div>
        <div id="eww-image">
          <button>
             <img className="eww-image" src={SadEww}></img>
          </button>
        </div>
      </div>
    );
  }
}