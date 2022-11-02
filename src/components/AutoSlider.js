import React, { Component } from "react";
import Slider from "react-slick";

export default class PauseOnHover extends Component {
  render() {
    var settings = {
      dots: false,
      infinite: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 2000,
      pauseOnHover: true,
      arrows: false,
    };
    return (
      <div>
        <Slider {...settings}>
          <div>
          <img src="https://images.olx.com.pk/thumbnails/299295776-800x600.webp" width="100%" height="100%"/>
          </div>
          <div>
          <img src="https://images.olx.com.pk/thumbnails/299295495-800x600.webp" width="100%" height="100%"/>
          </div>
        </Slider>
      </div>
    );
  }
}