// src/pages/CandidateJobs.jsx
import React, { useState } from "react";
import CandidateNavbar from "../../components/Navbar/PrivateNavBar/CandidateNavbar";
import JobCard from "../../components/JobPosting/candidate/JobCard";

const CandidateJobs = () => {
  // Sample job data
  const [jobs, setJobs] = useState([
    {
      id: 1,
      title: "Frontend Developer",
      companyName: "TechCorp Solutions",
      location: "Remote",
      type: "Full-Time",
      postedDate: "2025-04-20",
    },
    {
      id: 2,
      title: "AI Engineer",
      companyName: "Innovate AI",
      location: "San Francisco, CA",
      type: "Full-Time",
      postedDate: "2025-04-18",
    },
    {
      id: 3,
      title: "Backend Developer",
      companyName: "CodeWorks Inc.",
      location: "New York, NY",
      type: "Part-Time",
      postedDate: "2025-04-15",
    },
    {
      id: 4,
      title: "Product Manager",
      companyName: "Visionary Co.",
      location: "London, UK",
      type: "Full-Time",
      postedDate: "2025-04-22",
    },
  ]);

  return (
    <>
      <CandidateNavbar />
      <div className="max-w-7xl mx-auto px-6 py-8">
        {/* Header Section */}
        <div className="bg-gradient-to-br from-blue-500 to-purple-600 text-white p-6 rounded-lg shadow-md mb-8">
          <h1 className="text-3xl font-bold mb-2">Available Jobs</h1>
          <p className="text-lg font-light">
            Explore current opportunities tailored to your skills and interests.
          </p>
        </div>

        {/* Job Cards Section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {jobs.length > 0 ? (
            jobs.map((job) => <JobCard key={job.id} job={job} />)
          ) : (
            <p className="text-gray-500">No jobs available at the moment.</p>
          )}
        </div>
      </div>
    </>
  );
};

export default CandidateJobs;
