import { useEffect, useState } from "react";
import "./pages.css";


export const MyHotels = ({ setToken, token }) => {
  const [myHotels, setMyHotels] = useState([]);
  const [hotelToDelete, setHotelToDelete] = useState(null);

  const getAndSetMyHotels = async () => {
    try {
      const hotelsArray = await getAllHotels();
      const filteredArray = hotelsArray.filter((hotel) => hotel.is_owner === true);
      const sortedArray = filteredArray.sort((a, b) => {
        return new Date(b.publication_date) - new Date(a.publication_date);
      });
      setMyHotels(sortedArray);
    } catch (error) {
      console.error("Error fetching posts:", error);
    }
  };

  const handleDeleteClick = (hotel) => {
    setHotelToDelete(hotel);
  };

  useEffect(() => {
    if (hotelToDelete) {
      const handleDeleteConfirmation = async () => {
        const confirmDelete = window.confirm(
          "Are you sure you want to delete this hotel?"
        );
        if (confirmDelete) {
          try {
            await deleteHotel(hotelToDelete.id);
            // Update the state immediately after successful deletion
            setMyHotels((prevHotels) =>
              prevHotels.filter((hotel) => hotel.id !== hotelToDelete.id)
            );
          } catch (error) {
            console.error("Error deleting hotel:", error);
          } finally {
            setHotelToDelete(null);
          }
        }
      };

      handleDeleteConfirmation();
    }
  }, [hotelToDelete]);

  useEffect(() => {
    getAndSetMyHotels();
  }, [hotelToDelete]);

  return (
    <div className="container mx-auto mt-8">
      <h1 className="text-3xl font-semibold mb-4 text-center">My Hotels</h1>
  
      <div>
        {myHotels && myHotels.length ? (
          myHotels.map((hotel) => (
            <div className="bg-gray-100 rounded-md p-4 mb-4" key={hotel.id}>
              <div className="flex justify-between items-center mb-2">
                <div className="text-xl font-semibold">Hotel: {hotel.id}</div>
              </div>
              <div className="card-body">
       
              </div>
              {hotel.is_owner && (
                <div className="manage-skills-div">
                  <button
                    className="bg-red-500 text-white px-4 py-2 rounded-md"
                    onClick={() => handleDeleteClick(hotel)}
                  >
                    Delete Hotel
                  </button>
                </div>
              )}
            </div>
          ))
        ) : (
          <p className="text-xl font-semibold mb-4 text-center">No hotels found.</p>
        )}
      </div>
    </div>
  );
}  