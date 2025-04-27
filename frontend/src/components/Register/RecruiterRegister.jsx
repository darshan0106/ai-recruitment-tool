// src/pages/RecruiterRegister.jsx
import { useEffect, useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const RecruiterRegister = () => {
  const [companies, setCompanies] = useState([]);
  const [showCompanyForm, setShowCompanyForm] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    axios.get("/api/companies").then((res) => setCompanies(res.data));
  }, []);

  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      password: "",
      selectedCompany: "",
      companyDetails: {
        name: "",
        website: "",
        email: "",
        size: "",
        description: "",
        location: {
          address: "",
          city: "",
          country: "",
          area: "",
          postalCode: "",
        },
        contact: "",
      },
    },
    validationSchema: Yup.object({
      name: Yup.string().required("Required"),
      email: Yup.string().email("Invalid email").required("Required"),
      password: Yup.string().min(6).required("Required"),
    }),
    onSubmit: (values) => {
      console.log("Registering recruiter:", values);
      // Handle API calls here
    },
  });

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-bl from-indigo-400 to-blue-600 p-4">
      <div className="bg-white p-10 rounded-2xl shadow-2xl transform scale-100 hover:scale-105 transition-transform duration-300 w-full max-w-3xl">
        <h2 className="text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-500 mb-6 text-center">
          Recruiter Register
        </h2>

        <form onSubmit={formik.handleSubmit} className="space-y-6">
          <div>
            <label className="block text-gray-700 text-sm font-bold mb-2">
              Full Name
            </label>
            <input
              type="text"
              name="name"
              onChange={formik.handleChange}
              value={formik.values.name}
              className="w-full border border-gray-300 rounded-lg shadow-sm p-3 focus:outline-none focus:ring focus:ring-blue-300 transition"
              placeholder="Enter your full name"
            />
          </div>

          <div>
            <label className="block text-gray-700 text-sm font-bold mb-2">
              Email
            </label>
            <input
              type="email"
              name="email"
              onChange={formik.handleChange}
              value={formik.values.email}
              className="w-full border border-gray-300 rounded-lg shadow-sm p-3 focus:outline-none focus:ring focus:ring-blue-300 transition"
              placeholder="Enter your email"
            />
          </div>

          <div>
            <label className="block text-gray-700 text-sm font-bold mb-2">
              Password
            </label>
            <input
              type="password"
              name="password"
              onChange={formik.handleChange}
              value={formik.values.password}
              className="w-full border border-gray-300 rounded-lg shadow-sm p-3 focus:outline-none focus:ring focus:ring-blue-300 transition"
              placeholder="Create a password"
            />
          </div>

          <div>
            <label className="block text-gray-700 text-sm font-bold mb-2">
              Select Company
            </label>
            <select
              name="selectedCompany"
              onChange={(e) => {
                formik.handleChange(e);
                setShowCompanyForm(e.target.value === "not-listed");
              }}
              className="w-full border border-gray-300 rounded-lg shadow-sm p-3 focus:outline-none focus:ring focus:ring-blue-300 transition"
            >
              <option value="">--Select Company--</option>
              {/* {companies.map((company) => (
                <option key={company._id} value={company._id}>
                  {company.name}
                </option>
              ))} */}
              <option value="not-listed">Not Listed</option>
            </select>
          </div>

          {showCompanyForm && (
            <div className="bg-gray-50 p-4 rounded-lg border mt-6 shadow-md">
              <h4 className="font-semibold text-blue-600 mb-3">
                Add New Company Details
              </h4>

              <input
                type="text"
                name="companyDetails.name"
                placeholder="Company Name"
                onChange={formik.handleChange}
                value={formik.values.companyDetails.name}
                className="w-full mb-3 border p-3 rounded-md shadow-sm focus:outline-none focus:ring focus:ring-blue-300 transition"
              />

              <input
                type="text"
                name="companyDetails.website"
                placeholder="Website"
                onChange={formik.handleChange}
                value={formik.values.companyDetails.website}
                className="w-full mb-3 border p-3 rounded-md shadow-sm focus:outline-none focus:ring focus:ring-blue-300 transition"
              />

              <input
                type="text"
                name="companyDetails.email"
                placeholder="Company Email"
                onChange={formik.handleChange}
                value={formik.values.companyDetails.email}
                className="w-full mb-3 border p-3 rounded-md shadow-sm focus:outline-none focus:ring focus:ring-blue-300 transition"
              />

              <input
                type="number"
                name="companyDetails.size"
                placeholder="Size"
                onChange={formik.handleChange}
                value={formik.values.companyDetails.size}
                className="w-full mb-3 border p-3 rounded-md shadow-sm focus:outline-none focus:ring focus:ring-blue-300 transition"
              />

              <textarea
                name="companyDetails.description"
                placeholder="Description"
                onChange={formik.handleChange}
                value={formik.values.companyDetails.description}
                className="w-full mb-3 border p-3 rounded-md shadow-sm focus:outline-none focus:ring focus:ring-blue-300 transition"
              />

              <div className="grid grid-cols-2 gap-2">
                <input
                  type="text"
                  name="companyDetails.location.address"
                  placeholder="Address"
                  onChange={formik.handleChange}
                  value={formik.values.companyDetails.location.address}
                  className="border p-3 rounded-md shadow-sm focus:outline-none focus:ring focus:ring-blue-300 transition"
                />
                <input
                  type="text"
                  name="companyDetails.location.city"
                  placeholder="City"
                  onChange={formik.handleChange}
                  value={formik.values.companyDetails.location.city}
                  className="border p-3 rounded-md shadow-sm focus:outline-none focus:ring focus:ring-blue-300 transition"
                />
                <input
                  type="text"
                  name="companyDetails.location.country"
                  placeholder="Country"
                  onChange={formik.handleChange}
                  value={formik.values.companyDetails.location.country}
                  className="border p-3 rounded-md shadow-sm focus:outline-none focus:ring focus:ring-blue-300 transition"
                />
                <input
                  type="text"
                  name="companyDetails.location.area"
                  placeholder="Area"
                  onChange={formik.handleChange}
                  value={formik.values.companyDetails.location.area}
                  className="border p-3 rounded-md shadow-sm focus:outline-none focus:ring focus:ring-blue-300 transition"
                />
                <input
                  type="text"
                  name="companyDetails.location.postalCode"
                  placeholder="Postal Code"
                  onChange={formik.handleChange}
                  value={formik.values.companyDetails.location.postalCode}
                  className="border p-3 rounded-md shadow-sm focus:outline-none focus:ring focus:ring-blue-300 transition"
                />
              </div>

              <input
                type="number"
                name="companyDetails.contact"
                placeholder="Contact Number"
                onChange={formik.handleChange}
                value={formik.values.companyDetails.contact}
                className="w-full mt-3 border p-3 rounded-md shadow-sm focus:outline-none focus:ring focus:ring-blue-300 transition"
              />
            </div>
          )}

          <button
            type="submit"
            onClick={() => navigate("/recruiter/dashboard")}
            className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-3 rounded-lg font-semibold shadow-md hover:shadow-lg transition hover:from-blue-700 hover:to-purple-700"
          >
            Register
          </button>

          <p className="text-center text-sm text-gray-600 mt-4">
            Already have an account?{" "}
            <span
              onClick={() => navigate("/recruiter/login")}
              className="text-blue-500 font-bold cursor-pointer hover:underline"
            >
              Login
            </span>
          </p>
        </form>
      </div>
    </div>
  );
};

export default RecruiterRegister;
