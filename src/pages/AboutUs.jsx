import React, { useState } from "react";
import jamesProfile from "/Images/unsplash_OhKElOkQ3RE.png";
import gregProfile from "/Images/unsplash_WMD64tMfc4k.svg";
import trevorProfile from "/Images/unsplash_6anudmpILw4.svg";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useInView } from "react-intersection-observer";

export default function AboutUs() {
  const [rating, setRating] = useState(0);
  const { t } = useTranslation();

  // Function to handle clicking on a star to set the rating
  const handleRating = (value) => {
    setRating(value);
  };

  const userProfiles = [
    {
      id: 1,
      name: "James Pattinson",
      photoUrl: jamesProfile,
      rating: 4,
      impression: "good"
    },
    {
      id: 2,
      name: "Greg Stuart",
      photoUrl: gregProfile,
      rating: 5,
      impression: "very good"
    },
    {
      id: 3,
      name: "Trevor Mitchell",
      photoUrl: trevorProfile,
      rating: 3,
      impression: "very very good good"
    },
  ];

  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  // Intersection observer threshold and trigger animations
  const { ref: storyRef, inView: storyInView } = useInView({
    threshold: 0.5,
  });

  const { ref: missionRef, inView: missionInView } = useInView({
    threshold: 0.5,
  });

  const { ref: teamRef, inView: teamInView } = useInView({
    threshold: 0.5,
  });

  return (
    <motion.div
      className="bg-foni p-8"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <h1 className="text-3xl font-bold text-center mt-16 text-mwvane">
        {t("Navigation.aboutUs")}
      </h1>
  
      {/* Our Story */}
      <div className="flex flex-col gap-20">
        <div className="mt-8 flex flex-wrap justify-center items-center">
          <div className="w-full md:w-1/2 px-4">
            <img
              src="https://images.unsplash.com/photo-1694942595231-7e019ff65c47?q=80&w=2970&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="Service Image"
              className="w-full h-auto"
            />
          </div>
          <motion.div
            ref={storyRef}
            className="w-full md:w-1/2 px-4 mt-4 md:mt-0"
            initial={{ opacity: 0, y: 20 }}
            animate={storyInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-2xl md:text-3xl font-bold text-black">
              {t("AboutUs.history")}
            </h2>
            <p className="text-lg md:text-lg font-normal text-neutralText mt-2 leading-8">
              {t("AboutUs.history_text")}
            </p>
          </motion.div>
        </div>
  
        {/* Mission and Vision */}
        <div className="mt-8 flex flex-wrap justify-center items-center">
          <motion.div
            ref={missionRef}
            className="w-full md:w-1/2 px-4"
            initial={{ opacity: 0, y: 20 }}
            animate={missionInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-2xl md:text-3xl font-bold text-black">
            {t("AboutUs.goal")}
            </h2>
            <p className="text-lg md:text-lg font-normal text-neutralText mt-2">
            {t("AboutUs.goal_text")}

            </p>
          </motion.div>
          <div className="w-full md:w-1/2 px-4 mt-4 md:mt-0">
            <img
              src="https://images.unsplash.com/photo-1694942587160-3fcfecc29762?q=80&w=2970&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="Service Image"
              className="w-full h-auto"
            />
          </div>
        </div>
  
        {/* Team Members/Founder */}
        <div className="mt-8 flex flex-wrap justify-center items-center">
          <div className="w-full md:w-1/2 px-4">
            <img
              src="https://images.unsplash.com/photo-1453129901055-284722f098b7?q=80&w=2970&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="Service Image"
              className="w-full h-auto"
            />
          </div>
          <motion.div
            ref={teamRef}
            className="w-full md:w-1/2 px-4 mt-4 md:mt-0"
            initial={{ opacity: 0, y: 20 }}
            animate={teamInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-2xl md:text-3xl font-bold text-black">
              {t("AboutUs.team")}
            </h2>
            <p className="text-lg md:text-lg font-normal text-neutralText mt-2">
            {t("AboutUs.team_text")}
            </p>
          </motion.div>
        </div>
      </div>
  
      {/* Customer Impressions */}
      
        
    </motion.div>
  );
}
