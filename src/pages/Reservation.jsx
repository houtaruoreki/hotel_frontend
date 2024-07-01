import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import PhoneInput from "react-phone-number-input";
import 'react-phone-number-input/style.css';
import { useLocation } from "react-router-dom";
import { useTranslation } from "react-i18next";

export default function Reservation() {
  const [entryDate, setEntryDate] = useState("");
  const [outDate, setOutDate] = useState("");
  const [selectedRoomId, setSelectedRoomId] = useState(null); // State to store selected room ID
  const {t} = useTranslation();
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const roomIdFromQuery = queryParams.get("roomId");

  useEffect(() => {
    if (roomIdFromQuery) {
      setSelectedRoomId(roomIdFromQuery);
    }
  }, [roomIdFromQuery]);




  const roomPhotos = [
    "https://images.unsplash.com/photo-1565629196891-2ddb37c9e9fc?q=80&w=2970&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D1",
    "https://images.unsplash.com/photo-1662672324132-90d55416a840?q=80&w=2970&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1628304502409-4d5dcdd7933d?q=80&w=3000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1623625434462-e5e42318ae49?q=80&w=2971&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  ];

  const handleFocus = (e) => {
    e.target.type = 'datetime-local';
  };

  const handleBlur = (e) => {
    if (!e.target.value) {
      e.target.type = 'text';
    }
  };
  const handlePhoneChange = (value) => {
    // handlePhoneChange function to set entryDate state
    console.log(value);
  };

  return (
    <motion.div className="bg-foni text-[#2D3648]" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
      <div className="mx-[5%] pt-9">
        <div className="mx-[16%]">
          <h2 className="text-2xl flex justify-center mb-4 text-mwvane font-bold">{t("submit")}</h2>
        </div>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          <div className="mb-4">
            <label className="mb-1 block">{t("Reservation.name")}</label>
            <input
              type="text"
              name="name"
              placeholder={t("Reservation.iname")}
              className="border border-gray-400 px-4 py-2 rounded-xl w-full focus:outline-none focus:border-blue-500 text-black"
            />
          </div>
          <div className="mb-4">
            <label className="mb-1 block">{t("Reservation.lastname")}</label>
            <input
              type="text"
              name="surname"
              placeholder={t("Reservation.ilastname")}
              className="border border-gray-400 px-4 py-2 rounded-xl w-full focus:outline-none focus:border-blue-500 text-black"
            />
          </div>
          <div className="mb-4">
            <label className="mb-1 block">{t("Reservation.phone")}</label>
            <PhoneInput
              placeholder={t("Reservation.iphone")}
              className="border border-gray-400 px-4 py-2 rounded-xl w-full focus:outline-none focus:border-blue-500 text-black"
              defaultCountry="GE"
              value={entryDate}
              onChange={handlePhoneChange}
            />
          </div>
          <div className="mb-4">
            <label className="mb-1 block">{t("Reservation.guests")}</label>
            <input
              type="number"
              name="guestNumber"
              min="1"
              max="15"
              placeholder={t("Reservation.iguests")}
              className="border border-gray-400 px-4 py-2 rounded-xl w-full focus:outline-none focus:border-blue-500 text-black"
            />
          </div>
          <div className="mb-4">
            <label className="mb-1 block">{t("Reservation.out")}</label>
            <input
              type="text"
              name="outDate"
              placeholder={t("Reservation.iout")}
              onFocus={handleFocus}
              onBlur={handleBlur}
              value={outDate}
              onChange={(e) => setOutDate(e.target.value)}
              className="border border-gray-400 px-4 py-2 rounded-xl w-full focus:outline-none focus:border-blue-500 text-black"
            />
          </div>
          <div className="mb-4">
            <label className="mb-1 block">{t("Reservation.in")}</label>
            <input
              type="text"
              name="entryDate"
              placeholder={t("Reservation.iin")}
              onFocus={handleFocus}
              onBlur={handleBlur}
              value={entryDate}
              onChange={(e) => setEntryDate(e.target.value)}
              className="border border-gray-400 px-4 py-2 rounded-xl w-full focus:outline-none focus:border-blue-500 text-black"
            />
          </div>
          <div className="mb-4">
        <label className="mb-1 block">{t("Reservation.room")}</label>
        <select
          name="roomType"
          defaultValue={selectedRoomId} // Set default value to the selected room ID
          className="border border-gray-400 px-4 py-2.5 rounded-xl w-full focus:outline-none focus:border-blue-500 text-black"
        >
          <option value="">{t("Reservation.iroom")}</option>
          <option value={selectedRoomId}>Selected Room Type</option>
          {/* Add options for other room types */}
        </select>
      </div>
          <div className="mb-4 col-span-1">
            <label className="mb-1 block">{t("Reservation.comment")}</label>
            <textarea
              name="comment"
              rows={4}
              placeholder={t("Reservation.icomment")}
              className="border border-gray-400 px-4 py-2 rounded-xl w-full focus:outline-none focus:border-blue-500 text-black"
            ></textarea>
          </div>
        </div>

        <div className="mb-4 place-self-center">
          <button className="bg-buttonColor text-buttonText font-bold px-16 py-4 rounded-md hover:bg-green-800 transition duration-300 ease-in-out">
          {t("submit")}
          </button>
        </div>

        <h2 className="text-2xl text-mwvane font-semibold mt-8 mb-4">{t("rooms")}</h2>
        <div className="border-b-2 border-neutralText mb-10"></div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 pb-8">
          {roomPhotos.map((photo, index) => (
            <img
              key={index}
              src={photo}
              alt={`Room Photo ${index + 1}`}
              className="w-full rounded-lg"
            />
          ))}
        </div>
      </div>
    </motion.div>
  );
}
