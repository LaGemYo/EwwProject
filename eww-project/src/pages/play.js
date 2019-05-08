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
            <Bar />
            <Bar />
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
    talking: state.talkingReducer.talking
  }
}
//hacer funcion mapstatetoprops, intentar pasar la prop al talking
export default connect(mapStateToProps)(Play)

