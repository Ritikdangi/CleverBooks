// src/Navbar.js
import React, { useState } from 'react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="flex justify-between items-center p-4 bg-gray-900">
      <div className="flex items-center">
        <img src="/logo.png" alt="Crest Logo" className="h-10" />
      </div>
      <ul className="hidden md:flex space-x-8 text-white">
        {['Product', 'Pricing', 'Industry', 'Customer Stories', 'About', 'Blog'].map((item) => (
          <li key={item}>
            <a href="#" className="hover:text-gray-300 transition duration-300 ease-in-out transform hover:scale-105">
              {item}
            </a>
          </li>
        ))}
      </ul>
      <div className="hidden md:flex items-center space-x-4">
        <a href="#" className="text-white hover:text-gray-300 transition duration-300 ease-in-out transform hover:scale-105">Login</a>
        <a href="#" className="bg-gradient-to-r from-pink-500 to-purple-500 text-white py-2 px-4 rounded-full font-bold transition duration-300 ease-in-out transform hover:scale-105">Talk to Us</a>
      </div>
      <div className="md:hidden">
        <button onClick={toggleMenu} className="text-white focus:outline-none">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
          </svg>
        </button>
      </div>
      {isOpen && (
        <div className="md:hidden flex flex-col items-center bg-gray-900 text-white space-y-4 py-4 absolute top-16 left-0 right-0 z-10">
          {['Product', 'Pricing', 'Industry', 'Customer Stories', 'About', 'Blog', 'Login'].map((item) => (
            <a key={item} href="#" className="hover:text-gray-300 transition duration-300 ease-in-out transform hover:scale-105">
              {item}
            </a>
          ))}
          <a href="#" className="bg-gradient-to-r from-pink-500 to-purple-500 text-white py-2 px-4 rounded-full font-bold transition duration-300 ease-in-out transform hover:scale-105">Talk to Us</a>
        </div>
      )}



      
    </nav>
    
  );
};

export default Navbar;
