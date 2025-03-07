
import React from "react";
import EmailIcon from "@mui/icons-material/Email";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import TelegramIcon from "@mui/icons-material/Telegram";
import FacebookIcon from "@mui/icons-material/Facebook";

const Footer = () => {
  const email = "robachimdesa123@gmail.com";

  return (
    <footer className="w-full py-6 px-4 sm:px-6 md:px-8 lg:px-12 bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 dark:from-gray-800 dark:via-gray-700 dark:to-gray-900 text-white">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-6 sm:gap-8">
        {/* Copyright */}
        <div className="text-center sm:text-left">
          <h2 className="text-sm sm:text-base md:text-lg font-semibold">
            © {new Date().getFullYear()} Roba Chimdesa. All rights reserved.
          </h2>
        </div>

        {/* Social Links */}
        <div className="flex justify-center items-center gap-4 sm:gap-6 md:gap-8">
          <a
            href="https://m.facebook.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-200 hover:text-sky-400 transition-all duration-300 transform hover:scale-110"
          >
            <FacebookIcon fontSize="medium" className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8" />
          </a>
          <a
            href="https://www.linkedin.com/in/roba-chimdesa-0a2bab2a8/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-200 hover:text-sky-400 transition-all duration-300 transform hover:scale-110"
          >
            <LinkedInIcon fontSize="medium" className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8" />
          </a>
          <a
            href="https://t.me/Anoo_Chim"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-200 hover:text-sky-400 transition-all duration-300 transform hover:scale-110"
          >
            <TelegramIcon fontSize="medium" className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8" />
          </a>
          <a
            href="https://github.com/RobaChimdesa"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-200 hover:text-sky-400 transition-all duration-300 transform hover:scale-110"
          >
            <GitHubIcon fontSize="medium" className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8" />
          </a>
          <a
            href={`mailto:${email}`}
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-200 hover:text-sky-400 transition-all duration-300 transform hover:scale-110"
          >
            <EmailIcon fontSize="medium" className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8" />
          </a>
        </div>
      </div>

      {/* Optional Back-to-Top Button (Uncomment if desired) */}
      {/* <div className="mt-4 text-center">
        <a
          href="#home"
          className="inline-block p-2 bg-white/10 rounded-full text-white hover:bg-white/20 transition-all duration-300 transform hover:scale-110"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-5 h-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" />
          </svg>
        </a>
      </div> */}
    </footer>
  );
};

export default Footer;
