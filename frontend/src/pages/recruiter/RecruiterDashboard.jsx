import { useEffect, useState } from "react";
import { PlusCircle } from "lucide-react";
import { useNavigate } from "react-router-dom";
import RecruiterNavbar from "../../components/Navbar/PrivateNavBar/RecruiterNavbar";
import JobPostingCard from "../../components/JobPosting/recruiter/JobPostingCard";

const RecruiterDashboard = () => {
  const [jobs, setJobs] = useState([]);
  const recruiterName = "Darshan"; // Can be dynamic from context or localStorage
  const navigate = useNavigate(); // Hook for navigation

  // Example fetch (replace with actual API call)
  useEffect(() => {
    const mockData = [
      {
        _id: "1",
        title: "Frontend Developer",
        companyName: "Initech",
        createdAt: "2025-04-23T10:00:00Z",
        totalApplicants: 18,
      },
      {
        _id: "2",
        title: "AI Engineer",
        companyName: "Cyberdyne Systems",
        createdAt: "2025-04-22T12:00:00Z",
        totalApplicants: 10,
      },
      {
        _id: "3",
        title: "Backend Developer",
        companyName: "Cyberdyne Systems",
        createdAt: "2025-02-22T12:00:00Z",
        totalApplicants: 9,
      },
    ];
    setJobs(mockData);
  }, []);

  const handlePostJobClick = () => {
    navigate("/recruiter/addJobPost"); // Navigate to the Add Job Post page
  };

  const handleCardClick = () => {
    navigate(`/recruiter/jobDetailsPage/`); // Navigate to the Job Details page with the job ID
  };

  return (
    <>
      <RecruiterNavbar />
      <div className="max-w-7xl mx-auto px-6 py-8">
        {/* Welcome Section */}
        <div className="bg-gradient-to-br from-blue-500 to-purple-600 text-white rounded-lg p-6 mb-8 shadow-md hover:shadow-lg transition">
          <h2 className="text-3xl font-bold">
            Welcome back, {recruiterName} 👋
          </h2>
          <p className="mt-2 text-lg text-blue-200">
            Manage your job postings and find top candidates with ease.
          </p>
        </div>

        {/* Add Job Button */}
        <div className="flex justify-end mb-6">
          <button
            onClick={handlePostJobClick}
            className="inline-flex items-center gap-3 bg-gradient-to-r from-purple-500 to-blue-600 text-white px-5 py-3 rounded-lg shadow-md hover:shadow-lg hover:from-purple-600 hover:to-blue-700 transition transform hover:-translate-y-1"
          >
            <PlusCircle className="w-6 h-6" />
            Post a Job
          </button>
        </div>

        {/* Job Cards */}
        {jobs.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-6">
            {jobs.map((job) => (
              <div
                key={job._id}
                onClick={() => handleCardClick()} // Click handler for job cards
                className="cursor-pointer"
              >
                <JobPostingCard job={job} />
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center text-gray-500 mt-10">
            <p className="text-lg">You haven't posted any jobs yet.</p>
            <p>Click the button above to add one!</p>
          </div>
        )}
      </div>
    </>
  );
};

export default RecruiterDashboard;
