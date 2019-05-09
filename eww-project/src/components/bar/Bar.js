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
        <link
  rel="stylesheet"
  href="https://maxcdn.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
  integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T"
  crossOrigin="anonymous"
/>
        <ProgressBar id={this.props.id} variant={this.props.variant} now={this.props.levelBar} className="feed-level"/>
      </div>
    );
  }
}