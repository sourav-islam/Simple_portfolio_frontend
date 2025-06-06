import React from "react";
import logo1 from "../assets/1st_logo.png";
function Navebar() {
  return (
    <nav className="container mx-auto">
      <div className="grid grid-cols-1 mt-5  sm:flex justify-between items-center">
        <img
          src={logo1}
          alt="First_log"
          className="h-16 mx-auto sm:h-20 w-auto"
        />

        <ul className="flex justify-center mt-5  sm:justify-between items-center gap-10">
          <li>
            <a href="#about" className="hover:text-blue-600 hover:border-b-2 hovor: border-sky-400 ">
              About
            </a>
          </li>
          <li>
            <a href="#" className="hover:text-blue-600 hover:border-b-2 hovor: border-sky-400 ">
              Experience
            </a>
          </li>
          <li>
            <a href="#" className="hover:text-blue-600 hover:border-b-2 hovor: border-sky-400 ">
              Projects
            </a>
          </li>
          <li>
            <a href="#" className="hover:text-blue-600 hover:border-b-2 hovor: border-sky-400 ">
              Contact
            </a>
          </li>
        </ul>

        <div className="flex gap-4 mt-5 mx-auto sm:space-x-2">
          <button className="btn">Resume</button>
          <button className="btn">Hire Me</button>
        </div>
      </div>
    </nav>
  );
}

export default Navebar;
