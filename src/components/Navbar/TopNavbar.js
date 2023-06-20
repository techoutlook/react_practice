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
    <div className="shadow-md w-full fixed top-0 left-0">
      <div className="md:flex items-center justify-between bg-white md:px-10 px-7 md:py-2 py-1">
        <div
          className="font-bold text-2xl cursor-pointer flex items-center font-[Poppins] 
      text-gray-800"
        >
          <span className="text-3xl text-indigo-600 mr-1 pt-2">
            <ion-icon name="logo-ionic"></ion-icon>
          </span>
          Designer
        </div>

        <div
          onClick={() => setOpen(!open)}
          className="text-3xl absolute right-8 md:top-4 top-3 cursor-pointer md:hidden"
        >
          <ion-icon name={open ? "close" : "menu"}></ion-icon>
        </div>

        <ul
          className={`md:flex md:items-center md:pb-0 pb-2 absolute md:static bg-white md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in ${
            open ? "top-10 " : "top-[-400px]"
          }`}
        >
          {Links.map((link) => (
            <li
              key={link.name}
              className="md:ml-4 font-medium md:my-0 my-7 px-2 py-1"
            >
              <Link
                to={link.link}
                className="text-black hover:bg-green hover:text-white rounded-md px-2 py-1 duration-500"
              >
                {link.name}
              </Link>
            </li>
          ))}
          <button
            className="bg-indigo-600 text-white font-[Poppins] py-2 px-6 rounded md:ml-8 hover:bg-indigo-400 
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
