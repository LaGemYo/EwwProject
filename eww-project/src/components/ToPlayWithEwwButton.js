import React, { Component } from 'react';
import gamepad from '../components/images/gamepad.png';

export default class ToPlayWithEwwButton extends Component {
    constructor() {
        super();

    }

    render() {
        return (
            <div className="interact-button">
                <button className="down-button" id="play-with-button"/>
            </div>
        );
    }
}