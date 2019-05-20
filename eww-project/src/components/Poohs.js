import React, { Component } from 'react';
import Pooh from '../components/images/pooh.png';
import { connect } from 'react-redux';
import { modifyStatusBarAction } from '../redux/actions/modifyStatusBarAction'
import { poohAction } from '../redux/actions/poohAction';
import poohcoin from '../components/sounds/poohcoin.mp3';
import DataService from '../services/dataService';

class Poohs extends Component {
    constructor(props) {
        super(props);
        this.state = {
            user: null,

        }
    }

    onCleanPooh = (poohId) => {
        let allPoohs = [...this.props.allPoohs]
        allPoohs.forEach((pooh) => {
            if (pooh.id === poohId) {
                pooh.visible = false;
            }
        })
        this.setState({ allPoohs })
        const cleanbar = this.props.eww.cleanbar +10;
        const poohs = this.props.eww.poohs -1
        DataService.updateDetail('ewws', this.props.eww.id, { cleanbar: cleanbar, poohs: poohs})
        audio.play()
    }

    render() {
        let allPoohs = [...this.props.allPoohs]
        return (
            
            allPoohs.map((item) =>
                    <img key={item.id} onClick={() => this.onCleanPooh(item.id)}
                        id={item.id}
                        className="pooh-button"
                        style={{
                            margin: item,
                            display: item.visible ? "block" : "none"
                        }} src={Pooh} alt={item.id} />
            )
        );
    }
}

var audio = new Audio(poohcoin)

const mapStateToProps = (state) => {
    return {
        allPoohs: state.poohReducer.allPoohs,
        cleanBarLevel: state.modifyStatusBarReducer.cleanBarLevel,
        eww: state.ewwDataReducer
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        modifyStatusBarAction: (statusBar) => dispatch(modifyStatusBarAction(statusBar)),
        poohAction: () => dispatch(poohAction()),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Poohs);