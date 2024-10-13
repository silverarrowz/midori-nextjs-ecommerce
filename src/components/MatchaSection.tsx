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
      image: "/images/matcha-powder.png",
    },
    {
      title: "Розовая матча",
      amount: "100 г",
      price: 360,
      image: "/images/matcha-pink-powder.png",
    },
    {
      title: "Голубая матча",
      amount: "100 г",
      price: 330,
      image: "/images/matcha-blue-powder.png",
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
   bg-gradient-to-b from-background via-background-lightest to-white"
    >
      <div className="relative z-50 w-auto">
        <h2
          className="z-50 text-3xl md:text-4xl lg:text-6xl
      text-center font-cormorant-garamond text-heading-dark"
        >
          Матча
          <div className="mb-12">
            {" "}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              version="1.1"
              viewBox="0 0 800 400"
              className="mx-auto w-28 -my-4"
            >
              <path
                d="M163.7992706298828,218.10035705566406C171.3321266937256,213.03016713460286,195.3285469309489,187.89725809733073,210.39425659179688,186.7383575439453C225.45996625264485,185.5794569905599,237.86736323038738,210.93190002441406,256.9892272949219,210.93190002441406C276.1110913594564,210.93190002441406,306.07526240030927,185.43459442138672,328.673828125,186.7383575439453C351.27239384969073,188.0421206665039,373.01670364379885,218.4169639078776,396.774169921875,218.9964141845703C420.53163619995115,219.57586446126302,455.9259085083008,191.19176147460936,475.6272277832031,190.3225860595703C495.32854705810547,189.45341064453126,498.3572358703613,212.4611708577474,518.6380004882812,213.6200714111328C538.9187651062011,214.77897196451823,581.0842218017578,197.05645538330077,601.0752563476562,197.4910430908203C621.0662908935547,197.92563079833985,635.6302060953776,213.26612884521484,642.2938842773438,216.30824279785156"
                fill="none"
                stroke-width="8"
                stroke="#8967B3"
                stroke-linecap="butt"
                transform="matrix(1.6764303884620877,0,0,1.6764303884620877,-275.6795431990246,-140.0579031616998)"
              ></path>
              <defs>
                <linearGradient id="SvgjsLinearGradient1001">
                  <stop stop-color="hsl(37, 99%, 67%)" offset="0"></stop>
                  <stop stop-color="hsl(316, 73%, 52%)" offset="1"></stop>
                </linearGradient>
              </defs>
            </svg>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              version="1.1"
              viewBox="0 0 800 400"
              className="mx-auto w-28 -my-11"
            >
              <path
                d="M163.7992706298828,218.10035705566406C171.3321266937256,213.03016713460286,195.3285469309489,187.89725809733073,210.39425659179688,186.7383575439453C225.45996625264485,185.5794569905599,237.86736323038738,210.93190002441406,256.9892272949219,210.93190002441406C276.1110913594564,210.93190002441406,306.07526240030927,185.43459442138672,328.673828125,186.7383575439453C351.27239384969073,188.0421206665039,373.01670364379885,218.4169639078776,396.774169921875,218.9964141845703C420.53163619995115,219.57586446126302,455.9259085083008,191.19176147460936,475.6272277832031,190.3225860595703C495.32854705810547,189.45341064453126,498.3572358703613,212.4611708577474,518.6380004882812,213.6200714111328C538.9187651062011,214.77897196451823,581.0842218017578,197.05645538330077,601.0752563476562,197.4910430908203C621.0662908935547,197.92563079833985,635.6302060953776,213.26612884521484,642.2938842773438,216.30824279785156"
                fill="none"
                stroke-width="8"
                stroke="#ffff94"
                stroke-linecap="butt"
                transform="matrix(1.6764303884620877,0,0,1.6764303884620877,-275.6795431990246,-140.0579031616998)"
              ></path>
              <defs>
                <linearGradient id="SvgjsLinearGradient1001">
                  <stop stop-color="hsl(37, 99%, 67%)" offset="0"></stop>
                  <stop stop-color="hsl(316, 73%, 52%)" offset="1"></stop>
                </linearGradient>
              </defs>
            </svg>
          </div>
        </h2>
      </div>

      <p className="text-center text-heading py-6 px-8 ">
        Мы рады представить Вам нашу новую коллецкцию MiDori Matcha —{" "}
        <span className="bg-[#ffff94]">идеальное дополнение</span> к Вашему
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
             mx-auto border border-heading text-heading
               bg-transparent  transition-all duration-300
              hover:shadow-[inset_0_0_4px_2px_rgba(215,89,161,0.36),0_0_6px_2px_rgba(215,89,161,0.36)]
              px-7 py-1 tracking-widest
              w-auto self-center mt-6
              flex items-center gap-2"
        >
          Смотреть все
        </button>
      </div>
    </section>
  );
};

export default MatchaSection;
