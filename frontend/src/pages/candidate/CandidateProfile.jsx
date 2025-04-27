// src/pages/CandidateProfile.jsx
import React, { useState } from "react";
import CandidateNavbar from "../../components/Navbar/PrivateNavBar/CandidateNavbar";

const CandidateProfile = () => {
  const [resume, setResume] = useState(null);

  // Example candidate details (replace with actual API data)
  const candidate = {
    name: "Darshan S",
    email: "darshansivakumar860@gmail.com",
    phone: "+91 8110063700",
    location: "Coimbatore, Tamil Nadu, India - 641014",
    linkedin: "https://www.linkedin.com/in/darshan-sivakumar-a45503225",
    github: "https://github.com/darshan0106",
    education: [
      {
        institution: "Sri Shakthi Institute Of Engineering And Technology",
        degree: "B.E Computer Science Engineering",
        startDate: "2022",
        endDate: "2026",
        grade: "CGPA: 6.9",
      },
      {
        institution: "St. Josephs Boys AI Higher Secondary School, Coonoor",
        degree: "Higher Secondary School",
        grade: "85%",
        startDate: "2019",
        endDate: "2021",
      },
      {
        institution: "Braeside Matric School, Kappathorai",
        degree: "High School",
        grade: "89%",
        startDate: "2017",
        endDate: "2019",
      },
    ],
    projects: [
      {
        title: "Weather App",
        description:
          "Developed a responsive weather website using HTML, CSS, and JavaScript to display real-time weather details.",
        techStack: ["HTML", "CSS", "JavaScript"],
        link: "https://github.com/darshan0106/weather-app",
      },
      {
        title: "MERN Blog Platform",
        description:
          "Developed a MERN-based blog platform with real-time updates and article creation.",
        techStack: ["ReactJS", "MongoDB", "ExpressJS", "Tailwind CSS"],
        link: "https://github.com/darshan0106/mern-blog",
      },
      {
        title: "Web Scraper",
        description:
          "Developed a Python web scraper using BeautifulSoup and Requests to extract specific data.",
        techStack: ["Python"],
        link: "https://github.com/darshan0106/web-scraper",
      },
    ],
    technicalSkills: [
      "Python",
      "JavaScript",
      "MongoDB",
      "ReactJs",
      "MySQL",
      "ExpressJS",
    ],
    strengths: [
      "Team Leadership",
      "Problem Solving",
      "Adaptability",
      "Communication",
    ],
    languages: ["English", "Tamil", "Hindi"],
    hobbies: ["Exploring New Things", "Hiking", "Traveling"],
  };

  const handleResumeUpload = (e) => {
    setResume(e.target.files[0]);
  };

  return (
    <>
      <CandidateNavbar />
      <div className="max-w-6xl mx-auto px-6 py-8">
        {/* Header Section */}
        <div className="bg-gradient-to-br from-blue-500 to-purple-600 text-white p-6 rounded-lg shadow-md mb-8">
          <h1 className="text-3xl font-bold">Candidate Profile</h1>
          <p className="text-lg font-light">
            Welcome, {candidate.name}! Here's an overview of your profile.
          </p>
        </div>

        {/* Personal Info Section */}
        <div className="bg-white shadow-lg rounded-lg p-6 mb-8">
          <h2 className="text-2xl font-bold text-blue-700 mb-4">
            Personal Information
          </h2>
          <p className="text-gray-700">
            <strong>Email:</strong> {candidate.email}
          </p>
          <p className="text-gray-700">
            <strong>Phone:</strong> {candidate.phone}
          </p>
          <p className="text-gray-700">
            <strong>Location:</strong> {candidate.location}
          </p>
          <p className="text-gray-700">
            <strong>LinkedIn:</strong>{" "}
            <a
              href={candidate.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:underline"
            >
              {candidate.linkedin}
            </a>
          </p>
          <p className="text-gray-700">
            <strong>GitHub:</strong>{" "}
            <a
              href={candidate.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:underline"
            >
              {candidate.github}
            </a>
          </p>
        </div>

        {/* Education Section */}
        <div className="bg-white shadow-lg rounded-lg p-6 mb-8">
          <h2 className="text-2xl font-bold text-blue-700 mb-4">Education</h2>
          {candidate.education.map((edu, index) => (
            <div key={index} className="mb-4">
              <p className="text-gray-700">
                <strong>Institution:</strong> {edu.institution}
              </p>
              <p className="text-gray-700">
                <strong>Degree:</strong> {edu.degree}
              </p>
              <p className="text-gray-700">
                <strong>Grade:</strong> {edu.grade}
              </p>
              <p className="text-gray-500 text-sm">
                <strong>Years:</strong> {edu.startDate} - {edu.endDate}
              </p>
            </div>
          ))}
        </div>

        {/* Projects Section */}
        <div className="bg-white shadow-lg rounded-lg p-6 mb-8">
          <h2 className="text-2xl font-bold text-blue-700 mb-4">Projects</h2>
          {candidate.projects.map((project, index) => (
            <div key={index} className="mb-4">
              <p className="text-gray-700">
                <strong>Title:</strong> {project.title}
              </p>
              <p className="text-gray-700">
                <strong>Description:</strong> {project.description}
              </p>
              <p className="text-gray-700">
                <strong>Tech Stack:</strong> {project.techStack.join(", ")}
              </p>
              <p className="text-gray-700">
                <strong>Link:</strong>{" "}
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:underline"
                >
                  {project.link}
                </a>
              </p>
            </div>
          ))}
        </div>

        {/* Resume Upload Section */}
        <div className="bg-white shadow-lg rounded-lg p-6">
          <h2 className="text-2xl font-bold text-blue-700 mb-4">
            Upload Resume
          </h2>
          <input
            type="file"
            accept=".pdf,.doc,.docx"
            onChange={handleResumeUpload}
            className="border border-gray-300 rounded-md p-3 w-full"
          />
          {resume && (
            <p className="mt-4 text-gray-600">
              <strong>Uploaded File:</strong> {resume.name}
            </p>
          )}
        </div>
      </div>
    </>
  );
};

export default CandidateProfile;
