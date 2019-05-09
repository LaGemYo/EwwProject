import React, { Component } from 'react';
import wetButton from '../components/images/wet-button.png';
import { connect } from 'react-redux';

class ToWetButton extends Component {
  constructor() {
    super();

  }

  toChangeImage = (e) => {
    e.preventDefault()
    this.props.dispatch({ type: "SHOWERING" })
    setTimeout(() => { this.props.dispatch({ type: "STANDARD" }) }, 4000)
  }

  render() {
    return (
      <div className="interact-button">
        <button onClick={this.toChangeImage} className="down-button" id="wet-button" />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {

  }
}

export default connect (mapStateToProps)(ToWetButton);