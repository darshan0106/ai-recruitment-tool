import { Link, useNavigate } from "react-router-dom";

const RecruiterNavbar = () => {
  const navigate = useNavigate();

  // Logout handler
  const handleLogout = () => {
    localStorage.removeItem("recruiterToken"); // Remove token or session
    navigate("/"); // Redirect to home page after logout
  };

  return (
    <nav className="bg-white shadow-md px-6 py-4 flex items-center justify-between sticky top-0 z-50">
      {/* Website Name */}
      <a
        href="/"
        className="text-2xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600"
      >
        TalentMatch
      </a>

      {/* Navigation Links */}
      <div className="flex gap-6 items-center">
        <Link
          to="/recruiter/dashboard"
          className="text-gray-700 hover:text-blue-600 font-medium transition-colors"
        >
          Dashboard
        </Link>
        <Link
          to="/recruiter/profile"
          className="text-gray-700 hover:text-blue-600 font-medium transition-colors"
        >
          Profile
        </Link>
        <button
          onClick={handleLogout}
          className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-4 py-2 rounded-lg shadow hover:shadow-lg hover:from-blue-700 hover:to-purple-700 transition transform hover:scale-105"
        >
          Logout
        </button>
      </div>
    </nav>
  );
};

export default RecruiterNavbar;
