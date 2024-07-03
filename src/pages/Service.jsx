import React from "react";
import { motion } from "framer-motion";
import sunIcon from "/Images/sun.png";
import homeIcon from "/Images/home.png";
import airIcon from "/Images/air.png";
import { useTranslation } from "react-i18next";


export default function Service() {

  const {t} = useTranslation();

  const interiorPhotos = [
    'https://images.unsplash.com/photo-1533089860892-a7c6f0a88666?q=80&w=2970&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    'https://images.unsplash.com/photo-1525184782196-8e2ded604bf7?q=80&w=2874&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    'https://images.unsplash.com/photo-1525473233136-080cdd8b7cb2?q=80&w=2926&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    'https://images.unsplash.com/photo-1528607929212-2636ec44253e?q=80&w=2874&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    "https://images.unsplash.com/photo-1518290943012-2c2bec0e54d2?q=80&w=2970&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  ];

  const eventPhotos = [
    'https://images.unsplash.com/photo-1529262123100-898cb9e0d85b?q=80&w=2970&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    'https://images.unsplash.com/photo-1503220178855-e31ec372b8ad?q=80&w=2449&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    'https://plus.unsplash.com/premium_photo-1663840277579-ff6147963ce7?q=80&w=2970&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    'https://images.unsplash.com/photo-1619592982310-7b7d51e4207f?q=80&w=2972&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    "https://images.unsplash.com/photo-1535567465397-7523840f2ae9?q=80&w=2929&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  ];
  return (
    <motion.div
      className="bg-white text-white p-10"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      {/* Existing content */}
      <div className="flex justify-center items-center flex-col mb-8">
        <h2 className="text-2xl font-bold mb-4 text-mwvane">{t("Services.title")}</h2>
      </div>
      <div className="max-w-7xl mx-auto">
        <div className="items-left gap-4">
          <p className="text-2xl font-semibold mt-8 mb-4 text-[#1A202C]">{t("Services.view")}</p>
          <p className="text-lg font-helvetica hover:font-helvetica text-[#2D3648] mb-8">
            {/* ჩოხატაურის შუაგულში მოთავსებული ჩვენი სასტუმრო სახლი გთავაზობთ
            დაუვიწყარ დასვენებას თვალწარმტაცი ბუნებრივი სილამაზით
            გარშემორტყმული. დასავლეთით, დიდებული მთები მაღლა დგას, მათი
            მწვერვალები მზის ამოსვლისა და მზის ჩასვლის ოქროსფერი ელფერით
            იცვლებიან, თვალწარმტაცი ფონს ხატავს ცისფერ ცას. აღმოსავლეთით,
            აყვავებული სიმწვანე ფარავს პეიზაჟს, დახვეული ბილიკებით, რომლებიც
            გიწვევთ ბუნების საოცრებების შესასწავლად. */}
            {t("Services.view-text")}
          </p>
        </div>
       <div style={{display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap:"10px"}}>
          <img
              src="https://images.unsplash.com/photo-1470043201067-764120126eb4?q=80&w=2970&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="Service Image"
              className="mx-auto my-4 w-1/2"
            />
            <img
              src="https://images.unsplash.com/photo-1584900935944-961e0d298694?q=80&w=2970&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="Service Image"
              className="mx-auto my-4 w-1/2"
            />
       </div>

       <h2 className="text-2xl font-semibold mt-8 mb-4 text-[#1A202C]">{t("Services.dinner")}</h2>
      <p className="text-lg font-helvetica hover:font-helvetica text-[#2D3648] mb-8">
        {/* როდესაც თქვენ დატკბებით ჩვენს სასტუმრო სახლში შემოთავაზებულ კულინარიულ
        სიამოვნებით, მოემზადეთ არა მხოლოდ დახვეწილი გემოებით, არამედ
        თვალწარმტაცი ხედებით, რომლებიც ამაღლებს თქვენს სასადილო გამოცდილებას
        ახალ სიმაღლეებზე. */}

        {t("Services.dinner-text")}
      </p>
      <div className="overflow-x-auto flex scrollbar no-scrollbar">
        {interiorPhotos.map((photo, index) => (
          <img
            key={index}
            src={photo}
            alt={`Interior Photo ${index + 1}`}
            className="w-1/5 rounded-lg mr-1"
          />
        ))}
      </div>

      <h2 className="text-2xl font-semibold mt-8 mb-4 text-[#1A202C]">{t("Services.cooking")}</h2>
      <p className="text-lg font-helvetica hover:font-helvetica text-[#2D3648] mb-8">
        {/* ჩაეფლო დასვენებისა და დასვენების სამყაროში ჩვენს საოჯახო სასტუმროში,
        სადაც ჩვენ გთავაზობთ სათამაშო სივრცეს, რათა უზრუნველყოს თქვენი ყოფნის
        ყოველი მომენტი სავსე გართობითა და ხალისით. სამაგიდო თამაშებიდან
        დაწყებული გარე აქტივობებით დამთავრებული, ყველასთვის არის რაღაც
        სიამოვნება */}
        {t("Services.cooking-text")}
      </p>
      <div className="overflow-x-auto flex scrollbar no-scrollbar">
        {eventPhotos.map((photo, index) => (
          <img
            key={index}
            src={photo}
            alt={`Event Photo ${index + 1}`}
            className="w-1/5 rounded-lg mr-1"
          />
        ))}
      </div>
      
      </div>
      <div className="flex justify-around items-center mt-20">
          <div className="items-center flex flex-col justify-center gap-9 mr-8 ">
            <img src={sunIcon} alt="Sun Icon" className="w-10 h-10 mr-2 invert" />
            <p className="text-xl font-bold text-center text-[#1A202C] uppercase">
              ნაბეღლავის წყლების <br /> დათვალიერება
            </p>
            <p className="text-center text-base font-medium text-[#2D3648]  w-[266px]">
              ისიამოვნეთ ჩვენი უფასო WiFi სერვისით, რაც საშუალებას მოგცემთ იყოთ
              ხელმისაწვდომი
            </p>
          </div>
          <div className="items-center flex flex-col justify-center gap-9 mr-8 ">
            <img src={homeIcon} alt="Home Icon" className="w-10 h-10 mr-2 invert" />
            <p className="text-xl font-bold text-center text-[#1A202C] uppercase">
              ნოდარ დუმბაძის <br /> სახლ-მუზეუმის ტური
            </p>
            <p className="text-center text-base font-medium w-[266px] text-[#2D3648] ">
              ადმინისტრაცია გაგიწევთ დახმარებასა და მხარდაჭერას, როცა
              დაგჭირდებათ
            </p>
          </div>
          <div className="items-center flex flex-col justify-center gap-9 mr-8 ">
            <img src={airIcon} alt="Air Icon" className="w-10 h-10 mr-2 invert " />
            <p className="text-xl font-bold text-center text-[#1A202C] uppercase">
              ლაშქრობა
            </p>
            <p className="text-center text-base font-medium  w-[266px] text-[#2D3648] ">
              მიიღეთ დამატებითი სერვისები, რომელიც შექმნილია თქვენი ყველა
              საჭიროების დასაკმაყოფილებლად
            </p>
          </div>
        </div>
      
    </motion.div>
  );
}
