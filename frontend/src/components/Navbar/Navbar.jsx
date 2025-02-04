import React, { useState } from 'react';
import './Navbar.css'; // Import the custom CSS file

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="bg-white shadow-md">
      <nav className="flex justify-between items-center w-[92%] mx-auto py-4">
        <div>
          <img
            className="w-24 cursor-pointer logo"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTbO3gXVi3vbV_ZmK8vxZgxYkXz1py13neTlQ&s"
            alt="Logo"
          />
        </div>
        <div
          className={`nav-links duration-500 md:static absolute bg-white md:min-h-fit min-h-[60vh] left-0 top-${isMenuOpen ? '0' : '-100%' } md:w-auto w-full flex items-center px-5`}
        >
          <ul className="flex md:flex-row flex-col md:items-center md:gap-[4vw] gap-8">
            <li>
              <a className="hover:text-blue-500 font-semibold" href="#">Home</a>
            </li>
            <li>
              <a className="hover:text-blue-500 font-semibold" href="#">Prediction</a>
            </li>
            <li>
              <a className="hover:text-blue-500 font-semibold" href="#">Community</a>
            </li>
            <li>
              <a className="hover:text-blue-500 font-semibold" href="#">Developers</a>
            </li>
            <li>
              <a className="hover:text-blue-500 font-semibold" href="#">Contact Us</a>
            </li>
          </ul>
        </div>
        <div className="flex items-center gap-6">
          <button className="bg-[#a6c1ee] text-white px-5 py-2 rounded-full button-hover">
            Login/Signup
          </button>
          <ion-icon
            onClick={toggleMenu}
            name={isMenuOpen ? "close" : "menu"}
            className="text-3xl cursor-pointer md:hidden"
          ></ion-icon>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;