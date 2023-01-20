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
        responsive: [
            {
              breakpoint: 1024,
              settings: {
                slidesToShow: 5,
                slidesToScroll: 3,
                infinite: true,
                dots: true
              }
            },
            {
                breakpoint: 734,
                settings: {
                  slidesToShow: 4,
                  slidesToScroll: 3,
                  infinite: true,
                  dots: true
                }
              },
              {
                breakpoint: 565,
                settings: {
                  slidesToShow: 3,
                  slidesToScroll: 3,
                  infinite: true,
                  dots: true
                }
              },
              {
                breakpoint: 435,
                settings: {
                  slidesToShow: 2,
                  slidesToScroll: 3,
                  infinite: true,
                  dots: true
                }
              },]
    };
    return (
<div className="category_cerosel" Style={"margin: auto;display:block;width: 80%;padding:4rem 0"} >
      <Slider {...settings}>
    
      {brand_data && brand_data .map((el,i)=>(<div className="brand_carosel_card_box" > <Brand_card b_image={el}/></div>  ))}
   
      </Slider>
        </div>
    );
  }