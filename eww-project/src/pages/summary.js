import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import DataService from '../services/dataService';
import withUser from '../helpers/withUser';
import { connect } from 'react-redux';


class Summary extends Component {
  constructor(props){
    super(props);

    this.state = {
      loading: true,
      contact: null
    }
  }

  async componentDidMount(){
    const contact = await DataService.getObjectDetail('users', this.props.match.params.id);
    this.setState({contact, loading: false})
  }

  render() {

    return (
      <div id="summaryDiv">
       email {this.props.email}
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    userInfo: state.userReducer.user
  }
}

export default connect(mapStateToProps)(Summary);

