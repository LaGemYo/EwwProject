import React, { Component } from 'react';
import ToWetButton from "./ToWetButton";
import ToFeedButton from "./ToFeedButton";
import ToPlayWithEwwButton from './ToPlayWithEwwButton';

export default class InteractionMenu extends Component {
  constructor() {
    super();

  }

  render() {
    return (
      <div>
        <ToWetButton/>
        <ToFeedButton/>
        <ToPlayWithEwwButton/>
      </div>
    );
  }
}