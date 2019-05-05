import React from 'react';
import { BrowserRouter as Router, Link } from 'react-router-dom';
import playgrid from '../pages/playgrid.scss';

import Bar from '../components/Bar.js'
import Foto from '../components/Foto.js'
import GameScreen from '../components/GameScreen.js'
//import InteractionMenu from '../components/InteractionMenu.js'
import Music from '../components/Music.js'
import ShowUserData from '../components/ShowUserData.js'
import Talking from '../components/Talking.js'
import ToWetButton from "../components/ToWetButton";
import ToFeedButton from "../components/ToFeedButton";
import ToPlayWithEwwButton from '../components/ToPlayWithEwwButton';

export default class Play extends React.Component {
  constructor(props) {
    super(props);

    this.state = {

    }
  }
  componentDidMount() {
  }

  render() {
    return (
      <div id="game-div">
        <div className="grid">
          <div className="up">
            <Bar />
          </div>
          <div className="left">
            <Link to="/user" >
              <div className="return-space-play">
                <button className="return-arrow-button" />
              </div>
            </Link>
            <Foto />
            <Music />
          </div>
          <div className="center">
            <GameScreen />
          </div>
          <div className="down">
            <ToFeedButton />
            <ToWetButton />
            <ToPlayWithEwwButton />
          </div>
          <div className="right">
            <Talking />
            <ShowUserData />
          </div>
        </div>
      </div>
    )
  }
}

