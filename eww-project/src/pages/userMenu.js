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
              <div className="return-space">
                <button className="return-arrow-button" />
              </div>
            </Link>
        <h1 className="font-effect-shadow-multiple" id="userTitle">User's Menu</h1>
        <Link to="/play" >
            <button className="menu-button" id="play-button">
             <span>Play</span> 
            </button> 
        </Link>
        <Link to="/story" >
            <button className="menu-button" id="story-button">
             <span>Story</span> 
            </button> 
        </Link>
        <Link to="/summary" >
            <button className="menu-button" id="summary-button">
             <span>Summary</span> 
            </button> 
        </Link>
          <div>
            <button className="menu-button" id="reset-button">
              <span>Reset Game</span>
            </button>
          </div>
      </div>
    )
  }
}
//Reset button is not a link, it's related to a function component that clears all the data stored and reset de game.