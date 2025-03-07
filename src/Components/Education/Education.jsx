import React, { useRef, useEffect, useState } from "react";
import { Certificates } from "../../constants/certificate";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";

const Education = () => {
  const scrollContainerRef = useRef(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const { scrollLeft, scrollWidth, clientWidth } = scrollContainerRef.current;
      setCanScrollLeft(scrollLeft > 0);
      setCanScrollRight(scrollLeft + clientWidth < scrollWidth - 1); // Small buffer
    };

    const container = scrollContainerRef.current;
    container.addEventListener("scroll", handleScroll);
    handleScroll(); // Initial check
    return () => container.removeEventListener("scroll", handleScroll);
  }, []);

  const scroll = (direction) => {
    const scrollAmount = window.innerWidth < 640 ? 200 : window.innerWidth < 768 ? 250 : 300; // Adjusted for mobile
    if (direction === "left") {
      scrollContainerRef.current.scrollBy({ left: -scrollAmount, behavior: "smooth" });
    } else {
      scrollContainerRef.current.scrollBy({ left: scrollAmount, behavior: "smooth" });
    }
  };

  return (
    <section
      id="education"
      className="w-full py-6 sm:py-8 md:py-12 px-2 sm:px-4 md:px-6 lg:px-8 bg-gradient-to-b from-gray-50 to-blue-50 dark:from-gray-900 dark:to-gray-800"
    >
      <div className="max-w-6xl mx-auto space-y-6 sm:space-y-8">
        {/* Education Heading */}
        <h1 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-extrabold text-center text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-red-800 mb-4 sm:mb-6 animate-fade-in-down">
          Education
        </h1>

        {/* Education Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-12">
          <div className=" bg-white dark:bg-gray-800 rounded-lg md:p-3 shadow-md border-l-4 border-blue-500 dark:border-blue-400 hover:border-yellow-500 dark:hover:border-yellow-400 transition-all duration-300 transform hover:-translate-y-1 hover:shadow-lg">
            <p className="text-sm sm:text-base md:text-lg font-semibold text-red-500 dark:text-red-400">
              2016 - 2020
            </p>
            <h2 className="text-sm sm:text-base md:text-lg lg:text-xl font-bold text-gray-800 dark:text-gray-200 mt-1 sm:mt-2">
              High School Diploma
            </h2>
            <p className="text-gray-600 dark:text-gray-300 mt-1 sm:mt-2 text-xs sm:text-sm md:text-base line-clamp-3">
              Attended Bako Secondary School, earning my high school diploma and setting the foundation for my university journey.
            </p>
          </div>
          <div className="bg-white dark:bg-gray-800 rounded-lg p-3 sm:p-4 shadow-md border-l-4 border-blue-500 dark:border-blue-400 hover:border-yellow-500 dark:hover:border-yellow-400 transition-all duration-300 transform hover:-translate-y-1 hover:shadow-lg">
            <p className="text-sm sm:text-base md:text-lg font-semibold text-red-500 dark:text-red-400">
              2020 - Present
            </p>
            <h2 className="text-sm sm:text-base md:text-lg lg:text-xl font-bold text-gray-800 dark:text-gray-200 mt-1 sm:mt-2">
              Bachelor's Degree
            </h2>
            <p className="text-gray-600 dark:text-gray-300 mt-1 sm:mt-2 text-xs sm:text-sm md:text-base line-clamp-3">
              Currently a 4th-year Computer Science and Engineering student at Adama Science and Technology University.
            </p>
          </div>
        </div>

        {/* Certificates Heading */}
        <h1 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-extrabold text-center text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-red-800 mt-6 sm:mt-8 mb-4 sm:mb-6 animate-fade-in-down">
          Certificates
        </h1>

        {/* Certificates Carousel */}
        <div className="relative w-full mx-auto flex items-center px-0 sm:px-2">
          <button
            onClick={() => scroll("left")}
            disabled={!canScrollLeft}
            className={`absolute left-0 sm:-left-2 md:-left-4 z-10 p-1 sm:p-2 bg-gradient-to-r from-blue-600 to-indigo-600 dark:from-gray-700 dark:to-gray-600 text-white rounded-full shadow-md transition-all duration-300 transform hover:scale-105 ${!canScrollLeft ? "opacity-50 cursor-not-allowed" : "hover:from-blue-700 hover:to-indigo-700"
              }`}
          >
            <ArrowBackIosNewIcon fontSize="small" className="w-3 h-3 sm:w-4 sm:h-4" />
          </button>
          <div
            ref={scrollContainerRef}
            className="flex overflow-x-auto space-x-3 sm:space-x-4 p-2 sm:p-3 scrollbar-hide snap-x snap-mandatory w-full"
          >
            {Certificates.map((item) => (
              <div
                key={item.id}
                className="min-w-[160px] sm:min-w-[200px] md:min-w-[250px] lg:min-w-[300px] bg-white dark:bg-gray-800 rounded-lg shadow-md border-l-4 border-blue-500 dark:border-blue-400 hover:border-yellow-500 dark:hover:border-yellow-400 transition-all duration-300 transform hover:scale-102 hover:shadow-lg snap-center flex-shrink-0 flex flex-col"
              >
                <p className="text-xs sm:text-sm md:text-base font-semibold text-gray-800 dark:text-gray-200 p-2 sm:p-3 line-clamp-2">
                  {item.name}
                </p>
                <a href={item.img} target="_blank" rel="noopener noreferrer" className="flex-grow">
                  <img
                    src={item.img}
                    alt={item.name}
                    className="w-full h-20 sm:h-24 md:h-28 lg:h-32 object-cover rounded-b-lg cursor-pointer transition-all duration-300 hover:brightness-110"
                  />
                </a>
              </div>
            ))}
          </div>
          <button
            onClick={() => scroll("right")}
            disabled={!canScrollRight}
            className={`absolute right-0 sm:-right-2 md:-right-4 z-10 p-1 sm:p-2 bg-gradient-to-r from-blue-600 to-indigo-600 dark:from-gray-700 dark:to-gray-600 text-white rounded-full shadow-md transition-all duration-300 transform hover:scale-105 ${!canScrollRight ? "opacity-50 cursor-not-allowed" : "hover:from-blue-700 hover:to-indigo-700"
              }`}
          >
            <ArrowForwardIosIcon fontSize="small" className="w-3 h-3 sm:w-4 sm:h-4" />
          </button>
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

export default Education;
