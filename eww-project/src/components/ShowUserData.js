import React, { Component } from 'react';
import { connect } from 'react-redux';

 class ShowUserData extends Component {

  render() {
    const eww = this.props.eww
    const user = this.props.userInfo.name
           
    return (
      <div id="data-out-div">
        <div id="data-div">
          <div id="data-input">
            <p>NOMBRE DE USUARIO:</p>
            <p>{ user }</p>
            <p>NOMBRE DE EWW:</p>
            <p>{ eww.name }</p>
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