import React, { Component } from 'react';
import Pooh from '../components/images/pooh.png';
import { connect } from 'react-redux';
import { modifyStatusBarAction } from '../redux/actions/modifyStatusBarAction'
import { poohAction } from '../redux/actions/poohAction';
import poohcoin from '../components/sounds/poohcoin.mp3';


class Poohs extends Component {
    constructor(props) {
        super(props);
        this.state = {
            user: null,
        }
    }
    onCleanPooh = (e) => {
        e.preventDefault()
        this.props.modifyStatusBarAction({ id: 'cleanBar', quantity: 10 })
        this.props.poohAction()
        audio.play()
    }
    render() {
        const display = this.props.displayPooh;
        const allPoohs = [
            { id: "pooh1", position: "100px 0 0 100px" },
            { id: "pooh2", position: "100px 0 0 80px" },
            { id: "pooh3", position: "100px 0 0 60px" },
            { id: "pooh4", position: "100px 0 0 20px" }
        ]
        return (
            allPoohs.map((id, i) =>
                <img key={allPoohs[i]} onClick={this.onCleanPooh}
                    id={allPoohs[i].id}
                    key={i + 1}
                    className="pooh-button"
                    style={{
                        position: "absolute",
                        margin: allPoohs[i].position,
                        display: display,
                    }} src={Pooh} alt="pooh" />                   
            ));
    }

}

var audio = new Audio(poohcoin)

const mapStateToProps = (state) => {
    return {
        displayPooh: state.poohReducer.displayPooh,
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        modifyStatusBarAction: (statusBar) => dispatch(modifyStatusBarAction(statusBar)),
        poohAction: () => dispatch(poohAction())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Poohs);