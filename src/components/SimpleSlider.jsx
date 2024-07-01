import React, { useRef, useEffect } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

export default function SimpleSlider() {
  const sliderRef = useRef(null);
  const {t} = useTranslation()

  const settings = {
    dots: false,
    infinite: true,
    speed: 2500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  useEffect(() => {
    const interval = setInterval(() => {
      if (sliderRef.current) {
        sliderRef.current.slickNext();
      }
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const slideContent = (
    <div className="absolute top-1/2 left-[380px] transform -translate-x-1/2 -translate-y-1/2 text-left z-10 font-bold">
      <h1 className="text-5xl mb-4 text-white w-[600px] leading-[55px]">
        {t("Slider.welcome")}
      </h1>
      <p className="mb-8 text-white text-[22px] w-[600px]">
      {t("Slider.experience")}
      </p>
      <Link
        to="/Reservation"
        className="p-[16px] bg-buttonColor text-black rounded-md border border-black hover:bg-mwvane transition duration-300 ease-in-out flex items-center justify-center w-[50%] md:w-[200px]"
      >
        {t("Slider.book")}
        <FontAwesomeIcon icon={faArrowRight} className="ml-2" />
      </Link>
    </div>
  );

  return (
    <div className="relative overflow-x-hidden h-full">
     <Slider ref={sliderRef} {...settings}>
  <div className="" style={{ height: "10vh", width: "100%"}}>
    <img
      src={"https://images.unsplash.com/photo-1655819084856-422b6e0ec422?q=80&w=3132&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"}
      alt="spring"
      className="h-full w-full object-cover"
      style={{ height: "92vh", width: "100%"}}
    />
  </div>
  <div className="" style={{ height: "10vh", width: "100%" }}>
    <img
      src={"https://images.unsplash.com/photo-1655472548832-3d0c1bd21059?q=80&w=2970&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"}
      alt="autumn"
      className="h-full w-full object-cover"
      style={{ height: "92vh", width: "100%"}}
    />
  </div>
  <div className="" style={{ height: "10vh", width: "100%" }}>
    <img
      src={"https://images.unsplash.com/photo-1655386562443-cd2691898bb3?q=80&w=3050&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"}
      alt="winter"
      className="h-full w-full object-cover"
      style={{ height: "92vh", width: "100%"}}
    />
  </div>
</Slider>

      {slideContent}
      <button
        className="slick-arrow slick-prev"
        style={{ left: 0 }}
        onClick={() => sliderRef.current.slickPrev()}
      >
        Previous
      </button>
      <button
        className="slick-arrow slick-next"
        style={{ right: 0 }}
        onClick={() => sliderRef.current.slickNext()}
      >
        Next
      </button>
    </div>
  );
}
