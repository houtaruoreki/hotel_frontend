import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import API_URL from '../config';
import { useTranslation } from "react-i18next";

const RoomsList = ({ sliceCount }) => {
  const [roomsData, setRoomsData] = useState([]);
  const { t } = useTranslation();

  const fetchRoomsData = async () => {
    try {
      const res = await fetch(`${API_URL}/rooms/`, {
        method: 'GET',
        mode: 'cors',
        credentials: 'include',
      });

      if (!res.ok) {
        throw new Error(`Fetch failed with status ${res.status}`);
      }

      let data;
      const contentType = res.headers.get('content-type');
      if (contentType && contentType.includes('application/json')) {
        data = await res.json();
      } else {
        data = await res.text();
      }

      setRoomsData(data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  useEffect(() => {
    fetchRoomsData();
  }, []);

  // Slice the data if sliceCount is provided
  const displayRoomsData = sliceCount ? roomsData.slice(0, sliceCount) : roomsData;

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 px-4 sm:px-8 lg:px-16 py-8">
      {displayRoomsData.map((room) => (
        <div key={room.id} className="flex flex-col items-start p-6 bg-white border border-gray-200 rounded-lg shadow-md transform hover:scale-105 transition-transform duration-300">
          <div className="w-full h-[230px] bg-slate-500 rounded-lg flex justify-center items-center overflow-hidden">
          {room.images.length > 0 && (  // Check if length is greater than 0
        <img
          src={room.images[0].url}
          alt={`Room ${room.number}`}
          className="object-cover w-full h-full transition-transform duration-500 hover:scale-110"
        />
      )}
          </div>
          <div className="mt-4 flex flex-col items-start">
            <p className="text-lg font-semibold mb-2 text-gray-800">
              {room.is_cottage ? `${t("Room.cottage")}` : `${t("Room.room")}`} {room.number}
            </p>
            <p className="text-gray-600 mb-1">{room.description}</p>
            <p className="text-gray-600 mb-1">
              {t("Room.status")}: <span className={room.status ? "text-green-500" : "text-red-500"}>{room.status ? `${t("Room.available")}` : `${t("Room.occupied")}`}</span>
            </p>
            <p className="text-gray-600 mb-1">
              {t("Room.type")}: <span className={room.is_cottage ? "text-blue-500" : "text-emerald-600"}>{room.is_cottage ? `${t("Room.cottage")}` : `${t("Room.room")}`}</span>
            </p>
            <Link to={`/Rooms/${room.id}`}>
              <button className="px-4 py-2 mt-4 text-white font-semibold bg-emerald-600 rounded-md hover:bg-emerald-700 transition duration-300 ease-in-out">
                {t("Room.detail")}
              </button>
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
};

export default RoomsList;
