// src/pages/RecruiterLogin.jsx
import { useFormik } from "formik";
import * as Yup from "yup";
import { Link, useNavigate } from "react-router-dom";

const RecruiterLogin = () => {
  const navigate = useNavigate();

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: Yup.object({
      email: Yup.string().email("Invalid email").required("Required"),
      password: Yup.string().required("Required"),
    }),
    onSubmit: (values) => {
      console.log("Logging in recruiter:", values);
      // Make API call here
    },
  });

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-400 to-purple-600 p-4">
      <div className="bg-white p-8 rounded-2xl shadow-2xl transform scale-100 hover:scale-105 transition-transform duration-300 w-full max-w-md">
        <h2 className="text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-500 mb-6 text-center">
          Recruiter Login
        </h2>

        <form onSubmit={formik.handleSubmit} className="space-y-6">
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
              placeholder="Enter your password"
            />
          </div>

          <button
            onClick={() => navigate("/recruiter/dashboard")}
            type="submit"
            className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-3 rounded-lg font-semibold shadow-md hover:shadow-lg transition hover:from-blue-700 hover:to-purple-700"
          >
            Login
          </button>

          <p className="text-center text-sm text-gray-600 mt-4">
            New Recruiter?{" "}
            <span
              onClick={() => navigate("/recruiter/register")}
              className="text-blue-500 font-bold cursor-pointer hover:underline"
            >
              Register here
            </span>
          </p>
        </form>
      </div>
    </div>
  );
};

export default RecruiterLogin;
