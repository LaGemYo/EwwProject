import React, { Component } from 'react';
import {ProgressBar} from 'react-bootstrap';
import './bar.scss'

export default class Bar extends Component {
  constructor() {
    super();

  }

  render() {
    return (
      <div>
        <link
  rel="stylesheet"
  href="https://maxcdn.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
  integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T"
  crossorigin="anonymous"
/>
        <ProgressBar variant="danger" id="feed-level" label="FOOD"/>
      </div>
    );
  }
}