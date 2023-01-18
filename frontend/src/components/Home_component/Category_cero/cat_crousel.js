import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import React, { Component } from "react";
import Slider from "react-slick";
import Cat_card from "./cat_card";
import "./cat_caro.css"
export default function Cat_carousel({category_name,category_data}) {
    var settings = {
        dots: true,
        infinite: true,
        slidesToShow: 8,
        slidesToScroll: 3,
        cssEase: "linear",
        nextArrow:false,
        prevArrow: false,
        autoplay: true,
        speed: 5000,
        autoplaySpeed: 5000,
    };
    return (
<div className="category_cerosel" Style={"margin: auto;display:block;width: 95.5%;padding:2rem 0"} >
      <Slider {...settings}>
    
      {category_data && category_data .map((el,i)=>(<Cat_card  cat_image={el} cat_name={category_name[i]}/>))}
   
      </Slider>
        </div>
    );
  }