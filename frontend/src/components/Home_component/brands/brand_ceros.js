import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import React, { Component } from "react";
import Slider from "react-slick";
import Brand_card from "./brands_card";

export default function Brand_cerosel({brand_data}) {
    var settings = {
        dots: true,
        infinite: true,
        slidesToShow: 7,
        slidesToScroll: 3,
        cssEase: "linear",
      
    };
    return (
<div className="category_cerosel" Style={"margin: auto;display:block;width: 95.5%;padding:2rem 0;"} >
      <Slider {...settings}>
    
      {brand_data && brand_data .map((el,i)=>(<div Style={"max-width:142px;background: white;height:160px;display:flex;margin:0 0.1rem;"} > <Brand_card b_image={el}/></div>  ))}
   
      </Slider>
        </div>
    );
  }