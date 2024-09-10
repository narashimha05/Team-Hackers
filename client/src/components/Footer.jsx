import React from "react";
import { FaInstagramSquare } from "react-icons/fa";
import { BsTwitterX } from "react-icons/bs";
import { FaLinkedin } from "react-icons/fa";
import { VscGithubInverted } from "react-icons/vsc";

const Footer = () => {
  return (
    <div className=" bg-blue-950 md:text-lg text-sm px-2 md:text-md text-gray-300 md:px-32 py-10 md:flex grid " id='contact'>
      <div className=" justify-center items-center text-center ">
        <p className="">© 2024. All rights reserved.</p>
        <p>This Website is Made by Team Hackers.</p>
      </div>
      <div className="flex md:ml-auto pt-4 md:text-2xl text-lg gap-3 md:gap-5  hover:cursor-pointer justify-center items-center text-center  ">
        <a href="https://www.instagram.com/sanchita_priyadarshinee?igsh=d2o2c2NicmJqcHYz" > <FaInstagramSquare /></a>
        <a href="https://x.com/narashimha05?t=1TfedC82MLJ0EypAjd6XKA&s=08"><BsTwitterX /></a> 
        <a href="https://www.linkedin.com/in/payal-das-8557b128a/"><FaLinkedin/></a>
        <a href="https://github.com/narashimha05/Hackers"><VscGithubInverted /></a>
      </div>
    </div>
  );
};

export default Footer;