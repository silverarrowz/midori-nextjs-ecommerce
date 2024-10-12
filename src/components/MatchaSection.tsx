"use client";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import React, { useRef } from "react";
import Slider from "react-slick";

import FeaturedItem from "./FeaturedItem";
import { MdNavigateBefore, MdNavigateNext } from "react-icons/md";

const MatchaSection = () => {
  const slider = useRef(null);

  const featuredItems = [
    {
      title: "Матча",
      amount: "100 г",
      price: 320,
      image: "/images/matcha.png",
    },
    {
      title: "Розовая матча",
      amount: "100 г",
      price: 360,
      image: "/images/matcha-pink.png",
    },
    {
      title: "Голубая матча",
      amount: "100 г",
      price: 330,
      image: "/images/matcha-blue.png",
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
      className="
    pt-8 
    relative overflow-hidden
   bg-background-lightest"
    >
      <h2
        className="z-50 text-3xl md:text-4xl lg:text-5xl
      text-center font-serif text-heading-dark"
      >
        Матча
      </h2>
      <p className="text-center py-6 px-8 font-sans-light">
        Мы рады представить Вам нашу новую коллецкцию MiDori Matcha — идеальное
        дополнение к Вашему любимому десерту!
      </p>

      <div
        className=" max-w-[94%] text-center 
      mx-auto py-16 relative"
      >
        <button>
          <MdNavigateBefore
            className="z-20 h-10 w-10 xs:h-14 xs:w-14 opacity-55 absolute left-0 top-[40%] sm:hidden"
            onClick={() => slider?.current?.slickPrev()}
          />
        </button>
        <button>
          <MdNavigateNext
            className="z-20 h-10 w-10 xs:h-14 xs:w-14 opacity-55 absolute right-0 top-[40%] sm:hidden"
            onClick={() => slider?.current?.slickNext()}
          />
        </button>

        <Slider className="mb-14" ref={slider} {...settings}>
          {featuredItems.map((item) => (
            <FeaturedItem
              key={item.image}
              title={item.title}
              image={item.image}
              price={item.price}
              amount={item.amount}
            />
          ))}
        </Slider>

        <button
          className="
              group hover:opacity-70
             self-center mt-6
              flex items-center gap-2
              mx-auto font-sans-light uppercase tracking-widest"
        >
          Смотреть все
          <span
            className="text-xl group-hover:translate-x-1 transition-all
               duration-100 ease-in-out"
          >
            &rarr;
          </span>
        </button>
      </div>
    </section>
  );
};

export default MatchaSection;
