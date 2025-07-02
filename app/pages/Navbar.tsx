"use client";
import React, { useState } from "react";
import Image from "next/image";

const Navbar: React.FC = () => {
  const [showDropdown, setShowDropdown] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navbarData = [
    "HOME",
    "ABOUT",
    "SERVICE",
    "TRAINING",
    "CAREER",
    "CONTACT US",
    "BLOG",
  ];

  const serviceDropdown = [
    "Search Engine Optimization",
    "Social Media Marketing",
    "Website Development",
    "Pay Per Click",
  ];

  return (
    <div className="bg-[#1e1e1e] md:bg-[#f8f7f3] text-white md:text-gray-800 min-h-[70px] p-2 w-full">
      <div className="max-w-[1200px] mx-auto px-4 flex flex-col md:flex-row justify-between items-center">
        <div className="flex justify-between items-center w-full md:w-auto">
          <Image
            src="https://orphicsolution.com/images/orphic1logo.png"
            alt="Company Logo"
            width={100}
            height={70}
            className="object-contain"
          />
          <button
            className="md:hidden p-2"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {isMobileMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>

        <ul
          className={`${
            isMobileMenuOpen ? "flex" : "hidden"
          } md:flex flex-col rounded-none md:rounded-md bg-[#1e1e1e] md:bg-[#d8d7d3] px-4 py-4 md:px-2 md:py-2 md:flex-row cursor-pointer gap-6 md:gap-4 items-start md:items-center w-full md:w-auto`}
        >
          {navbarData.map((item) => (
            <li
              key={item}
              className="p-2 relative hover:bg-[#2e2e2e] md:hover:bg-[#f8f7f3] rounded-md duration-300 w-full md:w-auto font-semibold text-left md:text-center text-[#9b9b9b] md:text-current"
              onMouseEnter={() => item === "SERVICE" && setShowDropdown(true)}
              onMouseLeave={() => item === "SERVICE" && setShowDropdown(false)}
            >
              {item}
              {item === "SERVICE" && showDropdown && (
                <ul className="absolute md:top-full top-0 left-0 md:left-0 p-4 text-black sm:w-auto font-semibold bg-white shadow-md rounded-md w-full md:w-[230px] z-10">
                  {serviceDropdown.map((service) => (
                    <li
                      key={service}
                      className="p-2 hover:bg-gray-100 text-sm whitespace-normal"
                    >
                      {service}
                    </li>
                  ))}
                </ul>
              )}
            </li>
          ))}
        </ul>
        <div className="hidden md:flex gap-4">
          <button className="bg-transparent border-2 border-black cursor-pointer font-semibold text-black px-4 py-2 rounded-md hover:bg-black hover:text-white transition duration-300">
            LOGIN
          </button>
          <button className="bg-black cursor-pointer font-semibold text-white px-4 py-2 rounded-md hover:bg-opacity-90 transition duration-300">
            SIGN UP
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
