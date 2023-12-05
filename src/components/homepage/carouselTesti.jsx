import Slider from "react-slick";
import TestiCard from "./testiCard";
import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
// @ts-ignore
import Style from "./carousel.module.css";

export default function CarouselTesti() {
  const testimonialsData = [
    {
      name: "Muhammad Haikal Syahfarel",
      role: "Pekerja",
      imageSrc:
      "https://res.cloudinary.com/dzajixld0/image/upload/v1701790070/testi_1_uomeva.png",
      content:
        "Kelas website ini sungguh luar biasa! Materi yang disampaikan sangat jelas dan mudah dipahami. Saya benar-benar merasa meningkatkan keterampilan saya dalam membuat dan mengelola website. Terima kasih!",
      rating: 5,
    },
    {
      name: "Dionisius Reinaldo",
      role: "Mentor",
      imageSrc:
        "https://res.cloudinary.com/dzajixld0/image/upload/v1701790069/testi_2_vopqct.png",
      content: `Saya sangat puas dengan kelas website ini. Instrukturnya sangat
      kompeten dan responsif terhadap pertanyaan. Materi yang
      diberikan sangat relevan dan praktis. Sangat direkomendasikan!`,
      rating: 5,
    },
    {
      name: "Anri Daniata Purba",
      role: "Mahasiswa",
      imageSrc:
      "https://res.cloudinary.com/dzajixld0/image/upload/v1701790071/testi_6_hrtioe.png",
      content: `Kelas ini sungguh luar biasa! Materi yang diajarkan sangat
      relevan dan guru memberikan penjelasan dengan sangat jelas. Saya
      merasa lebih percaya diri dalam memahami konsep-konsep yang
      sebelumnya sulit.`,
      rating: 5,
    },
    // Add more testimonials as needed
  ];
  const settings = {
    arrow: true,
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
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
        {
          testimonialsData.map((item)=>(
            <TestiCard data={item}/>
          ))
        }
      </Slider>
    </div>
  );
}
