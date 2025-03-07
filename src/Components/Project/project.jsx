
import React, { useRef, useEffect, useState } from "react";
import GitHubIcon from "@mui/icons-material/GitHub";
import { Myproject } from "../../constants/Myprojects";

const Project = () => {
  const scrollContainerRef = useRef(null);
  const [isPaused, setIsPaused] = useState(false);
  const [hoveredId, setHoveredId] = useState(null);

  // Infinite scroll effect
  useEffect(() => {
    const container = scrollContainerRef.current;
    if (!container) return;

    const scrollSpeed = window.innerWidth < 640 ? 0.5 : window.innerWidth < 768 ? 0.8 : 1;
    let animationFrame;

    const scroll = () => {
      if (!isPaused) {
        container.scrollLeft += scrollSpeed;
        if (container.scrollLeft >= container.scrollWidth - container.clientWidth) {
          container.scrollLeft = 0; // Reset for infinite loop
        }
      }
      animationFrame = requestAnimationFrame(scroll);
    };

    animationFrame = requestAnimationFrame(scroll);
    return () => cancelAnimationFrame(animationFrame);
  }, [isPaused]);

  // Duplicate projects for seamless looping
  const doubledProjects = [...Myproject, ...Myproject];

  return (
    <section
      id="projects"
      className="w-full py-6 sm:py-8 md:py-12 px-2 sm:px-4 md:px-6 lg:px-8 bg-gradient-to-b from-gray-50 to-blue-50 dark:from-gray-900 dark:to-gray-800 overflow-hidden"
    >
      <div className="max-w-full mx-auto space-y-6 sm:space-y-8">
        {/* Heading */}
        <h1 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-extrabold text-center text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-red-800 mb-4 sm:mb-6 animate-fade-in-down">
          My Projects
        </h1>

        {/* Projects Carousel */}
        <div
          ref={scrollContainerRef}
          className="flex flex-row overflow-x-hidden space-x-3 sm:space-x-4 md:space-x-24
           scrollbar-hide w-full"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
          onTouchStart={() => setIsPaused(true)}
          onTouchEnd={() => setIsPaused(false)}
        >
          {doubledProjects.map((item, index) => (
            <div
              key={`${item.id}-${index}`}
              className="w-[200px] sm:w-[250px] md:w-[300px] lg:w-[350px] h-[300px] sm:h-[340px] md:h-[380px] lg:h-[420px] bg-white dark:bg-gray-800 rounded-lg shadow-md border-l-4 border-blue-500 dark:border-blue-400 hover:border-yellow-500 dark:hover:border-yellow-400 transition-all duration-300 transform hover:scale-102 hover:shadow-lg flex-shrink-0 flex flex-col"
              onMouseEnter={() => setHoveredId(item.id)}
              onMouseLeave={() => setHoveredId(null)}
            >
              {/* Image with Overlay */}
              <div className="relative w-full h-1/2 overflow-hidden rounded-t-lg">
                <img
                  src={item.img}
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-500 ease-in-out"
                  style={{ transform: hoveredId === item.id ? "scale(1.1)" : "scale(1)" }}
                />
                <div
                  className={`absolute inset-0 flex justify-center items-center bg-black bg-opacity-60 transition-opacity duration-300 ${
                    hoveredId === item.id ? "opacity-100" : "opacity-0"
                  }`}
                >
                  <a
                    href={item.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white text-xs sm:text-sm md:text-base font-semibold hover:text-yellow-300 transition-colors duration-300"
                  >
                    Live Demo
                  </a>
                </div>
              </div>

              {/* Content */}
              <div className="p-2 sm:p-3 md:p-4 flex flex-col flex-grow h-1/2">
                <h2 className="text-sm sm:text-base md:text-lg lg:text-xl font-bold text-gray-800 dark:text-gray-200 mb-1 sm:mb-2 line-clamp-1">
                  {item.title}
                </h2>
                <p className="text-gray-600 dark:text-gray-300 text-xs sm:text-sm md:text-base flex-grow line-clamp-3 overflow-hidden">
                  {item.description}
                </p>
                <div className="flex justify-between items-center mt-2 sm:mt-3">
                  <div className="flex gap-1 sm:gap-2">
                    <img
                      src={item.tech1}
                      alt="Tech 1"
                      className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 rounded-full object-cover"
                    />
                    <img
                      src={item.tech2}
                      alt="Tech 2"
                      className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 rounded-full object-cover"
                    />
                    <img
                      src={item.tech3}
                      alt="Tech 3"
                      className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 rounded-full object-cover"
                    />
                  </div>
                  <a
                    href={item.git}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-600 dark:text-gray-300 hover:text-sky-500 dark:hover:text-sky-400 transition-colors duration-300 transform hover:scale-110"
                  >
                    <GitHubIcon fontSize="small" className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6" />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Custom CSS for Scrollbar Hiding */}
      <style jsx>{`
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
        .scrollbar-hide {
          -ms-overflow-style: none; /* IE and Edge */
          scrollbar-width: none; /* Firefox */
        }
      `}</style>
    </section>
  );
};

export default Project;
