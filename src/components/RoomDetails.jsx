import React, { useEffect, useState } from "react";
import { useParams, Link, useNavigate } from "react-router-dom"; // Add useNavigate
import API_URL from '../config';

export default function RoomDetails() {
  const [roomDetails, setRoomDetails] = useState(null);
  const [selectedImage, setSelectedImage] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [freeRooms, setFreeRooms] = useState([]);
  const { roomId } = useParams();
  const navigate = useNavigate(); // Initialize navigate

  useEffect(() => {
    fetch(`${API_URL}/rooms`)
      .then((response) => response.json())
      .then((data) => {
        const freeRooms = data.filter((room) => room.status);
        setFreeRooms(freeRooms);
        const initialRoomIndex = freeRooms.findIndex(room => room.id === Number(roomId));
        setCurrentIndex(initialRoomIndex !== -1 ? initialRoomIndex : 0);
      })
      .catch((error) => console.error("Error fetching rooms:", error));

    fetch(`${API_URL}/rooms/${roomId}/`)
      .then((response) => response.json())
      .then((data) => {
        if(data.images[0].url){
          setSelectedImage(data.images[0].url);
        } else {
          setSelectedImage("error");
        }
        setRoomDetails(data);
      })
      .catch((error) => console.error("Error fetching room details:", error));
  }, [roomId]);

  const handleThumbnailClick = (imageUrl) => {
    setSelectedImage(imageUrl);
  };

  const handleNext = () => {
    const nextIndex = (currentIndex + 1) % freeRooms.length;
    setCurrentIndex(nextIndex);
    const nextRoomId = freeRooms[nextIndex].id;
    fetchRoomDetails(nextRoomId);
  };

  const handleBack = () => {
    const prevIndex = (currentIndex - 1 + freeRooms.length) % freeRooms.length;
    setCurrentIndex(prevIndex);
    const prevRoomId = freeRooms[prevIndex].id;
    fetchRoomDetails(prevRoomId);
  };

  const fetchRoomDetails = (roomId) => {
    fetch(`${API_URL}/rooms/${roomId}/`)
      .then((response) => response.json())
      .then((data) => {
        if(data.images[0].url){
          setSelectedImage(data.images[0].url);
        } else {
          setSelectedImage("error");
        }
        setRoomDetails(data);
      })
      .catch((error) => console.error("Error fetching room details:", error));
  };

  if (!roomDetails) {
    return <div>Loading...</div>;
  }

  return (
    <div className="bg-white px-6 md:px-16 pb-5">
      <div className="text-center">
        <h2 className="text-mwvane text-2xl font-bold pt-12 md:pt-24">ოთახის დეტალები</h2>
        <p className="text-[#2D3648] mt-8 md:mt-14 text-center text-lg md:text-xl font-light">
          {roomDetails.description}
        </p>
      </div>
      <div className="flex flex-col md:flex-row mt-8">
        <div className="md:w-1/2 relative">
          <div className="flex justify-between absolute top-0 left-0 right-0 p-4">
            <Link
              to="/rooms"
              className="bg-gray-800 text-white py-2 px-4 rounded-md hover:bg-gray-900 transition duration-300"
            >
              უკან დაბრუნება
            </Link>
          </div>
          <div className="relative w-full h-64 md:h-auto">
            <img
              src={selectedImage}
              className="w-full h-full object-cover"
              alt="Room"
            />
          </div>
          <div className="flex justify-center mt-4 space-x-2">
            {roomDetails.images.map((image, index) => (
              <img
                key={index}
                src={image.url}
                className={`w-16 h-16 object-cover border-2 border-gray-400 rounded-lg cursor-pointer hover:border-white ${
                  selectedImage === image.url ? 'border-gray-400' : ''
                }`}
                alt={`Room ${index}`}
                onClick={() => handleThumbnailClick(image.url)}
              />
            ))}
          </div>
        </div>
        <div className="md:w-1/2 md:pl-8 mt-6 md:mt-0">
          <p className="text-base text-black">აღწერა</p>
          <div className="border border-gray-300 rounded-xl p-4">
            <p className="text-lg text-gray-500 font-normal ">{roomDetails.description}</p>
          </div>
          <p className="text-base text-black mt-5 mb-2">სტატუსი</p>
          <div className="border border-gray-300 rounded-xl p-4">
            <p className="text-lg text-gray-500 font-normal ">{roomDetails.status ? "თავისუფალია" : "დაკავაებულია"}</p>
          </div>
          <button
            onClick={() => navigate(`/reservation?roomId=${roomId}`)}
            className="bg-mwvane text-white py-2 px-4 rounded-md hover:bg-blue-600 transition duration-300 mt-4"
          >
            დაჯავშნე ეს ოთახი
          </button>
        </div>
      </div>
      <div className="flex justify-center gap-4 mt-6">
        <button
          onClick={handleBack}
          className="bg-gray-800 text-white py-2 px-4 rounded-md hover:bg-gray-900 transition duration-300"
          disabled={freeRooms.length <= 1}
        >
          უკან
        </button>
        <button
          onClick={handleNext}
          className="bg-mwvane text-white py-2 px-4 rounded-md hover:bg-blue-600 transition duration-300"
          disabled={freeRooms.length <= 1}
        >
          შემდეგი
        </button>
      </div>
    </div>
  );
}
