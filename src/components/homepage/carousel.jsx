import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import React, { useEffect, useState } from "react";
import CourseCard from "./card";
import Style from "./carousel.module.css";
import { Alert, Backdrop, CircularProgress } from "@mui/material";
import axios from "axios";

export default function CarouselCourse() {
  const settings = {
    arrow: true,
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
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

  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [open, setOpen] = React.useState(true);

  useEffect(() => {
    // Gunakan state isLoading untuk menandakan bahwa data masih dimuat
    setIsLoading(true);

    // Ambil data dari API
    axios
      .get("https://skillmastery.adaptable.app/courses")
      .then((response) => {
        setData(response.data.data);
        setIsLoading(false);
        setOpen(false);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
        setIsLoading(false);
      });
  }, []);
  return (
    <div className={`${Style.card_wrapper}`}>
      {isLoading ? (
        <Alert severity="info">Sedang mengambil data</Alert>
      ) : (
        <Slider {...settings}>
          {/* render card course */}
          {data &&
            data.map((course) => (
              <CourseCard key={course.id} course={course} />
            ))}
        </Slider>
      )}
    </div>
  );
}
