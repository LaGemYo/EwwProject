import React, { Component } from 'react';
import { connect } from 'react-redux';
import { ewwAppearenceAction } from '../redux/actions/ewwAppearenceAction'
import { modifyStatusBarAction } from '../redux/actions/modifyStatusBarAction'
import playingeww from '../components/sounds/playingeww.mp3';
import DataService from '../services/dataService';

class ToPlayWithEwwButton extends Component {
    onPlay = (e) => {
        e.preventDefault()
        audio.play()
        this.props.ewwAppearence({ appearence: "playing"})
        DataService.updateDetail('ewws', this.props.eww.id, {funbar: 100})
        setTimeout(() => { this.props.ewwAppearence({ appearence: "standard"}) }, 4000)
    }

    render() {
        return (
            <div className="interact-button">
                <button onClick={this.onPlay} className="down-button" id="play-with-button" />
            </div>
        );
    }
}

var audio = new Audio(playingeww)

const mapStateToProps = (state) => {
    return {
        ewwAppearence: state.ewwAppearenceReducer.ewwAppearence,
        eww: state.ewwDataReducer
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        ewwAppearence: (appearence) => dispatch(ewwAppearenceAction(appearence)),
        modifyStatusBarAction: (statusBar) => dispatch(modifyStatusBarAction(statusBar))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ToPlayWithEwwButton);