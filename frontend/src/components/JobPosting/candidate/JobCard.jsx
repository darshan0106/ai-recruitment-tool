// src/components/Cards/JobCard.jsx
import React from "react";
import { Link } from "react-router-dom";

const JobCard = ({ job }) => {
  const { title, companyName, location, type, postedDate } = job;

  return (
    <div className="bg-white shadow-lg rounded-lg p-6 border border-gray-200 hover:shadow-xl transition transform hover:-translate-y-1">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-xl font-semibold text-blue-700">{title}</h3>
        <span className="text-sm font-medium text-gray-500">{type}</span>
      </div>
      <p className="text-gray-600 mb-2">
        <span className="font-medium">Company:</span> {companyName}
      </p>
      <p className="text-gray-600 mb-2">
        <span className="font-medium">Location:</span> {location}
      </p>
      <p className="text-gray-500 text-sm">
        <span className="font-medium">Posted:</span> {postedDate}
      </p>
      <Link to={`/candidate/jobdetails`}>
        <button className="mt-4 w-full bg-blue-600 text-white py-2 rounded-md font-semibold hover:bg-blue-700 transition">
          Apply Now
        </button>
      </Link>
    </div>
  );
};

export default JobCard;
