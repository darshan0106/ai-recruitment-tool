## Recruitment Platform 🎯

A streamlined solution for Recruiters and Candidates to simplify the hiring process
## Table of Contents
- Project Overview
- Features- Recruiter Features
- Candidate Features

- Tech Stack
- Setup Instructions
- Folder Structure
- Contributing
- License


## Project Overview
This project is a robust and intuitive recruitment tool designed to bridge the gap between job seekers and employers. It supports a dual-user system:
- Recruiters can post jobs, manage job postings, evaluate applicants, and access candidate details.
- Candidates can browse job listings, apply for jobs, track their applications, and manage their profiles with resumes.

The platform is built to provide a seamless experience for both recruiters and candidates while showcasing modern web development practices.

## Features
Recruiter Features
- Create and manage job postings (with role, experience, skills, and more).
- Review candidate applications.
- Access candidate profiles and resumes.
- Manage recruiter profiles.

Candidate Features
- Browse and filter job listings.
- Apply for jobs directly through the platform.
- Track the status of submitted applications.
- Manage profiles and upload resumes.
- View detailed job descriptions with company information.


## Tech Stack
Frontend:
- React.js (UI Library)
- Tailwind CSS (Styling)

## Backend:
- Node.js (Runtime Environment)
- Express.js (Backend Framework)

## Database:
- MongoDB (NoSQL Database)

Additional Tools:
- Formik + Yup for form handling and validation
- REST APIs for communication between frontend and backend


## Setup Instructions

## Prerequisites
Ensure you have the following installed:
- Node.js (v14+ recommended) - Download Node.js
- MongoDB - Set up MongoDB


## Clone the Repository
git clone https://github.com/your-repository/recruitment-platform.git
cd recruitment-platform



## Install Dependencies

## Backend
- Navigate to the backend folder:cd backend

- Install dependencies:npm install


## Frontend
- Navigate to the frontend folder:cd frontend

- Install dependencies:npm install



## Environment Variables
Create a .env file in the backend folder and provide the following variables:
MONGO_URI=mongodb+srv://<username>:<password>@cluster.mongodb.net/recruitment
JWT_SECRET=your_jwt_secret_key
PORT=5000



## Run the Application
## Backend
- Navigate to the backend directory:cd backend

- Start the server:npm start


## Frontend
- Navigate to the frontend directory:cd frontend

- Start the development server:npm start



## Access the Application
Once the servers are running:
- Open your browser and go to http://localhost:3000 for the frontend.
- The backend runs on http://localhost:5000.


## Folder Structure
recruitment-platform/
├── backend/
│   ├── models/         # Mongoose Schemas (Job, Company, Candidate)
│   ├── routes/         # Backend API Routes
│   ├── controllers/    # API Controllers
│   ├── server.js       # Entry Point for Backend
│   ├── .env            # Environment Variables
├── frontend/
│   ├── src/
│   │   ├── components/ # Reusable Components
│   │   ├── pages/      # App Pages (Dashboard, Login, etc.)
│   │   ├── App.js      # React Entry Point
│   │   ├── index.js    # React DOM Render
├── README.md            # Project Documentation



## Contributing
Contributions are welcome! If you have ideas or encounter any issues, feel free to:
- Fork the repository.
- Create a feature branch: git checkout -b feature-name.
- Commit changes: git commit -m "Description of feature/bug fix".
- Push the branch: git push origin feature-name.
- Open a Pull Request.


## License
This project is licensed under the MIT License. You are free to use, modify, and distribute it for personal or commercial use.
