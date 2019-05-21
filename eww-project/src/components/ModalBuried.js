import 'rodal/lib/rodal.css';
import React from 'react';
import Rodal from 'rodal';
import sad from '../components/images/sad.gif';
import { setEwwInfo } from '../redux/actions/ewwDataAction';
import { connect } from 'react-redux';

class ModalBuried extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            visible: false,
        };
    }

    componentDidMount() {
        console.log('VISIBLE?',this.props.visible)
        this.setState({ visible: this.props.visible })
    }

    componentDidUpdate(prevProps) {

        if (prevProps.visible !== this.props.visible) {
            this.setState({ visible: this.props.visible })
        }
    }

    hide = () => {
        this.setState({ visible: false });        
    }

    render() {
        return (
            <div>
                <Rodal
                    width={400}
                    height={400}
                    className="init-modal"
                    visible={this.state.visible}
                    animation="door"
                    tabindex="-1"
                    onClose={() => { }}
                >
                    <img alt="modal-name" className="image-modal" src={sad} />
                    <div className="header">
                       ¡ ES HORA DE ENTERRARSE !
            </div>
                    <div className="body">
                        <p>{this.props.eww.name} está muy triste por tener que despedirse de ti, pero la vida de un Eww es complicada.</p>
                        <button onClick={this.hide} className="rodal-cancel-btn">CLOSE</button>
                    </div>
                </Rodal>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        ewwInfo: state.ewwDataReducer.ewwData,
        userInfo: state.userReducer.user,
        eww: state.ewwDataReducer,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
      setEwwInfo: (eww) => dispatch(setEwwInfo(eww)),
    }
  }

export default connect(mapStateToProps, mapDispatchToProps)(ModalBuried);