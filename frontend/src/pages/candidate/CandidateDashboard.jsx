// src/pages/CandidateDashboard.jsx
import React, { useState } from "react";
import CandidateNavbar from "../../components/Navbar/PrivateNavBar/CandidateNavbar";
import AppliedJobsCard from "../../components/JobPosting/candidate/AppliedJobsCard";

const CandidateDashboard = () => {
  // Sample applied jobs data
  const [appliedJobs, setAppliedJobs] = useState([
    {
      id: 1,
      title: "Frontend Developer",
      companyName: "TechCorp Solutions",
      status: "Pending",
      dateApplied: "2025-04-20",
    },
    {
      id: 2,
      title: "AI Engineer",
      companyName: "Innovate AI",
      status: "Accepted",
      dateApplied: "2025-04-18",
    },
    {
      id: 3,
      title: "Backend Developer",
      companyName: "CodeWorks Inc.",
      status: "Rejected",
      dateApplied: "2025-04-15",
    },
  ]);

  return (
    <>
      <CandidateNavbar />
      <div className="max-w-7xl mx-auto px-6 py-8">
        {/* Welcome Message */}
        <div className="bg-gradient-to-br from-blue-500 to-purple-600 text-white p-6 rounded-lg shadow-md mb-8">
          <h1 className="text-3xl font-bold mb-2">Welcome Back, Darshan!</h1>
          <p className="text-lg font-light">
            Here's an overview of your applied jobs and their statuses.
          </p>
        </div>

        {/* Applied Jobs Section */}
        <h2 className="text-2xl font-bold text-blue-700 mb-6">
          Your Applications
        </h2>
        {appliedJobs.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {appliedJobs.map((job) => (
              <AppliedJobsCard key={job.id} job={job} />
            ))}
          </div>
        ) : (
          <p className="text-gray-500">You haven't applied for any jobs yet.</p>
        )}
      </div>
    </>
  );
};

export default CandidateDashboard;
