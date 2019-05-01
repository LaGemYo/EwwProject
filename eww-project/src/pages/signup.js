import React from 'react';
import signup from './signup.scss';
import { BrowserRouter as Router, Link } from 'react-router-dom';

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
        <Link to="/" >
            <button className="return">
             <span>Return to Main</span> 
            </button> 
        </Link>
          <h1 className="font-effect-shadow-multiple" id="mainTitle">Sign Up</h1>
          <form onSubmit={this.onFormSubmit}>
        </form>
        </div>
      )
    }
  }