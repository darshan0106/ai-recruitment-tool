import { Link, useNavigate } from "react-router-dom";

const CandidateNavbar = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    // Implement logout logic
    localStorage.removeItem("candidateToken"); // Example: Remove candidate's token
    navigate("/"); // Redirect to the home page
  };

  return (
    <nav className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-4 shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        {/* Left - Website Name */}
        <div>
          <a
            href="/"
            className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-l from-purple-300 to-blue-300"
          >
            TalentMatch
          </a>
        </div>

        {/* Right - Navigation Links */}
        <div className="flex items-center gap-8">
          <Link
            to="/candidate/dashboard"
            className="font-semibold hover:text-gray-200 transition"
          >
            Dashboard
          </Link>
          <Link
            to="/candidate/jobs"
            className="font-semibold hover:text-gray-200 transition"
          >
            Jobs
          </Link>
          <Link
            to="/candidate/profile"
            className="font-semibold hover:text-gray-200 transition"
          >
            Profile
          </Link>
          <button
            onClick={handleLogout}
            className="font-semibold hover:text-gray-200 transition"
          >
            Logout
          </button>
        </div>
      </div>
    </nav>
  );
};

export default CandidateNavbar;
