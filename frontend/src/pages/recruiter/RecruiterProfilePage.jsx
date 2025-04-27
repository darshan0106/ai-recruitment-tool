import { useEffect, useState } from "react";
import axios from "axios";
import RecruiterNavbar from "../../components/Navbar/PrivateNavBar/RecruiterNavbar";
import EditProfileModal from "./EditProfileModal";

const RecruiterProfilePage = () => {
  const [recruiter, setRecruiter] = useState({
    name: "Darshan",
    email: "darshan@example.com",
  });
  const [company, setCompany] = useState({
    name: "TechCorp Solutions",
    website: "www.techcorp.com",
    email: "info@techcorp.com",
    size: "50-100 employees",
    description: "Innovative solutions for modern businesses.",
    location: { city: "Sulur", country: "India" },
    contact: "+91 9876543210",
  });
  const [openModal, setOpenModal] = useState(false);

  const fetchProfileData = async () => {
    try {
      const res = await axios.get("/api/recruiter/profile"); // API to get recruiter + company
      setRecruiter(res.data.recruiter || recruiter); // Fallback to default data
      setCompany(res.data.company || company); // Fallback to default data
    } catch (err) {
      console.error("Error fetching profile:", err);
    }
  };

  useEffect(() => {
    fetchProfileData();
  }, []);

  const handleSave = async (updatedData) => {
    try {
      await axios.put("/api/recruiter/profile", updatedData); // API to update recruiter + company
      setOpenModal(false);
      fetchProfileData(); // Refresh updated data
    } catch (err) {
      console.error("Error updating profile:", err);
    }
  };

  return (
    <>
      <RecruiterNavbar />
      <div className="max-w-5xl mx-auto px-6 py-8">
        <h2 className="text-3xl font-bold text-blue-700 mb-6">
          Recruiter Profile
        </h2>

        <div className="bg-gradient-to-br from-blue-100 to-blue-200 shadow-lg rounded-lg p-8 mb-8">
          {/* Recruiter Details */}
          <div className="mb-6">
            <h3 className="text-xl font-semibold text-blue-800 mb-3">
              Personal Info
            </h3>
            <p className="text-gray-700">
              <strong>Name:</strong> {recruiter.name}
            </p>
            <p className="text-gray-700">
              <strong>Email:</strong> {recruiter.email}
            </p>
          </div>

          {/* Company Details */}
          <div className="mb-6">
            <h3 className="text-xl font-semibold text-blue-800 mb-3">
              Company Info
            </h3>
            <p className="text-gray-700">
              <strong>Name:</strong> {company.name}
            </p>
            <p className="text-gray-700">
              <strong>Website:</strong>{" "}
              <a
                href={`https://${company.website}`}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:underline"
              >
                {company.website}
              </a>
            </p>
            <p className="text-gray-700">
              <strong>Email:</strong> {company.email}
            </p>
            <p className="text-gray-700">
              <strong>Size:</strong> {company.size}
            </p>
            <p className="text-gray-700">
              <strong>Description:</strong> {company.description}
            </p>
            <p className="text-gray-700">
              <strong>Location:</strong> {company.location?.city},{" "}
              {company.location?.country}
            </p>
            <p className="text-gray-700">
              <strong>Contact:</strong> {company.contact}
            </p>
          </div>

          <button
            onClick={() => setOpenModal(true)}
            className="bg-gradient-to-r from-blue-600 to-purple-600 text-white font-bold py-2 px-6 rounded-lg hover:shadow-lg hover:from-blue-700 hover:to-purple-700 transition transform hover:scale-105"
          >
            Edit Profile
          </button>
        </div>

        {/* Edit Modal */}
        {openModal && (
          <EditProfileModal
            recruiter={recruiter}
            company={company}
            onClose={() => setOpenModal(false)}
            onSave={handleSave}
          />
        )}
      </div>
    </>
  );
};

export default RecruiterProfilePage;
