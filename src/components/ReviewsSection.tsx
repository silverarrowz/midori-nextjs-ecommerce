"use client";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import React, { useRef } from "react";
import Slider from "react-slick";

import { TfiAngleLeft, TfiAngleRight } from "react-icons/tfi";
import { IoMdStarOutline } from "react-icons/io";

const ReviewsSection = () => {
  const settings = {
    infinite: true,
    speed: 400,
    slidesToShow: 3.5,
    slidesToScroll: 1,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 4000,
    pauseOnHover: true,
    cssEase: "ease-in-out",
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 2.5,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 425,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const reviews = [
    {
      username: "alicegr_",
      name: "Алиса",
      comment:
        "Все вкусные и неповторимые, каждый вкус уникален по-своему. Нежная текстура, моти просто тают во рту, всегда такие свежие и сочные.",
      image: "/images/reviews1.jpg",
    },
    {
      username: "lisasfavefoods",
      name: "Лиза",
      comment:
        "Моти для меня — самое вкусное лакомство в мире, но моти от MiDori - это просто новый уровень! Не передать словами, просто поверьте мне и попробуйте сами.",
      image: "/images/reviews3.webp",
    },
    {
      username: "jennysjapan",
      name: "Евгения",
      comment:
        "Выше всяческих похвал! Приятно удивлена, что на российском рынке наконец-то появился такой производитель.",
      image: "/images/reviews2.jpg",
    },
    {
      username: "aniechkaannn_89_",
      name: "Аня",
      comment:
        "Две моих страсти — моти и матча — в одном потрясающе вкусном сочетании! Этот вкус был словно создан для меня, отдельное за него спасибо. Другие вкусы, впрочем, точно так же восхитительны.",
      image: "/images/reviews6.webp",
    },
    {
      username: "_mintysky_y",
      name: "Денис",
      comment:
        "Потрясающе. Перепробовал все вкусы, и абсолютно все мне понравились. Думаю, такого широкого выбора вкусов на отечественном рынке вы нигде больше не найдете.",
      image: "/images/reviews5.jpg",
    },
  ];

  const slider = useRef(null);

  return (
    <section className="bg-white min-h-96 pt-2 pb-16">
      <div
        className="z-50 text-3xl md:text-4xl lg:text-5xl
      font-cormorant-garamond my-10 sm:my-16
     mx-4 sm:mx-24 xl:mx-44 
     relative"
      >
        <h3 className="text-heading-dark">Отзывы</h3>
        <div className="absolute top-0 right-0 z-10">
          {/* @ts-expect-error test  */}
          <button onClick={() => slider?.current?.slickPrev()}>
            <TfiAngleLeft className="w-8 h-8 text-heading-dark" />
          </button>
          {/* @ts-expect-error test */}
          <button onClick={() => slider?.current?.slickNext()}>
            <TfiAngleRight className="w-8 h-8 text-heading-dark" />
          </button>
        </div>
      </div>
      <Slider ref={slider} {...settings}>
        {reviews.map((review) => (
          <div key={review.username} className="">
            <div className="flex flex-col items-center gap-4 xs:px-2 md:px-0 md:w-52 lg:w-72">
              <div className="w-full h-0 pb-[100%] relative">
                <img
                  src={review.image}
                  alt={review.name}
                  className="object-cover absolute top-0 left-0 w-full h-full"
                />
                <div className="absolute top-0 left-0 bottom-0 right-0 z-30 bg-background/30 hover:bg-transparent transition" />
              </div>
              <div
                className="flex *:text-heading-dark 
              *:h-6 *:w-6
              md:*:w-8 md:*:h-8
              lg:*:w-10 lg:*:h-10
             "
              >
                <IoMdStarOutline />
                <IoMdStarOutline />
                <IoMdStarOutline />
                <IoMdStarOutline />
                <IoMdStarOutline />
              </div>
              <div className="flex flex-col gap-2 text-center sm:text-left mb-2">
                <h4 className="text-xl text-heading-dark font-semibold">
                  {review.name}
                </h4>
                <p className="text-sm text-heading">@{review.username}</p>
              </div>
              <p className="text-sm text-heading italic font-light px-8 sm:p-0">
                «{review.comment}»
              </p>
            </div>
          </div>
        ))}
      </Slider>
    </section>
  );
};

export default ReviewsSection;
