
import React, { useState } from "react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const validate = () => {
    const errors = {};
    if (!formData.name) errors.name = "Name is required";
    if (!formData.email) {
      errors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      errors.email = "Email is invalid";
    }
    if (!formData.subject) errors.subject = "Subject is required";
    if (!formData.message) errors.message = "Message is required";
    return errors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length === 0) {
      fetch("https://formspree.io/f/meojejal", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      })
        .then((response) => {
          if (response.ok) {
            setSubmitted(true);
            setFormData({ name: "", email: "", subject: "", message: "" }); // Reset form
          } else {
            throw new Error("Network response was not ok.");
          }
        })
        .catch((error) => {
          console.error("There was a problem with the fetch operation:", error);
        });
    } else {
      setErrors(validationErrors);
    }
  };

  return (
    <section
      id="contact"
      className="w-full py-12 px-4 sm:px-6 md:px-8 lg:px-12 bg-gradient-to-b from-gray-50 to-blue-50 dark:from-gray-900 dark:to-gray-800 min-h-screen flex items-center justify-center"
    >
      <div className="max-w-2xl w-full mx-auto">
        {/* Heading */}
        <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold text-center text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-red-800 mb-8 animate-fade-in-down">
          Get in Touch
        </h1>

        {/* Form */}
        <form
          onSubmit={handleSubmit}
          className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-6 sm:p-8 border border-gray-200 dark:border-gray-700 transition-all duration-300 hover:shadow-xl"
        >
          <div className="space-y-6">
            {/* Name */}
            <div className="space-y-2">
              <label className="block text-sm sm:text-base font-medium text-gray-700 dark:text-gray-300">
                Name
              </label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Your name..."
                className="w-full p-3 sm:p-4 border border-teal-500 dark:border-teal-400 rounded-xl bg-transparent text-gray-800 dark:text-gray-200 placeholder-gray-400 dark:placeholder-gray-500 focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-all duration-300 shadow-sm hover:shadow-md"
              />
              {errors.name && <p className="text-red-500 text-xs sm:text-sm">{errors.name}</p>}
            </div>

            {/* Email */}
            <div className="space-y-2">
              <label className="block text-sm sm:text-base font-medium text-gray-700 dark:text-gray-300">
                Email Address
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="robachimdesa123@gmail.com"
                className="w-full p-3 sm:p-4 border border-teal-500 dark:border-teal-400 rounded-xl bg-transparent text-gray-800 dark:text-gray-200 placeholder-gray-400 dark:placeholder-gray-500 focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-all duration-300 shadow-sm hover:shadow-md"
              />
              {errors.email && <p className="text-red-500 text-xs sm:text-sm">{errors.email}</p>}
            </div>

            {/* Subject */}
            <div className="space-y-2">
              <label className="block text-sm sm:text-base font-medium text-gray-700 dark:text-gray-300">
                Subject
              </label>
              <input
                type="text"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                placeholder="Your subject matter..."
                className="w-full p-3 sm:p-4 border border-teal-500 dark:border-teal-400 rounded-xl bg-transparent text-gray-800 dark:text-gray-200 placeholder-gray-400 dark:placeholder-gray-500 focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-all duration-300 shadow-sm hover:shadow-md"
              />
              {errors.subject && <p className="text-red-500 text-xs sm:text-sm">{errors.subject}</p>}
            </div>

            {/* Message */}
            <div className="space-y-2">
              <label className="block text-sm sm:text-base font-medium text-gray-700 dark:text-gray-300">
                Message
              </label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Your message..."
                className="w-full p-3 sm:p-4 border border-teal-500 dark:border-teal-400 rounded-xl bg-transparent text-gray-800 dark:text-gray-200 placeholder-gray-400 dark:placeholder-gray-500 focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-all duration-300 shadow-sm hover:shadow-md min-h-[120px] sm:min-h-[150px]"
              />
              {errors.message && <p className="text-red-500 text-xs sm:text-sm">{errors.message}</p>}
            </div>

            {/* Submit Button */}
            <div className="text-center">
              <button
                type="submit"
                className="w-full sm:w-auto py-3 px-6 bg-gradient-to-r from-blue-600 to-indigo-600 dark:from-blue-500 dark:to-indigo-500 text-white rounded-xl hover:from-blue-700 hover:to-indigo-700 transition-all duration-300 transform hover:scale-105 shadow-lg glow-button text-sm sm:text-base font-semibold"
              >
                Send Your Feedback
              </button>
            </div>

            {/* Success Message */}
            {submitted && (
              <p className="text-center text-green-500 dark:text-green-400 mt-4 animate-fade-in">
                Thank you for your feedback!
              </p>
            )}
          </div>
        </form>
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

export default Contact;
