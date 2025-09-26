// import React, { useState, useEffect } from "react";
// import { Link } from "react-scroll";
// import { navLinksdata } from "../../constants";
// import MenuIcon from "@mui/icons-material/Menu";
// import CloseIcon from "@mui/icons-material/Close";

// const Navbar = () => {
//   const [show, setShow] = useState(true);
//   const [lastScrollY, setLastScrollY] = useState(0);
//   const [isOpen, setIsOpen] = useState(false); // For mobile menu toggle

//   // Control Navbar visibility on scroll
//   const controlNavbar = () => {
//     if (window.scrollY > lastScrollY && window.scrollY > 100) {
//       setShow(false);
//     } else {
//       setShow(true);
//     }
//     setLastScrollY(window.scrollY);
//   };

//   useEffect(() => {
//     window.addEventListener("scroll", controlNavbar);
//     return () => window.removeEventListener("scroll", controlNavbar);
//   }, [lastScrollY]);

//   return (
//     <nav
//       className={`fixed top-4 left-0 right-0 mx-2 sm:mx-4 md:mx-8 lg:mx-12 z-50 transition-all duration-500 ${
//         show ? "translate-y-0" : "-translate-y-full"
//       }`}
//     >
//       <div
//         className="bg-gradient-to-r from-blue-600 to-indigo-600 dark:from-gray-800 dark:to-gray-700 rounded-full shadow-lg px-4 sm:px-6 md:px-8 py-3 sm:py-4 flex items-center justify-between max-w-5xl mx-auto transform hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
//       >
//         {/* Logo or Brand */}
//         {/* <div className="text-white text-lg sm:text-xl md:text-2xl font-bold tracking-tight">
//           <Link to="home" smooth={true} duration={500} offset={-70}>
//             Portfolio
//           </Link>
//         </div> */}
//         <div className="flex items-center">
//           <Link to="home" smooth={true} duration={500} offset={-70}>
//             <span
//               className="text-2xl sm:text-3xl md:text-4xl font-[Pacifico] text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 to-pink-500 dark:from-yellow-200 dark:to-pink-400 neon-sign hover:scale-105 hover:text-shadow-lg transition-all duration-300 animate-neon-pulse"
//             >
//               RC
//             </span>
//           </Link>
//         </div>

//         {/* Desktop Menu */}
//         <ul className="hidden md:flex items-center gap-6 lg:gap-8">
//           {navLinksdata.map(({ id, title, link }) => (
//             <li
//               key={id}
//               className="cursor-pointer text-sm lg:text-base font-medium text-white hover:text-yellow-300 transition-colors duration-300 tracking-wide"
//             >
//               <Link
//                 activeClass="text-yellow-300 border-b-2 border-yellow-300"
//                 to={link}
//                 spy={true}
//                 smooth={true}
//                 offset={-70}
//                 duration={500}
//               >
//                 {title}
//               </Link>
//             </li>
//           ))}
//         </ul>

//         {/* Mobile Menu Button */}
//         <button
//           className="md:hidden text-white focus:outline-none"
//           onClick={() => setIsOpen(!isOpen)}
//         >
//           {isOpen ? (
//             <CloseIcon className="w-6 h-6" />
//           ) : (
//             <MenuIcon className="w-6 h-6" />
//           )}
//         </button>
//       </div>

//       {/* Mobile Menu */}
//       {isOpen && (
//         <div className="md:hidden absolute top-full left-0 right-0 mt-2 mx-2 sm:mx-4 bg-gradient-to-b from-blue-600 to-indigo-600 dark:from-gray-800 dark:to-gray-700 rounded-lg shadow-lg py-4 px-6 transition-all duration-300 animate-slide-down">
//           <ul className="flex flex-col gap-4">
//             {navLinksdata.map(({ id, title, link }) => (
//               <li
//                 key={id}
//                 className="cursor-pointer text-sm font-medium text-white hover:text-yellow-300 transition-colors duration-300"
//                 onClick={() => setIsOpen(false)} // Close menu on click
//               >
//                 <Link
//                   activeClass="text-yellow-300 border-b-2 border-yellow-300"
//                   to={link}
//                   spy={true}
//                   smooth={true}
//                   offset={-70}
//                   duration={500}
//                 >
//                   {title}
//                 </Link>
//               </li>
//             ))}
//           </ul>
//         </div>
//       )}
//     </nav>
//   );
// };

// export default Navbar;
import React, { useState, useEffect } from "react";
import { Link } from "react-scroll";
import { navLinksdata } from "../../constants";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
// import { nav1 } from "../../assets";

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
      className={`fixed top-0 left-0 right-0 mx-2 sm:mx-4 md:mx-8 lg:mx-12 z-50  transition-all duration-500 ${
        show ? "translate-y-0" : "-translate-y-full"
      }`}
    >
      <div
        className="backdrop-blur-md bg-transparent rounded-full shadow-lg px-4 sm:px-6 md:px-8 py-3 sm:py-4 flex items-center justify-between max-w-5xl mx-auto transform hover:shadow-xl hover:-translate-y-1 transition-all duration-300 border border-white/20"
      >
        {/* Logo or Brand */}
        <div className="flex items-center">
          <Link to="home" smooth={true} duration={500} offset={-70}>
            <span
              className="text-2xl sm:text-3xl md:text-4xl font-[Pacifico] text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 to-pink-500 dark:from-yellow-200 dark:to-pink-400 neon-sign hover:scale-105 hover:text-shadow-lg transition-all duration-300 animate-neon-pulse"
            >
              RC
            </span>
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
        <div className="md:hidden absolute top-full left-0 right-0 mt-2 mx-2 sm:mx-4 backdrop-blur-md bg-transparent rounded-lg shadow-lg py-4 px-6 transition-all duration-300 animate-slide-down border border-white/20">
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
      <style>
        {`
          @keyframes neon-pulse {
            0% {
              opacity: 0.7;
              text-shadow: 0 0 5px rgba(255, 255, 255, 0.3), 0 0 10px rgba(255, 255, 255, 0.2);
              transform: scale(0.95);
            }
            50% {
              opacity: 1;
              text-shadow: 0 0 10px rgba(255, 255, 255, 0.5), 0 0 20px rgba(234, 179, 8, 0.7), 0 0 30px rgba(219, 39, 119, 0.5);
              transform: scale(1.05);
            }
            100% {
              opacity: 1;
              text-shadow: 0 0 5px rgba(255, 255, 255, 0.4), 0 0 15px rgba(234, 179, 8, 0.6), 0 0 25px rgba(219, 39, 119, 0.4);
              transform: scale(1);
            }
          }
          .animate-neon-pulse {
            animation: neon-pulse 1.2s ease-in-out;
          }
          .neon-sign {
            text-shadow: 0 0 5px rgba(255, 255, 255, 0.4), 0 0 15px rgba(234, 179, 8, 0.6), 0 0 25px rgba(219, 39, 119, 0.4);
          }
          .neon-sign:hover {
            text-shadow: 0 0 10px rgba(255, 255, 255, 0.6), 0 0 20px rgba(234, 179, 8, 0.8), 0 0 30px rgba(219, 39, 119, 0.6);
          }
        `}
      </style>
    </nav>
  );
};

export default Navbar;
