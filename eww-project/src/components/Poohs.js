import React, { Component } from 'react';
import Pooh from '../components/images/pooh.png';
import { connect } from 'react-redux';;

class Poohs extends Component {
    constructor(props) {
        super(props);
        this.state = {
            user: null,
            displayPooh: "none"
        }
    }
    onCleanPooh = (e) => {
        e.preventDefault()
        console.log('has tocado una caca')
        this.props.dispatch({ type: "POOH" })
        
    }

    render() {
        return (
            <div id="pooh-space">
                <button className="pooh-button" id="pooh1" onClick={this.onCleanPooh} style={{
                    display: this.props.displayPooh, position: "absolute",
                    margin: "100px 0 0 100px"
                }}>
                    <img className="pooh-img" src={Pooh} alt="pooh" />
                </button>
                <button className="pooh-button" id="pooh2" onClick={this.onCleanPooh} style={{
                    display: this.props.displayPooh, position: "absolute",
                    margin: "100px 0 0 80px"
                }}>
                    <img className="pooh-img" src={Pooh} alt="pooh" />
                </button>
                <button className="pooh-button" id="pooh3" onClick={this.onCleanPooh} style={{
                    position: "absolute",
                    margin: "100px 0 0 60px",
                }}>
                    <img className="pooh-img" src={Pooh} alt="pooh" />
                </button>
                <button className="pooh-button" id="pooh4" onClick={this.onCleanPooh} style={{
                    display: "none", position: "absolute",
                    margin: "100px 0 0 20px"
                }}>
                    <img className="pooh-img" src={Pooh} alt="pooh" />
                </button>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    console.log('state', state)
    return {
        levelWaterBar: state.poohReducer.levelWaterBar,
    }
}

export default connect(mapStateToProps)(Poohs);