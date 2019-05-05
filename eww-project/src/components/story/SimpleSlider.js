import React, { Component } from "react";
import Slider from "react-slick";
import diapo1 from "../images/carousel-images/diapo1.png";
import diapo2 from "../images/carousel-images/diapo2.png";
import diapo3 from "../images/carousel-images/diapo3.png";
import diapo4 from "../images/carousel-images/diapo4.png";
import '../story/index.scss';

export default class SimpleSlider extends Component {
  render() {
    const settings = {
      dots: true,
      infinite: false,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
    };
    return (
      <div>    
        <h1 className="font-effect-shadow-multiple" id="sliderTitle">Story</h1>
        <Slider {...settings}>
          <div>
            <img className="diapo" src={diapo1}/>
          </div>
          <div>
              <img className="diapo" src={diapo2}/>
          </div>
          <div>
              <img className="diapo" src={diapo3}/>
          </div>
          <div>
              <img className="diapo" src={diapo4}/>
          </div>
        </Slider>
      </div>
    );
  }
}