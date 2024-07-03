import React, { useState, useEffect } from "react";
import { MdMailOutline, MdPhoneInTalk } from "react-icons/md";
import Navigation from "./Navigation";
import API_URL from "../config";
import { useTranslation } from "react-i18next";

export default function Footer() {
  const { i18n } = useTranslation();
  const {t} = useTranslation()
  const footerLinks = [
    { to: "/AboutUs", label: t("Navigation.aboutUs") },
    { to: "/ContactUs", label: t("Navigation.contactUs") },
    // { to: "/FAQ", label: "FAQ" },
  ];

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

  const handlePhoneClick = () => {
    window.location.href = `tel:${contactInfo.mobile}`;
  };



  return (
    <footer className="bg-mwvane text-white py-10">
      <div className="">
        <div className="flex flex-wrap justify-between space-x-8 mx-10 mr-32">
          {/* Contact Info */}
          <div className="">
            <h2 className="text-2xl font-bold mb-4">{t("Footer.contactInfo")}</h2>
            <ul className="list-none">
              <li className="mb-2">
                <MdMailOutline className="inline-block mr-2" />
                <a href={`mailto:${contactInfo.email}`}>{contactInfo.email}</a>
              </li>
              <li className="flex items-center mb-2 cursor-pointer" onClick={handlePhoneClick}>
                <MdPhoneInTalk className="inline-block mr-2"/>
                <span>{contactInfo.mobile}</span>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div className="text-center"> {/* Center aligns all content */}
            <h2 className="text-2xl font-bold mb-4">{t("Footer.services")}</h2>
            <ul className="list-none inline-block text-left"> {/* Inline block to center within parent */}
              <li className="mb-2">{t("Footer.service1")}</li>
              <li className="mb-2">{t("Footer.service2")}</li>
              <li className="mb-2">{t("Footer.service3")}</li>
              {/* Add more services as needed */}
            </ul>
          </div>

          {/* Pages */}
          <div className=""> {/* Added md:pl-8 for padding-left on medium screens and above */}
            <h2 className="text-2xl font-bold mb-4">{t("Footer.pages")}</h2>
            <ul className="list-none">
              {footerLinks.map((link, index) => (
                <li key={index} className="mb-2">
                  <a href={link.to}>{link.label}</a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
      <div className="flex justify-center items-center mt-8">
        <img src="/Images/copyright.png" alt="copyright icon" className="w-5 h-5 mr-2" />
        <p className="text-sm">© 2024. All Rights Reserved.</p>
      </div>
    </footer>
  );
}
