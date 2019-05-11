import React, { Component } from 'react';
import { connect } from 'react-redux';
import { ewwAppearenceAction } from '../redux/actions/ewwAppearenceAction'
import { modifyStatusBarAction } from '../redux/actions/modifyStatusBarAction'

class ToPlayWithEwwButton extends Component {
    constructor(props) {
        super(props);

    }
    toChangeImage = (e) => {
        e.preventDefault()
        this.props.ewwAppearence({ appearence: "playing"})
        this.props.modifyStatusBarAction({id: 'playBar', quantity: 100})
        setTimeout(() => { this.props.ewwAppearence({ appearence: "standard"}) }, 4000)
    }

    render() {
        return (
            <div className="interact-button">
                <button onClick={this.toChangeImage} className="down-button" id="play-with-button" />
            </div>
        );
    }
}
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