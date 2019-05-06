import React from 'react';
import { connect } from 'react-redux';

function withUser(WrappedComponent){
  const NewComponent = (props) => {
    const userInfo = props;
    return <WrappedComponent userInfo={userInfo} {...props} />
  }

  return connect(mapStateToProps)(NewComponent)
}

const mapStateToProps = (state) => {
  return {
    userInfo: state.userReducer.user
  }
}

export default withUser;