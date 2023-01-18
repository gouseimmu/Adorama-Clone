import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import React, { Component } from "react";
import Slider from "react-slick";
export default function Cerosel({data}) {
    var settings = {
        dots: true,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        speed: 500,
        autoplaySpeed: 2000,
        cssEase: "linear"
    };
    return (
<div>
      <Slider {...settings}>
        
       {data && data.map(el=>(<div><img src={el}/></div>))}
      </Slider>
        </div>
    );
  }