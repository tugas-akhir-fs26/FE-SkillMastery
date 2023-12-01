import Slider from "react-slick";
import TestiCard from "./testiCard";
import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
// @ts-ignore
import Style from "./carousel.module.css";

export default function CarouselTesti() {
    const settings = {
        arrow: true,
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll:1,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 3,
              infinite: true,
              dots: true,
            },
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
              initialSlide: 2,
            },
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
            },
          },
        ],
      };
  return (
    <div className={`${Style.card_wrapper}`}>
      <Slider {...settings}>
        <TestiCard />
        <TestiCard />
        <TestiCard />
        <TestiCard />
        <TestiCard />
        <TestiCard />
        <TestiCard />
        <TestiCard />
      </Slider>
    </div>
  );
}
