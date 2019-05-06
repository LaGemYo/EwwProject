import React from 'react';
import forms from './forms.scss';
import { BrowserRouter as Router, Link } from 'react-router-dom';
import SimpleSlider from '../components/story/SimpleSlider'
import '../components/story/index.scss'

export default class Story extends React.Component {
  constructor(props) {
    super(props);

    this.state = {

    }
  }

  render() {
    return (
      <div id="storyDiv">
        <Link to="/user" >
          <div className="return-space">
            <button className="return-arrow-button" />
          </div>
        </Link>
        <SimpleSlider />
      </div>
    )
  }
}