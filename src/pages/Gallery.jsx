import React from "react";
import { motion } from "framer-motion";

export default function Gallery() {
  // Define arrays of photo URLs for each section
  const externalPhotos = [
    "https://images.unsplash.com/uploads/14132599511242aefb264/722944b0?q=80&w=2972&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1416431168657-a6c4184348ab?q=80&w=2970&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1600298882525-1ac025c98b68?q=80&w=2970&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1600298881981-7b83f032003b?q=80&w=2970&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  ];

  const interiorPhotos = [
    "https://images.unsplash.com/photo-1509644851169-2acc08aa25b5?q=80&w=3096&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1449247613801-ab06418e2861?q=80&w=2971&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1679939153963-fd105167b4c3?q=80&w=2970&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1556228453-efd6c1ff04f6?q=80&w=2970&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  ];

  const eventPhotos = [
    "https://images.unsplash.com/photo-1491438590914-bc09fcaaf77a?q=80&w=2970&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1516600164266-f3b8166ae679?q=80&w=2970&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1519671282429-b44660ead0a7?q=80&w=2970&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1621112904887-419379ce6824?q=80&w=2972&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  ];

  return (
    <motion.div
      className="bg-foni p-10  "
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold mb-8 text-center text-mwvane">
          გალერია
        </h1>
        <p className="text-lg mb-8 text-neutralText text-center">
          შევაბიჯოთ ვიზუალური ბრწყინვალების სამყაროში, როდესაც შეისწავლით
          გალერეას, რომელიც ასახავს ჩვენი სასტუმროს მომხიბვლელ გარემოს. თქვენ
          შეგხვდებათ სურათების გალერეა, რომელიც აღწერს ჩვენი მშვენიერი ადგილის
          არსს.
        </p>

        {/* External views section */}
        <h2 className="text-2xl font-semibold mb-4">გარე ხედი</h2>
        <div className="border-b-2 border-[#1A202C] mb-10"></div>
        <div className="overflow-x-auto flex no-scrollbar scrollbar">
          {externalPhotos.map((photo, index) => (
            <img
              key={index}
              src={photo}
              alt={`External Photo ${index + 1}`}
              className="w-1/4 rounded-lg mr-4"
            />
          ))}
        </div>

        {/* Interior views section */}
        <h2 className="text-2xl font-semibold mt-8 mb-4">შიდა ხედები</h2>
        <div className="border-b-2 border-[#1A202C] mb-10"></div>
        <div className="overflow-x-auto flex scrollbar no-scrollbar">
          {interiorPhotos.map((photo, index) => (
            <img
              key={index}
              src={photo}
              alt={`Interior Photo ${index + 1}`}
              className="w-1/4 rounded-lg mr-4"
            />
          ))}
        </div>

        {/* Events and activities section */}
        <h2 className="text-2xl font-semibold mt-8 mb-4">
          ღონისძიებები და აქტივობები
        </h2>
        <div className="border-b-2 border-[#1A202C] mb-10"></div>
        <div className="overflow-x-auto flex scrollbar no-scrollbar">
          {eventPhotos.map((photo, index) => (
            <img
              key={index}
              src={photo}
              alt={`Event Photo ${index + 1}`}
              className="w-1/4 rounded-lg mr-4"
            />
          ))}
        </div>
      </div>
    </motion.div>
  );
}
