import React, { Component } from 'react';
import Pooh from '../components/images/pooh.png';
import { connect } from 'react-redux';
import { modifyStatusBarAction } from '../redux/actions/modifyStatusBarAction'


class Poohs extends Component {
    constructor(props) {
        super(props);
        this.state = {
            user: null,
        }
    }
    onCleanPooh = (e) => {
        e.preventDefault()
        this.props.modifyStatusBarAction({id: 'cleanBar', quantity: 10})   
    }

    render() {
        const allPoohs = [
            {id:"pooh1", position: "100px 0 0 100px" },
            {id:"pooh2", position: "100px 0 0 80px"},
            {id:"pooh3", position: "100px 0 0 60px"},
            {id:"pooh4", position: "100px 0 0 20px"}
        ]
        return (
            <div id="pooh-space">
                <button className="pooh-button" id="pooh1" onClick={this.onCleanPooh} style={{
                    display: this.props.displayPooh, position: "absolute",
                    margin: "100px 0 0 100px"
                }}>
                    <img className="pooh-img" src={Pooh} alt="pooh" />
                </button>
            </div>
        );
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        modifyStatusBarAction: (statusBar) => dispatch(modifyStatusBarAction(statusBar)),
       // poohAction: () => dispatch()
    }
}

export default connect(null, mapDispatchToProps)(Poohs);