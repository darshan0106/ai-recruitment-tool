// src/pages/CandidateJobDetails.jsx
import React from "react";
import { useParams } from "react-router-dom";
import CandidateNavbar from "../../components/Navbar/PrivateNavBar/CandidateNavbar";

// Example job and company data (to replace with actual API fetch)
const sampleJob = {
  role: "Frontend Developer",
  experience: "2-4 years",
  skills: ["React", "JavaScript", "CSS", "Tailwind"],
  description:
    "We are looking for a skilled Frontend Developer to join our dynamic team. You will work with designers and backend developers to create intuitive and beautiful web applications.",
  jobType: "Full-Time",
  pay: 90000,
  hiring: true,
  company: {
    name: "TechCorp Solutions",
    website: "www.techcorp.com",
    email: "info@techcorp.com",
    size: 100,
    description:
      "Leading the way in innovative solutions for modern businesses.",
    location: {
      address: "123 Main Street",
      country: "USA",
      city: "New York",
      area: "Manhattan",
      postalCode: "10001",
    },
    contact: "+1 123-456-7890",
  },
};

const CandidateJobDetails = () => {
  const { jobId } = useParams(); // To fetch specific job details based on jobId

  const job = sampleJob; // Replace with actual fetched job data

  return (
    <>
      <CandidateNavbar />
      <div className="max-w-6xl mx-auto px-6 py-8">
        {/* Job Details Section */}
        <div className="bg-gradient-to-br from-blue-100 to-blue-200 shadow-lg rounded-lg p-8 mb-8">
          <h1 className="text-3xl font-bold text-blue-700 mb-4">{job.role}</h1>
          <p className="text-lg text-gray-600 mb-6">{job.description}</p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div>
              <p className="text-gray-700">
                <strong>Experience:</strong> {job.experience}
              </p>
              <p className="text-gray-700">
                <strong>Job Type:</strong> {job.jobType}
              </p>
              <p className="text-gray-700">
                <strong>Pay:</strong> ${job.pay} per annum
              </p>
            </div>
            <div>
              <p className="text-gray-700">
                <strong>Hiring:</strong>{" "}
                {job.hiring ? (
                  <span className="text-green-600">Currently hiring</span>
                ) : (
                  <span className="text-red-600">Position closed</span>
                )}
              </p>
              <p className="text-gray-700">
                <strong>Skills Required:</strong> {job.skills.join(", ")}
              </p>
            </div>
          </div>
        </div>

        {/* Company Details Section */}
        <div className="bg-white shadow-lg rounded-lg p-8">
          <h2 className="text-2xl font-bold text-blue-700 mb-4">
            About the Company
          </h2>
          <p className="text-gray-700 mb-4">{job.company.description}</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div>
              <p className="text-gray-700">
                <strong>Name:</strong> {job.company.name}
              </p>
              <p className="text-gray-700">
                <strong>Website:</strong>{" "}
                <a
                  href={`https://${job.company.website}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:underline"
                >
                  {job.company.website}
                </a>
              </p>
              <p className="text-gray-700">
                <strong>Email:</strong> {job.company.email}
              </p>
              <p className="text-gray-700">
                <strong>Size:</strong> {job.company.size} employees
              </p>
            </div>
            <div>
              <p className="text-gray-700">
                <strong>Address:</strong> {job.company.location.address},{" "}
                {job.company.location.area}, {job.company.location.city},{" "}
                {job.company.location.country},{" "}
                {job.company.location.postalCode}
              </p>
              <p className="text-gray-700">
                <strong>Contact:</strong> {job.company.contact}
              </p>
            </div>
          </div>
        </div>
        <button className="mt-4 w-full bg-blue-600 text-white py-2 rounded-md font-semibold hover:bg-blue-700 transition">
          Apply Now
        </button>
      </div>
    </>
  );
};

export default CandidateJobDetails;
