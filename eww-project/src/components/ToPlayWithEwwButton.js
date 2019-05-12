import React, { Component } from 'react';
import { connect } from 'react-redux';
import { ewwAppearenceAction } from '../redux/actions/ewwAppearenceAction'
import { modifyStatusBarAction } from '../redux/actions/modifyStatusBarAction'
import playingeww from '../components/sounds/playingeww.mp3';

class ToPlayWithEwwButton extends Component {
    constructor(props) {
        super(props);

    }
    onPlay = (e) => {
        e.preventDefault()
        audio.play()
        this.props.ewwAppearence({ appearence: "playing"})
        this.props.modifyStatusBarAction({id: 'playBar', quantity: 100})
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
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        ewwAppearence: (appearence) => dispatch(ewwAppearenceAction(appearence)),
        modifyStatusBarAction: (statusBar) => dispatch(modifyStatusBarAction(statusBar))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ToPlayWithEwwButton);