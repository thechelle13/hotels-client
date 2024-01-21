import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { deleteHotelUser, getHotelUser, editHotelUser } from "../../services/hotelUsers";
import "./forms.css";

export const EditUserForm = () => {
  const { hoteluserId } = useParams();

  const [hotelUser, setHotelUser] = useState({
    user: {
      first_name: "",
      last_name: "",
      email: "",
      username: "",
    },
  });

  const navigate = useNavigate();

  useEffect(() => {
    getHotelUser(hoteluserId).then((hoteluserObj) => {
      setHotelUser(hoteluserObj);
    });
  }, [hoteluserId]);
  
  const updateHotel = (e) => {
    const copy = { ...hotelUser };
    copy.user[e.target.id] = e.target.value;
    setHotelUser(copy);
  };

  const handleCancel = () => {
    navigate("/"); 
  };

  const handleSaveClick = () => {
    // e.preventDefault()

    const updatedHotelUser = {      
  
        first_name: hotelUser.user.first_name,
        last_name: hotelUser.user.last_name,
        email: hotelUser.user.email,
        username: hotelUser.user.username,
    };
    console.log("hoteluserId:", hoteluserId);
    console.log("updatedHotelUser:", updatedHotelUser);

    editHotelUser(parseInt(hoteluserId), updatedHotelUser).then(() => {
      navigate(`/`);
    });
  };

  const handleDeleteClick = () => {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this Profile?"
    );
    if (confirmDelete) {
      deleteHotelUser(hoteluserId).then(() => {
        navigate("/Login");
      });
    }
  };

  return (
    <main className="flex flex-col items-center h-screen bg-gray-100">
  <div className="text-center my-8">
    <h1 className="text-5xl font-semibold mb-4 text-blue-500">Hotel User</h1>

    <fieldset className="user-info-container bg-gray-300 p-6 rounded-md shadow-md">
      <h2 className="text-xl font-semibold mb-2 text-blue-800">
         {hotelUser.user.first_name} {hotelUser.user.last_name}
      </h2>

      <div className="form-field">
        <label className="block font-bold mb-1" htmlFor="first_name">
          First Name:
        </label>
        <textarea
                className="textarea-field border p-2 w-full"
                id="first_name"
                onChange={(e) => updateHotel(e)}
                type="text"
                placeholder=""
                value={hotelUser.user.first_name}
              />
      </div>

      <div className="form-field">
        <label className="block font-bold mb-1" htmlFor="last_name">
          Last Name:
        </label>
        <input
                className="input-field border p-2 w-full"
                id="last_name"
                onChange={(e) => updateHotel(e)}
                type="text"
                placeholder=""
                value={hotelUser.user.last_name}
              />
      </div>

      <div className="form-field">
        <label className="block font-bold mb-1" htmlFor="email">
            Email:
        </label>
        <input
                className="input-field border p-2 w-full"
                id="email"
                onChange={(e) => updateHotel(e)}
                type="email"
                placeholder=""
                value={hotelUser.user.email}
              />
        </div>
       

      <div className="flex justify-center space-x-4">
        <button
          className="bg-blue-500 text-white px-4 py-2 rounded-md"
          onClick={handleSaveClick}
        >
          Save Changes
        </button>
        <button
          className="bg-gray-500 text-white px-4 py-2 rounded-md"
          onClick={() => handleCancel()}
        >
          Cancel
        </button>
      </div>
      
      <button
        className="bg-red-500 text-white px-4 py-2 rounded-md mt-4"
        onClick={() => handleDeleteClick()}
      >
        Delete Profile
      </button>
    </fieldset>
  </div>
</main>
  );
};