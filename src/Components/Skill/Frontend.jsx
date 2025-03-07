import React from "react";
import { motion } from "framer-motion";
import { frontend } from "./StoreSkill";

const Frontend = () => {
  // Animation variants for the section and cards
  const sectionVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 1 } },
  };

  const cardVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: (i) => ({
      opacity: 1,
      scale: 1,
      transition: { delay: i * 0.1, duration: 0.5, ease: "easeOut" },
    }),
  };

  return (
    <motion.section
      variants={sectionVariants}
      initial="hidden"
      animate="visible"
      className="w-full py-12 px-4 sm:px-6 md:px-8 lg:px-12 bg-gradient-to-b from-gray-50 to-blue-50 dark:from-gray-900 dark:to-gray-800 min-h-[400px] flex items-center"
    >
      <div className="max-w-6xl mx-auto">
        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-center text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-indigo-500 mb-8"
        >
          Frontend Skills
        </motion.h2>

        {/* Skills Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6 sm:gap-8 md:gap-10">
          {frontend.map((item, index) => (
            <motion.div
              key={item.id}
              custom={index}
              initial="hidden"
              animate="visible"
              variants={cardVariants}
              whileHover={{ scale: 1.05, transition: { duration: 0.3 } }}
              className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-4 sm:p-5 flex flex-col items-center justify-center transition-all duration-500 hover:bg-gradient-to-br hover:from-blue-500 hover:to-indigo-500 dark:hover:from-gray-700 dark:hover:to-gray-600 hover:shadow-xl hover:text-white"
            >
              <img
                src={item.title}
                alt={item.name}
                className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 object-contain mb-2 sm:mb-3"
              />
              <p className="text-sm sm:text-base md:text-lg font-semibold text-gray-800 dark:text-gray-200 text-center group-hover:text-white">
                {item.name}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
};

export default Frontend;
