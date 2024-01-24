import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./forms.css";


export const HotelForm = ({token, setToken}) => {
  const [userInput, setUserInput] = useState({
    arrivalDate: '2024-01-24',
    departureDate: '2024-01-25',
    roomQty: '1',
    guestQty: '1',
    priceRange: '1000',
    bbox: '34.982972,36.678118,-90.310298,-81.6469'
  });

  const navigate = useNavigate();

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUserInput((prevInput) => ({
      ...prevInput,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your logic for handling the form submission using userInput
  };

  return (
    <main className="form-parent">
      <form
        className="form-and-header p-4 bg-gray-100 rounded shadow-md"
        onSubmit={handleSubmit}
      >
        <div className="h1-div mb-4">
          <h1 className="text-2xl font-bold">Hotel Search Form</h1>
        </div>

        <div className="input-fields mt-4 grid grid-cols-2 gap-4">
  <div>
    <label htmlFor="arrivalDate" className="block text-gray-700">
      Arrival Date:
    </label>
    <input
      type="date"
      id="arrivalDate"
      name="arrivalDate"
      value={userInput.arrivalDate}
      onChange={handleInputChange}
      className="form-input"
    />
  </div>

  <div>
    <label htmlFor="departureDate" className="block text-gray-700">
      Departure Date:
    </label>
    <input
      type="date"
      id="departureDate"
      name="departureDate"
      value={userInput.departureDate}
      onChange={handleInputChange}
      className="form-input"
    />
  </div>

  <div>
    <label htmlFor="roomQty" className="block text-gray-700">
      Room Quantity:
    </label>
    <input
      type="number"
      id="roomQty"
      name="roomQty"
      value={userInput.roomQty}
      onChange={handleInputChange}
      className="form-input"
    />
  </div>

  <div>
    <label htmlFor="guestQty" className="block text-gray-700">
      Guest Quantity:
    </label>
    <input
      type="number"
      id="guestQty"
      name="guestQty"
      value={userInput.guestQty}
      onChange={handleInputChange}
      className="form-input"
    />
  </div>

  <div>
    <label htmlFor="priceRange" className="block text-gray-700">
      Price Range (Max $2000):
    </label>
    <input
      type="range"
      id="priceRange"
      name="priceRange"
      min="0"
      max="2000"
      value={userInput.priceRange}
      onChange={handleInputChange}
      className="form-input"
    />
    <span className="text-gray-700 ml-2">
      {userInput.priceRange} USD
    </span>
  </div>
</div>
        

        <div className="button-div mt-4">
          <button className="button bg-blue-500 text-white" type="submit">
            Search for Hotel
          </button>
          <button
            className="button bg-gray-500 text-white ml-2"
            onClick={() => navigate(-1)}
          >
            Cancel
          </button>
        </div>
      </form>
    </main>
  );
};