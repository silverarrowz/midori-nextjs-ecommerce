"use client";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import React, { useRef } from "react";
import Slider from "react-slick";

import FeaturedItem from "./FeaturedItem";
import { MdNavigateBefore, MdNavigateNext } from "react-icons/md";

const FeaturedSection = () => {
  const slider = useRef(null);

  const featuredItems = [
    {
      title: "«Мандарин»",
      price: 220,
      image: "/images/mochi-mandarin.png",
    },
    {
      title: "«Пина Колада»",
      price: 260,
      image: "/images/mochi-pineapple.png",
    },
    {
      title: "«Маковый»",
      price: 190,
      image: "/images/mochi-sesame.png",
    },
  ];

  const settings = {
    infinite: true,
    speed: 400,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: false,
    autoplay: false,
    autoplaySpeed: 3000,
    pauseOnHover: true,
    cssEase: "ease-in-out",
    responsive: [
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          autoplay: true,
        },
      },
    ],
  };

  return (
    <section
      id="mochi"
      className="bg-white mt-16 sm:mt-28 md:mt-48 
    lg:mt-4 
    pt-8 pb-8 
    relative overflow-hidden"
    >
      <h2
        className="z-50 text-3xl md:text-4xl lg:text-5xl
      text-center font-serif"
      >
        Новинки
      </h2>

      <div
        className=" max-w-[94%] text-center 
      mx-auto py-16 relative"
      >
        <button>
          <MdNavigateBefore
            className="z-20 h-10 w-10 xs:h-14 xs:w-14 opacity-55 absolute left-0 top-[40%] sm:hidden"
            // @ts-expect-error test
            onClick={() => slider?.current?.slickPrev()}
          />
        </button>
        <button>
          <MdNavigateNext
            className="z-20 h-10 w-10 xs:h-14 xs:w-14 opacity-55 absolute right-0 top-[40%] sm:hidden"
            // @ts-expect-error test
            onClick={() => slider?.current?.slickNext()}
          />
        </button>

        <Slider ref={slider} {...settings}>
          {featuredItems.map((item) => (
            <FeaturedItem
              key={item.image}
              title={item.title}
              image={item.image}
              price={item.price}
            />
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default FeaturedSection;
