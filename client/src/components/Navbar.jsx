"use client";
import React, { useState } from "react";
import { FiMenu } from "react-icons/fi";
import { ImCross } from "react-icons/im";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div id="home">
      <nav className="font-poppins">
        <div className="sm:block md:hidden ">
          {!isOpen ? (
            <button
              onClick={() => setIsOpen(true)}
              className="flex px-3 mx-2 py-2 border rounded  text-black border-gray-400 "
            >
              <FiMenu />
            </button>
          ) : (
            <button
              onClick={() => setIsOpen(false)}
              className="flex px-3 mx-2 py-2 border rounded text-red-600 border-red-500"
            >
              <ImCross />
            </button>
          )}

          {isOpen && (
            <ul className=" mt-5 md:hidden bg-gray-200 text-blue-950 grid grid-rows-4 pt-10 text-center font-poppins">
              <li className=" mb-10">
                <a
                  className="p-4 rounded-2xl hover:font-bold font-medium "
                  href="#home"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  className="p-4 rounded-2xl hover:font-bold font-medium"
                  href="#about"
                >
                  About
                </a>
              </li>
              <li>
                <a
                  className="p-4 rounded-2xl hover:font-bold font-medium"
                  href="#services"
                >
                  Services
                </a>
              </li>
              <li>
                <a
                  className="p-4 rounded-2xl hover:font-bold font-medium"
                  href="#contact"
                >
                  Contact
                </a>
              </li>
            </ul>
          )}
        </div>

        <ul className="hidden md:flex gap-16 bg-gray-200 justify-end text-center p-5 text-blue-950">
  <li>
    <a
      className="p-4 rounded-2xl hover:font-bold font-medium font-poppins "
      href="#home"
    >
      Home
    </a>
  </li>
  <li>
    <a
      className="p-4 rounded-2xl hover:font-bold font-medium font-poppins"
      href="#about"
    >
      About
    </a>
  </li>
  <li>
    <a
      className="p-4 rounded-2xl hover:font-bold font-medium font-poppins"
      href="#services"
    >
      Services
    </a>
  </li>
  <li>
    <a
      className="p-4 rounded-2xl hover:font-bold font-medium font-poppins "
      href="#contact"
    >
      Contact
    </a>
  </li>
</ul>

      </nav>
    </div>
  );
};

export default Navbar;