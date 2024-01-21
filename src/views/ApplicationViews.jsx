import { Route, Routes } from "react-router-dom"
import { Login } from "../components/auth/Login";
import { Register } from "../components/auth/Register";
import { Authorized } from "./Authorized";
import { Home } from "../pages/Home";
import { MyHotels } from "../pages/MyHotels";
import { EditUserForm } from "../components/forms/EditUserForm"
import { HotelForm } from "../components/forms/HotelForm";

export const ApplicationViews = ({ token, setToken }) => {
  return (
    <> 
      <Routes>
        <Route path="/login" element={<Login setToken={setToken} />} />
        <Route path="/register" element={<Register setToken={setToken} />} />
        <Route element={<Authorized token={token} />}>
          {/* Add Routes here */}
          <Route path="/" element={<Home token={token} setToken={setToken} />} />

                
          <Route
            path="/hotel-search"
            element={<HotelForm token={token} setToken={setToken} />}   />
          <Route
            path="/myHotels"
            element={<MyHotels token={token} setToken={setToken} />}    />

          
        </Route>
      </Routes>
    </>
  );
};