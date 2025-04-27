import React, { useState } from "react";
import { Link } from "react-router-dom";

function PublicNavbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="bg-white bg-opacity-90 backdrop-blur-md shadow-md py-4 px-6 fixed w-full z-10">
      {/* Navbar container */}
      <div className="flex justify-between items-center">
        {/* Left - Logo */}
        <a
          href="/"
          className="text-2xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600 flex items-center"
        >
          TalentMatch
        </a>

        {/* Hamburger menu (Mobile) */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="block md:hidden bg-blue-600 text-white p-2 rounded-md"
        >
          ☰
        </button>

        {/* Right - Links */}
        <div className="hidden md:flex items-center space-x-4">
          <Link
            to="/recruiter/login"
            className="text-blue-600 font-medium hover:underline"
          >
            Recruiter
          </Link>
          <Link
            to="/candidate/login" // Update the link as necessary
            className="transition-transform transform hover:scale-105 bg-gradient-to-r from-blue-600 to-purple-500 text-white px-4 py-2 rounded-full hover:from-blue-700 hover:to-purple-600"
          >
            Candidate
          </Link>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden mt-4 space-y-2">
          <Link
            to="/recruiter/login"
            className="block text-blue-600 font-medium hover:underline"
          >
            Recruiter
          </Link>
          <a
            href="/candidate/register" // Update the link as necessary
            className="transition-transform transform hover:scale-105 block bg-gradient-to-r from-blue-600 to-purple-500 text-white px-4 py-2 rounded-full hover:from-blue-700 hover:to-purple-600"
          >
            Candidate
          </a>
        </div>
      )}
    </nav>
  );
}

export default PublicNavbar;
