import { useState } from "react";

const EditProfileModal = ({ recruiter, company, onClose, onSave }) => {
  const [formData, setFormData] = useState({
    name: recruiter.name,
    email: recruiter.email,
    companyName: company.name,
    website: company.website,
    companyEmail: company.email,
    description: company.description || "",
    city: company.location?.city || "",
    country: company.location?.country || "",
    contact: company.contact || "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSave(formData);
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
      <div className="bg-white p-8 rounded-xl shadow-lg w-11/12 md:w-2/3 lg:w-1/2 max-h-screen overflow-y-auto">
        <h2 className="text-2xl font-bold text-blue-600 mb-6 text-center">
          Edit Profile
        </h2>

        <form onSubmit={handleSubmit} className="space-y-5">
          {/* Recruiter Fields */}
          <div>
            <label className="block mb-2 font-semibold text-gray-700">
              Name
            </label>
            <input
              type="text"
              name="name"
              className="w-full border border-gray-300 rounded-lg shadow-sm px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>

          <div>
            <label className="block mb-2 font-semibold text-gray-700">
              Email
            </label>
            <input
              type="email"
              name="email"
              className="w-full border border-gray-300 rounded-lg shadow-sm px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>

          {/* Company Fields */}
          <div>
            <label className="block mb-2 font-semibold text-gray-700">
              Company Name
            </label>
            <input
              type="text"
              name="companyName"
              className="w-full border border-gray-300 rounded-lg shadow-sm px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
              value={formData.companyName}
              onChange={handleChange}
            />
          </div>

          <div>
            <label className="block mb-2 font-semibold text-gray-700">
              Website
            </label>
            <input
              type="text"
              name="website"
              className="w-full border border-gray-300 rounded-lg shadow-sm px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
              value={formData.website}
              onChange={handleChange}
            />
          </div>

          <div>
            <label className="block mb-2 font-semibold text-gray-700">
              Company Email
            </label>
            <input
              type="email"
              name="companyEmail"
              className="w-full border border-gray-300 rounded-lg shadow-sm px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
              value={formData.companyEmail}
              onChange={handleChange}
            />
          </div>

          <div>
            <label className="block mb-2 font-semibold text-gray-700">
              Description
            </label>
            <textarea
              name="description"
              className="w-full border border-gray-300 rounded-lg shadow-sm px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
              value={formData.description}
              onChange={handleChange}
            ></textarea>
          </div>

          <div className="grid grid-cols-2 gap-6">
            <div>
              <label className="block mb-2 font-semibold text-gray-700">
                City
              </label>
              <input
                type="text"
                name="city"
                className="w-full border border-gray-300 rounded-lg shadow-sm px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
                value={formData.city}
                onChange={handleChange}
              />
            </div>

            <div>
              <label className="block mb-2 font-semibold text-gray-700">
                Country
              </label>
              <input
                type="text"
                name="country"
                className="w-full border border-gray-300 rounded-lg shadow-sm px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
                value={formData.country}
                onChange={handleChange}
              />
            </div>
          </div>

          <div>
            <label className="block mb-2 font-semibold text-gray-700">
              Contact Number
            </label>
            <input
              type="number"
              name="contact"
              className="w-full border border-gray-300 rounded-lg shadow-sm px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
              value={formData.contact}
              onChange={handleChange}
            />
          </div>

          {/* Buttons */}
          <div className="flex justify-end space-x-4 mt-6">
            <button
              type="button"
              onClick={onClose}
              className="bg-gray-400 text-white px-4 py-2 rounded-lg hover:bg-gray-500 transition"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 shadow-lg transition"
            >
              Save Changes
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EditProfileModal;
