
import { useState } from "react";
import { Typewriter } from "react-simple-typewriter";
import { about } from "../../assets";

const About = () => {
  const [showMore, setShowMore] = useState(false);

  const handleShow = () => {
    setShowMore(!showMore);
  };

  return (
    <section
      id="about"
      className="w-full py-16 px-4 sm:px-6 md:px-12 lg:px-20 bg-gradient-to-b from-gray-50 to-blue-50 dark:from-gray-900 dark:to-gray-800 transition-all duration-500"
    >
      <div className="max-w-6xl mx-auto">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-center text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-red-800 mb-12 animate-fade-in-down">
          About Me
        </h1>

        <div className="flex flex-col md:flex-row gap-8 md:gap-12 items-center">
          {/* Text Content */}
          <div className="w-full md:w-1/2 space-y-6">
            <p className="text-gray-700 dark:text-gray-300 text-base sm:text-lg md:text-xl leading-relaxed text-center md:text-left animate-fade-in">
              I’m Roba Chimdesa, a 4th-year Computer Science and Engineering student at Adama Science and Technology University. I’m passionate about <span className="text-blue-600 dark:text-blue-400 font-semibold">web development</span> and <span className="text-blue-600 dark:text-blue-400 font-semibold">competitive programming</span>, constantly honing my skills to build innovative solutions.
            </p>
            {showMore && (
              <p className="text-gray-700 dark:text-gray-300 text-base sm:text-lg md:text-xl leading-relaxed text-center md:text-left animate-fade-in-up">
                As a self-motivated learner, I thrive on exploring new technologies and tackling complex challenges. My drive to succeed fuels my enthusiasm for coding, problem-solving, and pushing the boundaries of what’s possible in tech.
              </p>
            )}
            <button
              onClick={handleShow}
              className="block mx-auto md:mx-0 py-3 px-6 bg-gradient-to-r from-blue-600 to-indigo-600 dark:from-blue-500 dark:to-indigo-500 text-white rounded-full hover:from-blue-700 hover:to-indigo-700 transition-all duration-300 transform hover:scale-105 shadow-lg glow-button text-sm sm:text-base font-semibold"
            >
              {showMore ? "Hide Details" : "Show More"}
            </button>
          </div>

          {/* Image */}
          <div className="w-full md:w-1/2 mt-8 md:mt-0">
            <img
              src={about}
              alt="Roba Chimdesa"
              className="w-full h-64 sm:h-72 md:h-96 object-cover rounded-2xl shadow-xl transition-all duration-500 ease-in-out hover:-translate-y-2 hover:scale-105 hover:shadow-2xl"
            />
          </div>
        </div>

        {/* Typewriter */}
        <div className="w-full mt-12 text-center">
          <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold text-gray-800 dark:text-gray-200">
            <Typewriter
              words={["Always Learning", "Always Improving"]}
              loop={true}
              cursor
              cursorStyle="|"
              typeSpeed={70}
              deleteSpeed={50}
              delaySpeed={1000}
            />
          </h2>
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

export default About;
