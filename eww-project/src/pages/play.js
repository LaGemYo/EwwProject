import React from 'react';
import { BrowserRouter as Router, Link } from 'react-router-dom';
import playgrid from '../pages/playgrid.scss';

import Bar from '../components/bar/Bar.js'
import Foto from '../components/Foto.js'
import GameScreen from '../components/GameScreen.js'
//import InteractionMenu from '../components/InteractionMenu.js'
import Music from '../components/Music.js'
import ShowUserData from '../components/ShowUserData.js'
import Talking from '../components/Talking.js'
import ToWetButton from "../components/ToWetButton";
import ToFeedButton from "../components/ToFeedButton";
import ToPlayWithEwwButton from '../components/ToPlayWithEwwButton';
import { connect } from 'react-redux';

class Play extends React.Component {
  constructor(props) {
    super(props);

    this.state = {

    }
  }

  render() {
    return (
      <div id="game-div">
        <div className="grid">
          <div className="up">
            <Bar variant="success"/>
            <div className="bar-label">FOOD</div>
            <Bar variant="info"/>
            <div className="bar-label">WATER</div>
            <Bar variant="warning" id="Playing-bar" levelPlayingBar={this.props.levelPlayingBar}/>
            <div className="bar-label">FUN</div>
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
            <GameScreen playing={this.props.playing}/>
          </div>
          <div className="down">
            <ToFeedButton />
            <ToWetButton />
            <ToPlayWithEwwButton/>
          </div>
          <div className="right">
            <Talking talking={this.props.talking}/>
            <ShowUserData />
          </div>
        </div>
      </div>
    )
  }
}
const mapStateToProps = (state) => {
  return {
    talking: state.talkingReducer.talking,
    image: state.playingReducer.image,
    levelPlayingBar: state.playingReducer.levelPlayingBar,
  }
}
export default connect(mapStateToProps)(Play)

