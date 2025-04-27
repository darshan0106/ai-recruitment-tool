import { Briefcase, CalendarDays, Users, Trash2 } from "lucide-react";

const JobPostingCard = ({ job, onDelete }) => {
  const { _id, title, companyName, createdAt, totalApplicants } = job;

  const formattedDate = new Date(createdAt).toLocaleDateString("en-IN", {
    year: "numeric",
    month: "short",
    day: "numeric",
  });

  const handleDeleteClick = () => {
    if (confirm("Are you sure you want to delete this job posting?")) {
      onDelete(_id); // Pass jobId to parent handler
    }
  };

  return (
    <div className="bg-white shadow-lg rounded-2xl p-6 border border-gray-200 hover:shadow-xl hover:-translate-y-1 transform transition relative">
      {/* Delete Button */}
      <button
        onClick={handleDeleteClick}
        className="absolute top-4 right-4 text-red-500 hover:text-red-700 bg-red-100 hover:bg-red-200 rounded-full p-1 transition"
        title="Delete Job Posting"
      >
        <Trash2 className="w-5 h-5" />
      </button>

      {/* Card Content */}
      <div className="flex flex-col gap-4">
        {/* Job Title */}
        <div className="flex items-center gap-2 text-2xl font-bold text-blue-800">
          <Briefcase className="w-6 h-6 text-blue-500" />
          <span>{title}</span>
        </div>

        {/* Company Name */}
        <p className="text-gray-600 text-md italic">{companyName}</p>

        {/* Metadata */}
        <div className="flex justify-between items-center text-sm mt-4">
          {/* Posted Date */}
          <div className="flex items-center gap-2 text-gray-500">
            <CalendarDays className="w-5 h-5 text-blue-400" />
            <span className="font-medium">Posted on {formattedDate}</span>
          </div>

          {/* Total Applicants */}
          <div className="flex items-center gap-2 text-gray-500">
            <Users className="w-5 h-5 text-green-500" />
            <span className="font-medium">{totalApplicants} Applicants</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JobPostingCard;
