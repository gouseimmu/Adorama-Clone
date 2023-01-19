import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import React, { Component } from "react";
import Slider from "react-slick";
import Top_deal from "./top_deles";
import Top_deal_card from "./top_dele_card";
export default function Top_deal_cero({data}) {
    var settings = {
        dots: true,
        infinite: true,
        slidesToShow: 5,
        slidesToScroll: 3,
        cssEase: "linear",
        responsive: [
            {
              breakpoint: 990,
              settings: {
                slidesToShow: 4,
                slidesToScroll: 3,
                infinite: true,
                dots: true
              }
            },
            {
                breakpoint: 769,
                settings: {
                  slidesToShow: 3,
                  slidesToScroll: 3,
                  infinite: true,
                  dots: true
                }
              },
              {
                breakpoint: 600,
                settings: {
                  slidesToShow: 2,
                  slidesToScroll: 2,
                  infinite: true,
                  dots: true
                }
              },
              {
                breakpoint: 360,
                settings: {
                  slidesToShow: 1,
                  slidesToScroll: 2,
                  infinite: true,
                  dots: true
                }
              },
        ]
    };
    return (
<div Style={"margin: auto;display:block;width: 95.5%;padding-bottom:2.5rem"} >
      <Slider {...settings}>
      {data && data.map(el=>(<div><Top_deal_card image={el.image} name={el.name} price={el.price} reviews={el.review} rating={el.rating}/></div>))}
   
      </Slider>
        </div>
    );
  }