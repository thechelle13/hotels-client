import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./forms.css";


export const HotelForm = ({token, setToken}) => {

    
    let navigate = useNavigate();

      return (
        <main className="form-parent">
          <form className="form-and-header p-4 bg-gray-100 rounded shadow-md">
            <div className="h1-div mb-4">
              <h1 className="text-2xl font-bold">Hotel Search Form</h1>
            </div>
            


               
            
         
            <div className="button-div mt-4">
              <button className="button bg-blue-500 text-white" >
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
      
}