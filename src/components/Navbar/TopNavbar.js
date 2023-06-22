import React, { useState } from "react";
import { Link } from "react-router-dom";

function TopNavbar() {
  let Links = [
    { name: "HOME", link: "/Home" },
    { name: "SERVICE", link: "/Service" },
    { name: "ABOUT", link: "/About" },
    { name: "BLOG'S", link: "/Blogs" },
    { name: "CONTACT", link: "/Contact" },
  ];

  let [open, setOpen] = useState(false);

  return (
    <div className="shadow-md w-full fixed">
      <div className="flex justify-between items-center justify-center bg-white md:px-5 px-2 md:h-14 h-12 border-2 border-black">
        <div
          className="font-bold md:text-2xl text-xl cursor-pointer flex items-center font-[Poppins] 
      text-gray-800 border-2 border-black"
        >
          <span className="md:text-3xl text-xl text-indigo-600 mr-1 pt-2">
            <ion-icon name="logo-ionic"></ion-icon>
          </span>
          Designer
        </div>

        <div
          onClick={() => setOpen(!open)}
          className="text-xl absolute right-3 top-2 cursor-pointer md:hidden border-2 border-black"
        >
          <ion-icon name={open ? "close" : "menu"}></ion-icon>
        </div>

        <ul
          className={`md:flex md:items-center md:pb-0 pb-2 absolute md:static bg-white md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 pl-6 transition-all duration-500 ease-in ${
            open ? "top-10 " : "top-[-400px] border-2 border-black"
          }`}
        >
          {Links.map((link) => (
            <li
              key={link.name}
              className="md:ml-4 font-medium md:my-0 my-7 py-1 border-2 border-black"
            >
              <Link
                to={link.link}
                className="text-black hover:bg-green hover:text-white rounded-md py-1 px-2 duration-500"
              >
                {link.name}
              </Link>
            </li>
          ))}
          <button
            className="bg-indigo-600 text-white font-[Poppins] lg:ml-10 lg:px-9 lg:py-2 md:px-4 md:py-1 md:ml-4 px-9 py-2 rounded hover:bg-indigo-400 
    duration-500"
          >
            Get Started
          </button>
        </ul>
      </div>
    </div>
  );
}

export default TopNavbar;
