import { useEffect, useState } from "react";
import { getHotelUser } from "../services/hotelUsers";
import { useNavigate } from "react-router-dom";

export const Home = ({token, setToken}) => {
  
const [hotelUser, setHotelUser] = useState({user: {}});

let navigate = useNavigate();

const getAndSetHotelUser = () => {
  getHotelUser().then((hotelUser) => {
    setHotelUser(hotelUser);
  });
};

useEffect(() => {
  getAndSetHotelUser();
}, []); 

const handleFindHotelClick = () => {
    // Redirect to the hotel form
    navigate("/hotel-search");
  };

  return (
    <main className="flex flex-col items-center h-screen bg-gray-100">
  <div className="text-center my-8">
    <h1 className="text-5xl font-semibold mb-4 text-blue-500">Welcome to Hotels</h1>
  
    
    <div className="user-info-container bg-gray-300 p-6 rounded-md shadow-md">
    {hotelUser.user ? (
          <h2 className="text-xl font-semibold mb-2 text-blue-800">
            {hotelUser.user.first_name} {hotelUser.user.last_name}
          </h2>
        ) : (
          <p>Loading...</p>
        )}

      <button className="bg-blue-500 text-white px-4 py-2 rounded-md"
              onClick={() => navigate(`/edit-user/${hotelUser.user.id}`)}
      >Edit Profile</button>

            
    </div>
<div className="user-info-container bg-gray-300 p-6 rounded-md shadow-md mt-4">
    <button
            className="bg-green-500 text-white px-4 py-2 rounded-md"
            onClick={handleFindHotelClick}
          >
            Find Hotel
          </button>
          </div>
  </div>
</main>

  );
}