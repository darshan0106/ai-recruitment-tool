import React from "react";
import RecruiterDashboard from "./pages/recruiter/RecruiterDashboard";
import JobDetailsPage from "./pages/recruiter/JobDetailsPage";
import RecruiterProfilePage from "./pages/recruiter/RecruiterProfilePage";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import RecruiterLoginPage from "./pages/recruiter/RecruiterLoginPage";
import RecruiterRegisterPage from "./pages/recruiter/RecruiterRegisterPage";
import AddJobPage from "./pages/recruiter/AddJobPage";
import CandidateLoginPage from "./pages/candidate/CandidateLoginPage";
import CandidateRegisterPage from "./pages/candidate/CandidateRegisterPage";
import CandidateDashboard from "./pages/candidate/CandidateDashboard";
import CandidateJobs from "./pages/candidate/CandidateJobs";
import CandidateJobDetails from "./pages/candidate/CandidateJobDetails";
import CandidateProfile from "./pages/candidate/CandidateProfile";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route element={<Home />} path="/" />
          <Route element={<RecruiterLoginPage />} path="/recruiter/login" />
          <Route
            element={<RecruiterRegisterPage />}
            path="/recruiter/register"
          />
          <Route element={<RecruiterDashboard />} path="/recruiter/dashboard" />
          <Route element={<JobDetailsPage />} path="/recruiter/jobDetails" />
          <Route element={<RecruiterProfilePage />} path="/recruiter/profile" />
          <Route element={<AddJobPage />} path="/recruiter/addJobPost" />
          <Route
            element={<JobDetailsPage />}
            path="/recruiter/jobDetailsPage"
          />
          <Route element={<CandidateLoginPage />} path="/candidate/login" />
          <Route
            element={<CandidateRegisterPage />}
            path="/candidate/register"
          />
          <Route element={<CandidateDashboard />} path="candidate/dashboard" />
          <Route element={<CandidateJobs />} path="candidate/jobs" />
          <Route
            element={<CandidateJobDetails />}
            path="candidate/jobdetails"
          />
          <Route element={<CandidateProfile />} path="candidate/profile" />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
