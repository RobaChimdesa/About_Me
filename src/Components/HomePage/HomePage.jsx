// import React from "react";
// import { Typewriter } from "react-simple-typewriter";
// import EmailIcon from "@mui/icons-material/Email";
// import GitHubIcon from "@mui/icons-material/GitHub";
// import LinkedInIcon from "@mui/icons-material/LinkedIn";
// import TelegramIcon from "@mui/icons-material/Telegram";
// import FacebookIcon from "@mui/icons-material/Facebook";
// import DownloadIcon from "@mui/icons-material/Download";
// import { back1, roba } from "../../assets";

// const Home = () => {
//   const email = "robachimdesa123@gmail.com";

//   return (
//     <section
//       id="home"
//       className="w-full min-h-screen bg-cover bg-center flex items-center justify-center px-4 py-16 sm:px-6 md:px-12 lg:px-20"
//       style={{
//         backgroundImage: `linear-gradient(to bottom, rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.6)), url(${back1})`,
//         backgroundSize: "cover",
//         backgroundPosition: "center",
//       }}
//     >
//       <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-8 md:gap-16 animate-fade-in">
//         {/* Text Content */}
//         <div className="w-full md:w-1/2 text-center md:text-left space-y-6">
//           <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-white drop-shadow-md">
//             Hi, I’m <span className="text-yellow-300">Roba Chimdesa</span>
//           </h1>
//           <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-serif text-red-500 dark:text-red-400">
//             <Typewriter
//               words={["Computer Engineer", "Web Developer", "Web Designer"]}
//               loop={true}
//               cursor
//               cursorStyle="|"
//               typeSpeed={70}
//               deleteSpeed={50}
//               delaySpeed={1000}
//             />
//           </h2>
//           <p className="text-gray-200 text-base sm:text-lg md:text-xl max-w-md mx-auto md:mx-0">
//             A passionate 5th-year student at Adama Science and Technology University, dedicated to crafting innovative digital solutions.
//           </p>
//           <div className="flex justify-center md:justify-start gap-4 mt-4">
//             <a
//               href="https://m.facebook.com/"
//               target="_blank"
//               rel="noopener noreferrer"
//               className="text-gray-300 hover:text-sky-500 transition-colors duration-300 transform hover:scale-110"
//             >
//               <FacebookIcon fontSize="medium" />
//             </a>
//             <a
//               href="https://www.linkedin.com/in/roba-chimdesa-0a2bab2a8/"
//               target="_blank"
//               rel="noopener noreferrer"
//               className="text-gray-300 hover:text-sky-500 transition-colors duration-300 transform hover:scale-110"
//             >
//               <LinkedInIcon fontSize="medium" />
//             </a>
//             <a
//               href="https://t.me/Anoo_Chim"
//               target="_blank"
//               rel="noopener noreferrer"
//               className="text-gray-300 hover:text-sky-500 transition-colors duration-300 transform hover:scale-110"
//             >
//               <TelegramIcon fontSize="medium" />
//             </a>
//             <a
//               href="https://github.com/RobaChimdesa"
//               target="_blank"
//               rel="noopener noreferrer"
//               className="text-gray-300 hover:text-sky-500 transition-colors duration-300 transform hover:scale-110"
//             >
//               <GitHubIcon fontSize="medium" />
//             </a>
//             <a
//               href={`mailto:${email}`}
//               target="_blank"
//               rel="noopener noreferrer"
//               className="text-gray-300 hover:text-sky-500 transition-colors duration-300 transform hover:scale-110"
//             >
//               <EmailIcon fontSize="medium" />
//             </a>
//           </div>
//           <a
//             href="/cv.pdf"
//             target="_blank"
//             rel="noopener noreferrer"
//             className="inline-block mt-6"
//           >
//             <button className="flex items-center gap-2 py-3 px-6 bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-full hover:from-blue-700 hover:to-indigo-700 transition-all duration-300 transform hover:scale-105 shadow-lg glow-button text-sm sm:text-base font-semibold">
//               <DownloadIcon />
//               Download CV
//             </button>
//           </a>
//         </div>

