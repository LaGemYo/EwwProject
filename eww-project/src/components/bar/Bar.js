import React, { Component } from 'react';
import {ProgressBar} from 'react-bootstrap';
import './bar.scss'

export default class Bar extends Component {

  render() {
    const variant = this.props.variant
    const level = this.props.levelBar
    return (
      <div>        
        <ProgressBar id={this.props.id} variant={variant} now={level > 0 ? level : 0} className="feed-level"/>
      </div>
    );
  }
}