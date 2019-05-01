import React from 'react';
import { BrowserRouter as Router, Link } from 'react-router-dom';
import userMenu from './userMenu.scss'

export default class UserMenu extends React.Component {
  constructor(props) {
    super(props);

    this.state = {

    }
  }
  componentDidMount() {
  }

  render() {
    return (
      <div id="userDiv">
        <Link to="/" >
            <button className="return">
             <span>Return to Main</span> 
            </button> 
        </Link>
        <h1 className="font-effect-shadow-multiple" id="userTitle">User's Menu</h1>
        <Link to="/play" >
            <button id="play-button">
             <span>Play</span> 
            </button> 
        </Link>
        <Link to="/story" >
            <button id="story-button">
             <span>Story</span> 
            </button> 
        </Link>
        <Link to="/summary" >
            <button id="summary-button">
             <span>Summary</span> 
            </button> 
        </Link>
            <button id="reset-button">Reset Game</button>
      </div>
    )
  }
}
//Reset button is not a link, it's related to a function component that clears all the data stored and reset de game.