//         {/* Image */}
//         <div className="w-full md:w-1/2 mt-12 md:mt-0 flex justify-center">
//           <img
//             src={roba}
//             alt="Roba Chimdesa"
//             className="w-48 h-48 sm:w-64 sm:h-64 md:w-72 md:h-72 lg:w-80 lg:h-80 rounded-full object-cover shadow-xl transition-all duration-500 ease-in-out hover:scale-110 hover:shadow-2xl"
//           />
//         </div>
//       </div>

//       {/* Custom CSS for Glow Effect */}
//       <style jsx>{`
//         .glow-button {
//           box-shadow: 0 0 15px rgba(59, 130, 246, 0.8), 0 0 25px rgba(99, 102, 241, 0.5);
//         }
//       `}</style>
//     </section>
//   );
// };

// export default Home;
import { Typewriter } from "react-simple-typewriter";
import EmailIcon from "@mui/icons-material/Email";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import TelegramIcon from "@mui/icons-material/Telegram";
import FacebookIcon from "@mui/icons-material/Facebook";
import DownloadIcon from "@mui/icons-material/Download";
import { roba } from "../../assets";


const Home = () => {
  const email = "robachimdesa123@gmail.com";

  return (
    <section
      id="home"
      className="w-full min-h-screen flex items-center justify-center px-4 py-16 sm:px-6 md:px-12 lg:px-20 overflow-hidden relative animate-fade-in-slow"
      // style={{
      //   backgroundImage: `linear-gradient(to bottom, rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.6)), url(${nav1})`,
      //   backgroundSize: "cover",
      //   backgroundPosition: "center",
      // }}
    >
      <div className="max-w-6xl mx-auto flex flex-col items-center gap-8 md:gap-12 z-10 relative animate-slide-up">
        {/* Text Content */}
        <div className="text-center space-y-6 animate-fade-in">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-serif font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 via-orange-400 to-red-500 drop-shadow-lg animate-text-glow">
            Hi, I’m <span className="text-white">Roba Chimdesa</span>
          </h1>
          <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-serif font-semibold text-transparent bg-clip-text bg-gradient-to-r from-red-400 to-pink-500 animate-pulse-slow">
            <Typewriter
              words={["Computer Engineer", "Web Developer", "Web Designer"]}
              loop={true}
              cursor
              cursorStyle="_"
              typeSpeed={80}
              deleteSpeed={60}
              delaySpeed={1500}
            />
          </h2>
          <p className="text-gray-200 text-base sm:text-lg md:text-xl lg:text-2xl max-w-md mx-auto leading-relaxed animate-fade-in-delay">
          A motivated Computer Science graduate from Adama Science and Technology University, equipped to transform ideas into functional digital solutions. I specialize in front-end and back-end development, with a focus on clean code and user-centric design.          </p>
        </div>

        {/* Image */}
        <div className="flex justify-center animate-slide-up-delay">
          <img
            src={roba}
            alt="Roba Chimdesa"
            className="w-40 h-40 sm:w-52 sm:h-52 md:w-64 md:h-64 lg:w-80 lg:h-80 rounded-full object-cover border-4 border-gradient-purple shadow-2xl hover:shadow-3xl hover:border-yellow-400 transition-all duration-500 ease-out animate-spin-slow hover:animate-none"
          />
        </div>

        {/* Social Icons */}
        <div className="flex flex-col sm:flex-row justify-center gap-4 mt-6 animate-slide-up-delay-2">
          <div className="flex flex-wrap justify-center gap-3">
            <a
              href="https://m.facebook.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-300 hover:text-blue-400 transition-all duration-300 transform hover:-translate-y-1 hover:shadow-md rounded-full p-2 bg-white/10 backdrop-blur-sm text-sm sm:text-base"
            >
              <FacebookIcon fontSize="small" />
            </a>
            <a
              href="https://www.linkedin.com/in/roba-chimdesa-0a2bab2a8/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-300 hover:text-blue-600 transition-all duration-300 transform hover:-translate-y-1 hover:shadow-md rounded-full p-2 bg-white/10 backdrop-blur-sm text-sm sm:text-base"
            >
              <LinkedInIcon fontSize="small" />
            </a>
            <a
              href="https://t.me/Anoo_Chim"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-300 hover:text-sky-500 transition-all duration-300 transform hover:-translate-y-1 hover:shadow-md rounded-full p-2 bg-white/10 backdrop-blur-sm text-sm sm:text-base"
            >
              <TelegramIcon fontSize="small" />
            </a>
            <a
              href="https://github.com/RobaChimdesa"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-300 hover:text-gray-400 transition-all duration-300 transform hover:-translate-y-1 hover:shadow-md rounded-full p-2 bg-white/10 backdrop-blur-sm text-sm sm:text-base"
            >
              <GitHubIcon fontSize="small" />
            </a>
            <a
              href={`mailto:${email}`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-300 hover:text-green-400 transition-all duration-300 transform hover:-translate-y-1 hover:shadow-md rounded-full p-2 bg-white/10 backdrop-blur-sm text-sm sm:text-base"
            >
              <EmailIcon fontSize="small" />
            </a>
          </div>
        </div>

        {/* CV Button */}
        <a
          href="/cv.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block mt-6"
        >
          <button className="flex items-center gap-2 py-2 px-6 sm:py-3 sm:px-8 bg-gradient-to-r from-blue-600 to-indigo-700 text-white rounded-lg hover:from-blue-700 hover:to-indigo-800 transition-all duration-300 transform hover:scale-105 shadow-xl glow-button text-sm sm:text-base font-semibold animate-pulse-button">
            <DownloadIcon fontSize="small" />
            Download CV
          </button>
        </a>
      </div>

      {/* Custom CSS for Animations and Effects */}
      <style jsx>{`
        @keyframes fade-in-slow {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        @keyframes slide-up {
          from { transform: translateY(20px); opacity: 0; }
          to { transform: translateY(0); opacity: 1; }
        }
        @keyframes fade-in-delay {
          0% { opacity: 0; }
          50% { opacity: 0; }
          100% { opacity: 1; }
        }
        @keyframes slide-up-delay {
          0% { transform: translateY(20px); opacity: 0; }
          60% { transform: translateY(20px); opacity: 0; }
          100% { transform: translateY(0); opacity: 1; }
        }
        @keyframes slide-up-delay-2 {
          0% { transform: translateY(20px); opacity: 0; }
          70% { transform: translateY(20px); opacity: 0; }
          100% { transform: translateY(0); opacity: 1; }
        }
        @keyframes text-glow {
          0% { text-shadow: 0 0 10px rgba(255, 215, 0, 0.7); }
          50% { text-shadow: 0 0 20px rgba(255, 165, 0, 0.9), 0 0 30px rgba(255, 69, 0, 0.6); }
          100% { text-shadow: 0 0 10px rgba(255, 215, 0, 0.7); }
        }
        @keyframes pulse-slow {
          0% { opacity: 0.8; }
          50% { opacity: 1; }
          100% { opacity: 0.8; }
        }
        @keyframes pulse-button {
          0% { box-shadow: 0 0 10px rgba(59, 130, 246, 0.7); }
          50% { box-shadow: 0 0 20px rgba(99, 102, 241, 0.9); }
          100% { box-shadow: 0 0 10px rgba(59, 130, 246, 0.7); }
        }
        @keyframes spin-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        .animate-fade-in-slow { animation: fade-in-slow 1.5s ease-out; }
        .animate-fade-in { animation: fade-in-delay 1.5s ease-out; }
        .animate-fade-in-delay { animation: fade-in-delay 2s ease-out; }
        .animate-slide-up { animation: slide-up 1.2s ease-out; }
        .animate-slide-up-delay { animation: slide-up-delay 1.5s ease-out; }
        .animate-slide-up-delay-2 { animation: slide-up-delay-2 1.8s ease-out; }
        .animate-text-glow { animation: text-glow 3s infinite; }
        .animate-pulse-slow { animation: pulse-slow 3s infinite; }
        .animate-pulse-button { animation: pulse-button 2s infinite; }
        .animate-spin-slow { animation: spin-slow 20s linear infinite; }
        .glow-button {
          box-shadow: 0 0 15px rgba(59, 130, 246, 0.8), 0 0 25px rgba(99, 102, 241, 0.5);
        }
        .border-gradient-purple {
          border-image: linear-gradient(45deg, #6b46c1, #ed64a6) 1;
        }
      `}</style>
    </section>
  );
};

export default Home;
