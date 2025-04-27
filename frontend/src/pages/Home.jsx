// src/pages/Home.jsx
import React from "react";
import PublicNavbar from "../components/Navbar/PublicNavbar";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate(); // Hook for navigation

  return (
    <>
      <PublicNavbar />
      <div className="flex flex-col min-h-screen bg-gradient-to-br from-blue-600 via-indigo-500 to-purple-600 text-white">
        {/* Main Content */}
        <div className="flex-grow flex flex-col items-center justify-center py-20 px-6">
          <div className="text-center mb-12 animate-fade-in">
            <h1 className="text-5xl md:text-6xl font-extrabold leading-tight">
              AI-Powered Recruitment Tool
            </h1>
            <p className="mt-4 text-lg md:text-xl text-indigo-200 font-light">
              Revolutionize the hiring process with cutting-edge AI technology.
            </p>
          </div>

          <div className="flex flex-col md:flex-row md:space-x-6">
            <button
              onClick={() => navigate("/recruiter/register")} // Working navigation
              className="bg-gradient-to-r from-purple-500 to-blue-600 hover:from-purple-600 hover:to-blue-700 py-3 px-6 rounded-lg text-lg font-semibold shadow-md hover:shadow-lg transition transform hover:scale-105"
            >
              Get Started
            </button>
            <button
              onClick={() => navigate("/recruiter/login")} // Working navigation
              className="bg-white text-blue-600 hover:text-purple-600 py-3 px-6 mt-4 md:mt-0 rounded-lg text-lg font-semibold shadow-md hover:shadow-lg transition transform hover:scale-105"
            >
              Login
            </button>
          </div>
        </div>

        {/* Technical Assessment Section */}
        <div className="flex flex-col items-center justify-center mt-16 px-6 animate-fade-in-up">
          <h2 className="text-3xl font-bold">Welcome to TalentMatch</h2>
          <p className="mt-4 text-center text-indigo-200 font-light max-w-4xl">
            TalentMatch is your ultimate solution for simplifying the hiring
            process. Our platform empowers recruiters to post jobs, evaluate
            candidates, and find the best talent using advanced AI technology.
            From matching skills to generating insights, TalentMatch transforms
            recruitment into a smarter, faster, and more effective experience.
          </p>
        </div>

        {/* Footer */}
        <footer className="bg-black bg-opacity-50 text-center py-4">
          <p className="text-sm text-gray-400">
            &copy; 2025 AI-Powered Recruitment Tool. All rights reserved.
          </p>
        </footer>
      </div>
    </>
  );
};

export default Home;
