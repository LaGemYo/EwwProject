import React from 'react';
import forms from './forms.scss';
import { BrowserRouter as Router, Link } from 'react-router-dom';

export default class Login extends React.Component{
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
      <div id="loginDiv">
        <Link to="/" >
          <div className="return-space">
            <button className="return">
             <span>Return to Main</span> 
            </button> 
          </div>
        </Link>
        <h1 className="font-effect-shadow-multiple" id="mainTitle">Log in</h1>
        <form onSubmit={this.onFormSubmit}>
        <label className="form-class">
          Name:
          <br/>
          <input className="input-form" type="text"/>
        </label>
        <label className="form-class">
        <br/>
          Password:
          <input className="input-form" type="text"/>
        </label>
        <br/>
        <input className="submit-button" type="submit" value="Submit" />
      </form>
      </div>
    )
  }
}