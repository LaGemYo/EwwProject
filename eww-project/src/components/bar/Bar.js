import React, { Component } from 'react';
import {ProgressBar} from 'react-bootstrap';
import './bar.scss'

export default class Bar extends Component {
  constructor(props) {
    super(props);

  }

  render() {
    return (
      <div>
        
        <ProgressBar id={this.props.id} variant={this.props.variant} now={this.props.levelBar} className="feed-level"/>
      </div>
    );
  }
}