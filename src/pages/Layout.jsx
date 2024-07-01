import React from "react";
import Header from "../components/Header";
import { Outlet } from "react-router-dom";
import Footer from "../components/Footer";
import { motion } from "framer-motion";
import ScrollUp from "../components/ScrollUp";

export default function Layout() {
  const initialColor = "#227B5D"; // Initial RGB value
  const intermediaryColor = "#000000"; // Intermediary color value (replace XXXXXX with the appropriate value)
  const targetColor = "#227B5D";
  return (
    <>
    <motion.div
    initial={{ opacity: 0, backgroundColor: initialColor }}
    animate={{ opacity: 1, backgroundColor: [intermediaryColor, targetColor] }}
    exit={{ opacity: 0 }}
    > 
      <Header />
      <Outlet />
      <Footer />
      
    </motion.div>
    </>
  );
}
