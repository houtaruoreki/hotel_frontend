import React from "react";
import Layout from "../pages/Layout";
import Home from "../pages/Home";
import AboutUs from "../pages/AboutUs";
import Reservation from "../pages/Reservation";
import Rooms from "../pages/Rooms";
import Service from "../pages/Service";
import Gallery from "../pages/Gallery";
import ContactUs from "../pages/ContactUs";
import { useLocation, Routes, Route } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import RoomDetails from "./RoomDetails";
import Login from "../pages/Login";
import Register from "../pages/Register"

export default function AnimatedRoutes() {
  const location = useLocation();
  return (
    <AnimatePresence>
      <Routes location={location} key={location.pathname}>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/" element={<Layout />}>
          <Route path="" element={<Home />} />
          <Route path="/AboutUs" element={<AboutUs />} />
          <Route path="/Reservation" element={<Reservation />} />
          <Route path="/Rooms" element={<Rooms />} />
          <Route path="/Rooms/:roomId" element={<RoomDetails />} />
          <Route path="/Service" element={<Service />} />
          <Route path="/Gallery" element={<Gallery />} />
          <Route path="/ContactUs" element={<ContactUs />} />
        </Route>
      </Routes>
    </AnimatePresence>
  );
}
