import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import DataService from '../services/dataService';
import withUser from '../helpers/withUser';
import { connect } from 'react-redux';


class Summary extends Component {
  constructor(props) {
    super(props);

  }



  render() {

    return (
      <div id="summaryDiv">
        <h1>All my ewws</h1>
        <h1>{this.props.eww.status}</h1>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    userInfo: state.userReducer.user,
    eww: state.ewwDataReducer,
  }
}

export default connect(mapStateToProps)(Summary);

