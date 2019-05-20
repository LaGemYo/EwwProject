import React, { Component } from 'react';
import { connect } from 'react-redux';

 class ShowUserData extends Component {
  constructor() {
    super();

  }

  render() {
    const eww = this.props.eww
    const user = this.props.userInfo.name
    
        
    return (
      <div id="data-out-div">
        <div id="data-div">
          <div id="data-input">
            <p>Your name: {user}</p>
            <p>Eww Name: {eww.name}</p>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    userInfo: state.userReducer.user,
    eww: state.ewwDataReducer,
  }
}

export default connect(mapStateToProps)(ShowUserData)