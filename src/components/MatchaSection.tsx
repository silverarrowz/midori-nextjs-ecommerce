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
      id="matcha"
      className="
    pt-8 
    relative overflow-hidden
   bg-background-lightest"
    >
      <div className="relative z-50 w-auto">
        <h2
          className="z-50 text-3xl md:text-4xl lg:text-5xl
      text-center font-cormorant-garamond text-heading-dark"
        >
          Матча
        </h2>
      </div>

      <p className="text-center text-heading py-6 px-8 ">
        Мы рады представить Вам нашу новую коллецкцию MiDori Matcha —{" "}
        <span className="bg-button">идеальное дополнение</span> к Вашему
        любимому десерту!
      </p>

      <div
        className=" max-w-[94%] text-center 
      mx-auto py-16 relative"
      >
        <button>
          <MdNavigateBefore
            className="z-20 h-10 w-10 xs:h-14 xs:w-14 opacity-55 absolute left-0 top-[30%] text-heading-dark sm:hidden"
            // @ts-expect-error test
            onClick={() => slider?.current?.slickPrev()}
          />
        </button>
        <button>
          <MdNavigateNext
            className="z-20 h-10 w-10 xs:h-14 xs:w-14 opacity-55 absolute right-0 top-[30%] text-heading-dark sm:hidden"
            // @ts-expect-error test
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
          className="rounded-3xl
             mx-auto border border-heading-dark text-heading-dark
              group hover:italic bg-transparent
              hover:shadow-[inset_0_0_4px_2px_rgba(102,219,178,0.36),0_0_6px_2px_rgba(102,219,178,0.36)]
              px-7 py-1 font-light 
              w-auto self-center mt-6
              flex items-center gap-2"
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
