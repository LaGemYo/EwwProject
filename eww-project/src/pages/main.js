import React from 'react';
import main from './main.scss';


export default class Main extends React.Component{
  constructor(props){
    super(props);

    this.state = {

    }
  }

  componentDidMount(){

  }

  render(){

    return (
      <div id="mainDiv">
          <h1 class="font-effect-shadow-multiple" id="mainTitle">Main menu</h1>
        <button id="logInButton">
            LOG IN
        </button>
        <button id="signUpButton">
            SIGN UP
        </button>

      </div>
    )
  }
}