import React from "react";
import { Typewriter } from "react-simple-typewriter";
import EmailIcon from "@mui/icons-material/Email";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import TelegramIcon from "@mui/icons-material/Telegram";
import FacebookIcon from "@mui/icons-material/Facebook";
import DownloadIcon from "@mui/icons-material/Download";
import { back1, roba } from "../../assets";

const Home = () => {
  const email = "robachimdesa123@gmail.com";

  return (
    <section
      id="home"
      className="w-full min-h-screen bg-cover bg-center flex items-center justify-center px-4 py-16 sm:px-6 md:px-12 lg:px-20"
      style={{
        backgroundImage: `linear-gradient(to bottom, rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.6)), url(${back1})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-8 md:gap-16 animate-fade-in">
        {/* Text Content */}
        <div className="w-full md:w-1/2 text-center md:text-left space-y-6">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-white drop-shadow-md">
            Hi, I’m <span className="text-yellow-300">Roba Chimdesa</span>
          </h1>
          <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-serif text-red-500 dark:text-red-400">
            <Typewriter
              words={["Computer Engineer", "Web Developer", "Web Designer"]}
              loop={true}
              cursor
              cursorStyle="|"
              typeSpeed={70}
              deleteSpeed={50}
              delaySpeed={1000}
            />
          </h2>
          <p className="text-gray-200 text-base sm:text-lg md:text-xl max-w-md mx-auto md:mx-0">
            A passionate 5th-year student at Adama Science and Technology University, dedicated to crafting innovative digital solutions.
          </p>
          <div className="flex justify-center md:justify-start gap-4 mt-4">
            <a
              href="https://m.facebook.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-300 hover:text-sky-500 transition-colors duration-300 transform hover:scale-110"
            >
              <FacebookIcon fontSize="medium" />
            </a>
            <a
              href="https://www.linkedin.com/in/roba-chimdesa-0a2bab2a8/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-300 hover:text-sky-500 transition-colors duration-300 transform hover:scale-110"
            >
              <LinkedInIcon fontSize="medium" />
            </a>
            <a
              href="https://t.me/Anoo_Chim"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-300 hover:text-sky-500 transition-colors duration-300 transform hover:scale-110"
            >
              <TelegramIcon fontSize="medium" />
            </a>
            <a
              href="https://github.com/RobaChimdesa"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-300 hover:text-sky-500 transition-colors duration-300 transform hover:scale-110"
            >
              <GitHubIcon fontSize="medium" />
            </a>
            <a
              href={`mailto:${email}`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-300 hover:text-sky-500 transition-colors duration-300 transform hover:scale-110"
            >
              <EmailIcon fontSize="medium" />
            </a>
          </div>
          <a
            href="/cv.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block mt-6"
          >
            <button className="flex items-center gap-2 py-3 px-6 bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-full hover:from-blue-700 hover:to-indigo-700 transition-all duration-300 transform hover:scale-105 shadow-lg glow-button text-sm sm:text-base font-semibold">
              <DownloadIcon />
              Download CV
            </button>
          </a>
        </div>

        {/* Image */}
        <div className="w-full md:w-1/2 mt-12 md:mt-0 flex justify-center">
          <img
            src={roba}
            alt="Roba Chimdesa"
            className="w-48 h-48 sm:w-64 sm:h-64 md:w-72 md:h-72 lg:w-80 lg:h-80 rounded-full object-cover shadow-xl transition-all duration-500 ease-in-out hover:scale-110 hover:shadow-2xl"
          />
        </div>
      </div>

      {/* Custom CSS for Glow Effect */}
      <style jsx>{`
        .glow-button {
          box-shadow: 0 0 15px rgba(59, 130, 246, 0.8), 0 0 25px rgba(99, 102, 241, 0.5);
        }
      `}</style>
    </section>
  );
};

export default Home;
