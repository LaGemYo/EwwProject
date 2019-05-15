import 'rodal/lib/rodal.css';
import React from 'react';
import Rodal from 'rodal';
import initeww from '../components/images/initeww.gif';

export default class ModalName extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            visible: false,
            ewwName: props.ewwName || '',
        };

    }
    onInputChange = (e) => {
        this.setState({ [e.target.name]: e.target.value })
    }
    onSubmitName = (e) => {
        e.preventDefault();
        const { ewwName } = this.state;
    
        this.props.onSubmitName({ewwName});
  
      }
    
    show = () => {
        this.setState({ visible: true });
    }

    hide = () => {
        this.setState({ visible: false });
    }
    render() {
        return (
            <div>
                <button onClick={this.show}>Eww's name</button>
                <Rodal
                    width = "400"
                    height = "400"
                    className = "init-modal"
                    visible={this.state.visible}
                    animation="door"
                    tabindex="-1"
                    onClose="false"
                >
                <img className = "image-modal" src={initeww}/>
                    <div className="header">
                        GIVE THE EWW A NAME
            </div>
                    <div className="body">                        
                        <form onSubmit={this.onSetName}>
                            <input name="" onChange={(e) => { this.onInputChange(e) }} type="text" />
                            <button type="submit">OK</button>
                        </form>
                        <button onClick={this.hide} className="rodal-cancel-btn">CLOSE</button>
                    </div>
                </Rodal>
            </div>
        )
    }
}