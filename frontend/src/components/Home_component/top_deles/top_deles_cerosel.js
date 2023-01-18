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
        cssEase: "linear"
    };
    return (
<div Style={"margin: auto;display:block;width: 95.5%;padding-bottom:2.5rem"} >
      <Slider {...settings}>
      {data && data.map(el=>(<div><Top_deal_card image={el.image} name={el.name} price={el.price} reviews={el.review} rating={el.rating}/></div>))}
   
      </Slider>
        </div>
    );
  }