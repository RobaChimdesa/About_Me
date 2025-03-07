import React, { useState, useEffect } from "react";
import { Link } from "react-scroll";
import { navLinksdata } from "../../constants";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";

const Navbar = () => {
  const [show, setShow] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isOpen, setIsOpen] = useState(false); // For mobile menu toggle

  // Control Navbar visibility on scroll
  const controlNavbar = () => {
    if (window.scrollY > lastScrollY && window.scrollY > 100) {
      setShow(false);
    } else {
      setShow(true);
    }
    setLastScrollY(window.scrollY);
  };

  useEffect(() => {
    window.addEventListener("scroll", controlNavbar);
    return () => window.removeEventListener("scroll", controlNavbar);
  }, [lastScrollY]);

  return (
    <nav
      className={`fixed top-4 left-0 right-0 mx-2 sm:mx-4 md:mx-8 lg:mx-12 z-50 transition-all duration-500 ${
        show ? "translate-y-0" : "-translate-y-full"
      }`}
    >
      <div
        className="bg-gradient-to-r from-blue-600 to-indigo-600 dark:from-gray-800 dark:to-gray-700 rounded-full shadow-lg px-4 sm:px-6 md:px-8 py-3 sm:py-4 flex items-center justify-between max-w-5xl mx-auto transform hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
      >
        {/* Logo or Brand */}
        <div className="text-white text-lg sm:text-xl md:text-2xl font-bold tracking-tight">
          <Link to="home" smooth={true} duration={500} offset={-70}>
            Portfolio
          </Link>
        </div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex items-center gap-6 lg:gap-8">
          {navLinksdata.map(({ id, title, link }) => (
            <li
              key={id}
              className="cursor-pointer text-sm lg:text-base font-medium text-white hover:text-yellow-300 transition-colors duration-300 tracking-wide"
            >
              <Link
                activeClass="text-yellow-300 border-b-2 border-yellow-300"
                to={link}
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
              >
                {title}
              </Link>
            </li>
          ))}
        </ul>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-white focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? (
            <CloseIcon className="w-6 h-6" />
          ) : (
            <MenuIcon className="w-6 h-6" />
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 mt-2 mx-2 sm:mx-4 bg-gradient-to-b from-blue-600 to-indigo-600 dark:from-gray-800 dark:to-gray-700 rounded-lg shadow-lg py-4 px-6 transition-all duration-300 animate-slide-down">
          <ul className="flex flex-col gap-4">
            {navLinksdata.map(({ id, title, link }) => (
              <li
                key={id}
                className="cursor-pointer text-sm font-medium text-white hover:text-yellow-300 transition-colors duration-300"
                onClick={() => setIsOpen(false)} // Close menu on click
              >
                <Link
                  activeClass="text-yellow-300 border-b-2 border-yellow-300"
                  to={link}
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={500}
                >
                  {title}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
