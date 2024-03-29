import { useRef } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Navbar.css";

import { HomeIcon } from '@heroicons/react/solid';


export const NavBar = ({ token, setToken }) => {
  const navigate = useNavigate();
  const navbar = useRef();
  const hamburger = useRef();

  const showMobileNavbar = () => {
    hamburger.current.classList.toggle("is-active");
    navbar.current.classList.toggle("is-active");
  };

  return  (
    <nav className="navbar bg-gray-200 mb-3 rounded-md w-full" role="navigation" aria-label="main navigation">
      <div className="navbar-brand">
        {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
        <a
          role="button"
          className="navbar-burger"
          aria-label="menu"
          aria-expanded="false"
          data-target="navbarBasicExample"
          onClick={showMobileNavbar}
          ref={hamburger}
        >
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </a>
      </div>

      <div className="navbar-menu w-full" ref={navbar}>
        <div className="navbar-start">
          {token ? (
            <>
              <Link to="/" className="navbar-item text-blue-500">
             
                <HomeIcon className="w-8 h-8 mr-2" />
              </Link>

              
              <Link to="/myHotels" className="navbar-item text-blue-500">
         My Hotels
      </Link>
              
             
            </>
          ) : (
            ""
          )}
        </div>

        <div className="navbar-end">
          <div className="navbar-logout">
            <div className="buttons">
              {token ? (
                <button
                  className="button is-outlined text-blue-500"
                  onClick={() => {
                    setToken("");
                    navigate("/login");
                  }}
                >
                  {"LOGOUT"}
                </button>
              ) : (
                <>
                  {/* <Link to="/postLists" className="button is-outlined text-blue-500">
                    Posts
                  </Link> */}
                  <Link to="/register" className="button is-link text-white-500">
                    Register
                  </Link>
                  <Link to="/login" className="button is-outlined text-blue-500">
                    Login
                  </Link>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};