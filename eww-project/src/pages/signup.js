import React from 'react';
import forms from './forms.scss';

export default class SignUp extends React.Component{
    constructor(props){
      super(props);
  
      this.state = {
  
      }
    }
  
    componentDidMount(){
  
    }
  
    onFormSubmit = (event) => {
      event.preventDefault();
      console.log('submit pressed')
    }
  
    render(){
      return (
        <div id="signUpDiv">
          <h1 className="font-effect-shadow-multiple" id="mainTitle">Sign Up</h1>
          <form onSubmit={this.onFormSubmit}>
        </form>
        </div>
      )
    }
  }