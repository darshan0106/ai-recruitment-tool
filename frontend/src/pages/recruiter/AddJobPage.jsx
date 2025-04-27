import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Formik, Field, Form } from "formik";
import * as Yup from "yup";
import RecruiterNavbar from "../../components/Navbar/PrivateNavBar/RecruiterNavbar";

const JobSchema = Yup.object().shape({
  role: Yup.string().required("Job title is required"),
  description: Yup.string().required("Job description is required"),
  jobType: Yup.string().required("Job type is required"),
  pay: Yup.number()
    .required("Pay is required")
    .positive("Pay must be positive"),
  skills: Yup.string().required("Skills are required"),
});

const AddJobPage = () => {
//   const navigate = useNavigate();

  const handleJobSubmit = async (values) => {
    // Make API call to save the job
    const jobData = {
      company: "loggedInCompanyId", // For simplicity, hardcoded for now
      role: values.role,
      experience: values.experience,
      skills: values.skills.split(",").map((skill) => skill.trim()),
      description: values.description,
      jobType: values.jobType,
      pay: values.pay,
      hiring: values.hiring,
      applications: [],
    };

    try {
      // Make an API call to create the job posting here
      // Example: await api.createJob(jobData);

      // After job is posted, navigate back to the dashboard
      navigate("/recruiter/dashboard");
    } catch (error) {
      console.error("Error creating job posting:", error);
    }
  };

  return (
    <>
      <RecruiterNavbar />
      <div className="max-w-5xl mx-auto px-4 py-8">
        <h2 className="text-2xl font-semibold text-blue-700 mb-6">
          Add New Job Posting
        </h2>
        <Formik
          initialValues={{
            role: "",
            experience: "0-1 years",
            skills: "",
            description: "",
            jobType: "Full-time",
            pay: "",
            hiring: true,
          }}
          validationSchema={JobSchema}
          onSubmit={handleJobSubmit}
        >
          {({ errors, touched }) => (
            <Form className="space-y-6 bg-white shadow-md p-6 rounded-lg">
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Job Title
                </label>
                <Field
                  name="role"
                  className="mt-1 block w-full border rounded-md p-2"
                />
                {errors.role && touched.role && (
                  <div className="text-red-500 text-sm">{errors.role}</div>
                )}
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Description
                </label>
                <Field
                  as="textarea"
                  name="description"
                  rows="4"
                  className="mt-1 block w-full border rounded-md p-2"
                />
                {errors.description && touched.description && (
                  <div className="text-red-500 text-sm">
                    {errors.description}
                  </div>
                )}
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Required Skills (comma-separated)
                </label>
                <Field
                  name="skills"
                  className="mt-1 block w-full border rounded-md p-2"
                />
                {errors.skills && touched.skills && (
                  <div className="text-red-500 text-sm">{errors.skills}</div>
                )}
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Job Type
                </label>
                <Field
                  as="select"
                  name="jobType"
                  className="mt-1 block w-full border rounded-md p-2"
                >
                  <option value="Full-time">Full-time</option>
                  <option value="Part-time">Part-time</option>
                  <option value="Remote">Remote</option>
                  <option value="Internship">Internship</option>
                </Field>
                {errors.jobType && touched.jobType && (
                  <div className="text-red-500 text-sm">{errors.jobType}</div>
                )}
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Pay (in ₹)
                </label>
                <Field
                  name="pay"
                  type="number"
                  className="mt-1 block w-full border rounded-md p-2"
                />
                {errors.pay && touched.pay && (
                  <div className="text-red-500 text-sm">{errors.pay}</div>
                )}
              </div>

              <div>
                <label className="flex items-center text-sm font-medium text-gray-700">
                  <Field type="checkbox" name="hiring" className="mr-2" />
                  Hiring
                </label>
              </div>

              <div className="flex gap-4">
                <button
                  type="submit"
                  className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700"
                >
                  Post Job
                </button>
                <button
                  type="button"
                  className="text-gray-600 border px-6 py-2 rounded hover:bg-gray-100"
                  onClick={() => navigate("/recruiter/dashboard")}
                >
                  Cancel
                </button>
              </div>
            </Form>
          )}
        </Formik>
      </div>
    </>
  );
};

export default AddJobPage;
