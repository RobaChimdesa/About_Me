
import React, { useState } from "react";
import All from "./All";
import Frontend from "./Frontend";
import Backend from "./Backend";
import Database from "./database";
import Framework from "./framework";
import Design from "./design";

const Skill = () => {
  const [activeTab, setActiveTab] = useState("all");

  const tabs = [
    { id: "all", label: "All", component: <All /> },
    { id: "frontend", label: "Frontend", component: <Frontend /> },
    { id: "backend", label: "Backend", component: <Backend /> },
    { id: "database", label: "Database", component: <Database /> },
    { id: "framework", label: "Framework", component: <Framework /> },
    { id: "design", label: "Design", component: <Design /> },
  ];

  const handleTabClick = (tabId) => {
    setActiveTab(tabId);
  };

  return (
    <section
      id="skills"
      className="w-full py-12 px-4 sm:px-6 md:px-8 lg:px-12 bg-gradient-to-b from-gray-50 to-blue-50 dark:from-gray-900 dark:to-gray-800 min-h-screen"
    >
      <div className="max-w-6xl mx-auto">
        {/* Heading */}
        <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold text-center text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-red-800 mb-8 animate-fade-in-down">
          Skills
        </h1>

        {/* Tabs */}
        <ul className="grid grid-cols-3 sm:grid-cols-6 gap-2 sm:gap-4 md:gap-6 mb-10 justify-center items-center text-center">
          {tabs.map((tab) => (
            <li
              key={tab.id}
              onClick={() => handleTabClick(tab.id)}
              className={`cursor-pointer px-2 py-2 sm:px-4 sm:py-3 text-sm sm:text-base md:text-lg font-semibold rounded-lg transition-all duration-300 ${
                activeTab === tab.id
                  ? "text-white bg-gradient-to-r from-blue-600 to-indigo-600 shadow-md"
                  : "text-gray-600 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400 hover:bg-gray-100 dark:hover:bg-gray-700"
              }`}
            >
              {tab.label}
            </li>
          ))}
        </ul>

        {/* Content */}
        <div className="min-h-[400px] flex justify-center">
          {tabs.find((tab) => tab.id === activeTab)?.component}
        </div>
      </div>
    </section>
  );
};

export default Skill;
