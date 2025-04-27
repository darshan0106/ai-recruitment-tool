import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import RecruiterNavbar from "../../components/Navbar/PrivateNavBar/RecruiterNavbar";

const JobEditSchema = Yup.object().shape({
  title: Yup.string().required("Required"),
  description: Yup.string().required("Required"),
  requiredSkills: Yup.string().required("Required"),
});

const JobDetailsPage = () => {
  const { jobId } = useParams();
  const [job, setJob] = useState(null);
  const [applicants, setApplicants] = useState([]);
  const [editMode, setEditMode] = useState(false);

  useEffect(() => {
    // Example data - Replace with actual API fetch
    const exampleJob = {
      _id: jobId,
      title: "Frontend Developer",
      description:
        "We are looking for a React developer to build and maintain front-end applications. The role involves collaborating with designers and backend developers to ensure smooth implementation.",
      companyName: "Initech",
      createdAt: "2025-04-23T10:00:00Z",
      requiredSkills: ["React", "Tailwind", "REST API"],
    };

    const exampleApplicants = [
      {
        _id: "1",
        name: "Darshan S",
        email: "darshan@gmail.com",
        score: 92,
      },
      {
        _id: "2",
        name: "Bob Smith",
        email: "bob@example.com",
        score: 85,
      },
      {
        _id: "3",
        name: "Clara Lee",
        email: "clara@example.com",
        score: 88,
      },
      {
        _id: "4",
        name: "Daniel Green",
        email: "daniel@example.com",
        score: 80,
      },
      {
        _id: "5",
        name: "Emily White",
        email: "emily@example.com",
        score: 95,
      },
    ];

    setJob(exampleJob);
    setApplicants(exampleApplicants.sort((a, b) => b.score - a.score));
  }, [jobId]);

  const handleEditSubmit = async (values) => {
    const updatedJob = {
      ...job,
      title: values.title,
      description: values.description,
      requiredSkills: values.requiredSkills
        .split(",")
        .map((skill) => skill.trim()),
    };
    setJob(updatedJob);
    setEditMode(false);
  };

  return (
    <>
      <RecruiterNavbar />
      <div className="max-w-5xl mx-auto px-4 py-8">
        {/* Job Details Section */}
        {job && !editMode && (
          <div className="bg-gradient-to-br from-blue-50 to-blue-100 shadow-lg p-8 rounded-lg mb-8">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-3xl font-bold text-blue-800">{job.title}</h2>
              <div className="flex gap-3">
                <button
                  className="text-sm bg-gradient-to-r from-blue-600 to-purple-600 text-white px-5 py-2 rounded-lg hover:shadow-lg hover:from-blue-700 hover:to-purple-700 transition"
                  onClick={() => setEditMode(true)}
                >
                  Edit Job
                </button>
                <button
                  className="text-sm bg-gradient-to-r from-red-500 to-red-700 text-white px-5 py-2 rounded-lg hover:shadow-lg hover:from-red-600 hover:to-red-800 transition"
                  onClick={() => {
                    const confirmDelete = confirm(
                      "Are you sure you want to delete this job?"
                    );
                    if (confirmDelete) {
                      console.log("Deleting job with ID:", job._id);
                      // Redirect or update state after deletion
                    }
                  }}
                >
                  Delete Job
                </button>
              </div>
            </div>
            <p className="text-gray-600 text-lg mb-2">
              Company:{" "}
              <span className="font-medium text-blue-600">
                {job.companyName}
              </span>
            </p>
            <p className="text-sm text-gray-500 mb-4">
              Posted on: {new Date(job.createdAt).toLocaleDateString()}
            </p>
            <p className="text-gray-800 mb-4">{job.description}</p>
            <p className="text-sm text-gray-700">
              Required Skills:{" "}
              <span className="font-semibold text-blue-700">
                {job.requiredSkills.join(", ")}
              </span>
            </p>
          </div>
        )}

        {/* Applicants Section */}
        <div className="mt-10">
          <h3 className="text-2xl font-bold text-blue-600 mb-6">
            Top Applicants
          </h3>
          {applicants.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
              {applicants.map((applicant) => (
                <div
                  key={applicant._id}
                  className="border bg-white shadow-lg rounded-lg p-6 flex flex-col justify-between hover:shadow-xl transition"
                >
                  <div>
                    <p className="font-semibold text-gray-800 text-lg">
                      {applicant.name}
                    </p>
                    <p className="text-sm text-gray-500">{applicant.email}</p>
                  </div>
                  <div className="mt-4">
                    <p className="text-blue-700 font-bold mb-2">
                      Score: {applicant.score}%
                    </p>
                    <a
                      href="/DARSHAN_S.pdf"
                      className="text-sm text-white bg-blue-600 px-4 py-2 rounded-md hover:bg-blue-700 transition"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      View Resume
                    </a>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <p className="text-gray-500">No applicants yet for this job.</p>
          )}
        </div>
      </div>
    </>
  );
};

export default JobDetailsPage;
