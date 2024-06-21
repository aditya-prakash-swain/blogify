import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { FaBars, FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";
import { FaXmark } from "react-icons/fa6";

function Navbar() {
  const [isMenuOpen, SetIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    SetIsMenuOpen(!isMenuOpen);
  };

  //nav items
  const navItems = [
    { path: "/", link: "Home" },
    { path: "/about", link: "About" },
    { path: "/contact", link: "Contact" },
    { path: "/services", link: "Services" },
    { path: "/blog", link: "Blog" },
  ];
  return (
    <header className="bg-black text-white fixed top-0 left-0 right-0">
      <nav className="px-4 py-4 max-w-7xl mx-auto flex justify-between items-center">
        <a href="/" className="text-xl font-bold text-white">
          Design<span className="text-orange-400">Nav</span>
        </a>

        {/* nav items for large devices */}
        <ul className="md:flex gap-12 text-lg hidden">
          {navItems.map(({ path, link }) => (
            <li className="text-white" key={path}>
              <NavLink className={({ isActive, isPending }) =>
                      isActive
                        ? "active"
                        : isPending
                        ? "pending"
                        : ""
                    } to={path}>{link}</NavLink>
            </li>
          ))}
        </ul>
        {/* menu icons */}

        <div className="text-white lg:flex gap-5 items-center hidden">
          <a href="/" className="hover:text-orange-400">
            <FaFacebook />
          </a>
          <a href="/" className="hover:text-orange-400">
            <FaTwitter />
          </a>
          <a href="/" className="hover:text-orange-400">
            <FaInstagram />
          </a>
          <button className="bg-orange-400 px-6 py-2 font-medium rounded hover:bg-white hover:text-orange-400 transition-all duration-200 ease-in">
            Log In
          </button>
        </div>
        {/* mobile menu btn, mobile view */}
        <div className="md:hidden">
          <button onClick={toggleMenu} className="cursor-pointer">
            {isMenuOpen ? (
              <FaXmark className="w-5 h-5" />
            ) : (
              <FaBars className="w-5 h-5" />
            )}
          </button>

        </div>
      </nav>
                {/* menu item for mobile */}
                <div >
            <ul className={`md:hidden gap-12 text-lg block space-y-4 px-4 py-6 mt-14 bg-white text-black ${isMenuOpen ? "fixed top-0 left-0 right-0 w-full transition-all ease-out duration-150" : "hidden"}`}>
            {navItems.map(({ path, link }) => (
              <li className="text-black" key={path}>
                <NavLink onClick={toggleMenu} className={({ isActive, isPending }) =>
                      isActive
                        ? "active"
                        : isPending
                        ? "pending"
                        : ""
                    }to={path}>{link}</NavLink>
              </li>
            ))}
            </ul>
          </div>
    </header>
  );
}

export default Navbar;
