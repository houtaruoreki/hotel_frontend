import React, { useState, useEffect } from "react";
import RoomsList from "../components/RoomsList";
import dribble from "/Images/icon-dribbble.png";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import SimpleSlider from "../components/SimpleSlider";
import { MdCoffee, MdDinnerDining, MdEmail, MdLandscape, MdLocalPhone, MdLocationPin} from "react-icons/md";
import API_URL from '../config';

export default function Home() {
  const { t } = useTranslation();
  const photoArr = [
    "https://images.unsplash.com/photo-1612374172029-be0eea9796a8?q=80&w=2970&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1630930024868-6e7b23e41b59?q=80&w=2972&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1544986581-efac024faf62?q=80&w=2970&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1519690889869-e705e59f72e1?q=80&w=2970&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  ];

  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
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

  const [contactInfo, setContactInfo] = useState({
    mobile: "",
    email: ""
  });

  useEffect(() => {
    fetch(`${API_URL}/contact/`)
      .then(response => response.json())
      .then(data => {
        const emailData = data.find(item => item.title === "email");
        const phoneData = data.find(item => item.title === "phone");

        setContactInfo({
          mobile: phoneData ? phoneData.description : "",
          email: emailData ? emailData.description : ""
        });
      })
      .catch(error => console.error('Error fetching contact info:', error));
  }, []);

  return (
    <motion.div className="bg-foni text-center text-white">
      <SimpleSlider/>
      <div className="pt-12 md:pt-16 lg:pt-20">
        <p className="w-11/12 md:w-8/12 lg:w-6/12 mx-auto text-2xl md:text-4xl lg:text-5xl font-bold text-black mt-8 leading-10 text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-green-900">
          {t("greetingHome")}
        </p>
        <p className="text-slate-400 text-lg md:text-xl font-light mt-6">
          {t('pHome')}
          <br />
          {t('brHome')}
        </p>
      </div>
      <div className="mt-12 md:mt-16">
        <h2 className="text-2xl font-bold uppercase text-mwvane">{t("Main.rooms")}</h2>
        <RoomsList sliceCount={3}/>
      </div>

      <h2 className="text-2xl mt-16 md:mt-24 lg:mt-32 text-mwvane font-bold uppercase">{t("Main.gallery")}</h2>
      <p className="mt-6 md:mt-10 text-center text-black text-lg md:text-xl font-light">
        {t("Main.gallery_text")}
      </p>
      <Link to={"/Gallery"} className="flex justify-end mt-2 mb-2 px-4">
        ყველას ნახვა
      </Link>

      <div className="overflow-x-auto flex no-scrollbar gap-4 px-2 md:px-4 lg:px-8 justify-around">
        {photoArr.map((image, index) => (
          <img
            key={index}
            src={image}
            alt={`Event Photo ${index + 1}`}
            className="w-2/5 md:w-1/4 lg:w-1/5 rounded-lg"
          />
        ))}
      </div>

      <div className="h-20"></div>
      
    </motion.div>
  );
}
