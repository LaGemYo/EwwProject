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

    //ComponentDidMount
    //FIREBASE case poohs = 1 => pooh id=pooh1 display=
    onCleanPooh = (poohId) => {
        let allPoohs = [...this.props.allPoohs]
        allPoohs.forEach((pooh) => {
            if(pooh.id === poohId) {
                pooh.visible = false;	
            }
        })
        this.setState({allPoohs})
        this.props.modifyStatusBarAction({ id: 'cleanBar', quantity: 10 })
        audio.play()
        return (
            window.alert("¡HAS TOCADO UNA CACA! JAJAJAJA...")
        )
    }

    render() {
        let allPoohs = [...this.props.allPoohs]
        return (
            
            allPoohs.map((item) =>
                <img key={item.id} onClick={() => this.onCleanPooh(item.id)}
                    id={item.id}
                    visible= {item.visible}
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
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        modifyStatusBarAction: (statusBar) => dispatch(modifyStatusBarAction(statusBar)),
        poohAction: () => dispatch(poohAction())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Poohs);