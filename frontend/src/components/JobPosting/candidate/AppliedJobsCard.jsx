// src/components/Cards/AppliedJobsCard.jsx
import React from "react";

const AppliedJobsCard = ({ job }) => {
  const { title, companyName, status, dateApplied } = job;

  return (
    <div className="bg-white shadow-lg rounded-lg p-5 border border-gray-200 hover:shadow-xl transition transform hover:-translate-y-1">
      <h3 className="text-xl font-semibold text-blue-700">{title}</h3>
      <p className="text-gray-600">Company: {companyName}</p>
      <p
        className={`text-sm font-medium ${
          status === "Accepted"
            ? "text-green-600"
            : status === "Pending"
            ? "text-yellow-600"
            : "text-red-600"
        }`}
      >
        Status: {status}
      </p>
      <p className="text-sm text-gray-500">Applied on: {dateApplied}</p>
    </div>
  );
};

export default AppliedJobsCard;
