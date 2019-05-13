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
        this.props.modifyStatusBarAction({id: 'cleanBar', quantity: 10}) 
        this.props.poohAction()  
        audio.play()
    }

    render() {
        const display = this.props.displayPooh;
        
        const allPoohs = [
            {id:"pooh1", margin: "100px 0 0 100px"},
            {id:"pooh2", margin: "100px 0 0 80px"},
            {id:"pooh3", margin: "100px 0 0 60px"},
            {id:"pooh4", margin: "100px 0 0 20px"}
        ]
        const showPoohs = (allPoohs) => {
            if(this.props.poohs >= 0) {
               let poohId = allPoohs.map(function(id, i){
                    id = "d"
               })
        }
        

        }
        return (
            <div id="pooh-space">
                <button className="pooh-button" id={allPoohs[2]} onClick={this.onCleanPooh} style={{
                    display: display, 
                    position: "absolute",
                    margin: "100px 0 0 100px",
                }}>
                    <img className="pooh-img" src={Pooh} alt="pooh" />
                </button>
            </div>
        );
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