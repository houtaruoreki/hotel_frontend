import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import phoneIcon from "/Images/icon-phone.png";
import mailIcon from "/Images/icon-mail.png";
import mapIcon from "/Images/icon-map-pin.png";
import API_URL from '../config';
import { useTranslation } from "react-i18next";

const FeedbackModal = ({ isOpen, onClose }) => {
  const { t } = useTranslation(); // Moved here
  if (!isOpen) return null;
  
  return (
    <div className="fixed inset-0 flex items-center justify-center z-50 bg-gray-900 bg-opacity-50">
      <div className="bg-white rounded-lg p-8 max-w-md w-full mx-auto">
        <h2 className="text-xl font-bold mb-4 text-green-600">{t("Modal.submit")}</h2>
        <p className="text-gray-700 mb-4">{t("Modal.feedback")}</p>
        <button
          onClick={onClose}
          className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-md font-semibold"
        >
          Close
        </button>
      </div>
    </div>
  );
};

const ContactUs = () => {
  const { t } = useTranslation(); // Ensure this is correctly placed
  const [formData, setFormData] = useState({
    fullname: "",
    email: "",
    satisfied: "",
    message: "",
  });

  const [contactInfo, setContactInfo] = useState({
    mobile: "",
    email: ""
  });

  const [showModal, setShowModal] = useState(false); // State for modal visibility
  const [selectedImage, setSelectedImage] = useState(null); // State for selected image in popup

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

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Send the form data to the server
    fetch(`${API_URL}/message/`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    })
      .then(response => {
        if (!response.ok) {
          return response.json().then(err => {
            throw new Error(`Error ${response.status}: ${err.message}`);
          });
        }
        return response.json();
      })
      .then(data => {
        console.log("Success:", data);
        setShowModal(true); // Show modal on successful submission
        setFormData({
          fullname: "",
          email: "",
          satisfied: "",
          message: "",
        });
      })
      .catch(error => console.error('Error sending form data:', error));
  };

  const closeModal = () => {
    setShowModal(false);
  };

  const handleImageClick = (imageSrc) => {
    setSelectedImage(imageSrc);
  };

  const handleCloseImage = () => {
    setSelectedImage(null);
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <h2 className="text-4xl flex justify-center bg-foni text-black p-16">
        {t("Contact.contact")}
      </h2>

      <div className="flex flex-col md:flex-row justify-around align-middle bg-foni text-black px-16">
        <div className="max-w-lg mb-8 md:mb-0 md:mr-8">
          <h2 className="text-4xl text-black mb-4">{t("Contact.message")}</h2>
          <div className="">
            <div className="flex gap-2 items-center"> 
              <img src={phoneIcon} alt="Phone" className="w-5 h-5 invert" />
              <p className="text-sm mb-4">{contactInfo.mobile}</p>
            </div>
            <div className="flex gap-2 items-center">
              <img src={mailIcon} alt="Mail" className="w-5 h-5" />
              <p className="text-sm mb-4">{contactInfo.email}</p>
            </div>
            <div className="flex gap-2 items-center">
              <img src={mapIcon} alt="Map" className="w-5 h-5 invert" />
              <p className="text-sm">{t("Contact.address")}</p>
            </div>
          </div>
        </div>
        <div className="max-w-lg">
          <div className="mb-4">
            <label className="block mb-1">{t("Contact.name")}</label>
            <input
              type="text"
              name="fullname"
              placeholder={t("Contact.inname")}
              value={formData.fullname}
              onChange={handleChange}
              className="border border-gray-400 px-4 py-2 rounded-md w-full max-w-lg focus:outline-none focus:border-blue-500 text-black"
            />
          </div>
          <div className="mb-4">
            <label className="block mb-1">{t("Contact.email")}</label>
            <input
              type="email"
              placeholder={t("Contact.inemail")}
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="border border-gray-400 px-4 py-2 rounded-md w-full max-w-lg focus:outline-none focus:border-blue-500 text-black"
            />
          </div>
          <div className="mb-4">
            <label className="block mb-1">{t("Contact.choise.service")}</label>
            <select
              name="satisfied"
              value={formData.satisfied}
              onChange={handleChange}
              className="text-black border border-gray-400 px-4 py-2 rounded-md w-full max-w-lg focus:outline-none focus:border-blue-500"
            >
              <option value="">{t("Contact.choise.default")}</option>
              <option value="კი">{t("Contact.choise.yes")}</option>
              <option value="არა">{t("Contact.choise.no")}</option>
              <option value="ნაწილობრივ">{t("Contact.choise.partially")}</option>
            </select>
          </div>
          <div className="mb-4">
            <label className="block mb-1">{t("Contact.comment")}</label>
            <textarea
              name="message"
              placeholder={t("Contact.incomment")}
              value={formData.message}
              onChange={handleChange}
              rows={4}
              className="text-black border border-gray-400 px-4 py-2 rounded-md w-full max-w-lg focus:outline-none focus:border-blue-500"
            ></textarea>

            <button
              className="bg-green-500 hover:bg-green-600 text-white px-6 py-3 font-bold rounded-md transition duration-300 ease-in-out"
              onClick={handleSubmit}
            >
              {t("Contact.submit")}
            </button>
          </div>
        </div>
      </div>

      <div className="relative">
        <div className="map-container">
          <MapContainer
            center={[41.904026, 42.382502]}
            zoom={13}
            className="w-full xl:w-2/3 xl:mx-auto md:h-96"
            onClick={() =>{
              this.style = {
                
              }
            }}
          >
            <TileLayer
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <Marker position={[41.904026, 42.382502]}>
              <Popup>
                <a
                  href="https://maps.app.goo.gl/1DnFM8DjSS3zD3y58"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <p>{t("Contact.popup")}</p>
                </a>
              </Popup>
            </Marker>
          </MapContainer>
        </div>
      </div>

      <FeedbackModal isOpen={showModal} onClose={closeModal} />
    </motion.div>
  );
};

export default ContactUs;
