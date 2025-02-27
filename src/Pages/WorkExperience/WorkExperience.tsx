import RoutePageAnimation from "../../Components/animations/RoutePageAnimation";
import { motion } from "framer-motion";

interface ProjectProps {
  title: string;
  description: string;
  technology: string[];
  workDone: string[];
}

interface JobProps {
  company: string;
  jobTitle: string;
  projectsWorkedOn: ProjectProps[];
  paragraphWorkedOn?: string;
  skillsUsed: string[];
  date: string;
}

const jobs: JobProps[] = [
  {
    company: "DevFlovv",
    jobTitle: "Tech Lead and Full Stack Software Engineer",
    date: "06/2023 - Present",
    projectsWorkedOn: [
      {
        title: "LivingAI",
        description:
          "Developed a WIX extension allowing users to add an AI presenter answering text & audio queries with text and video responses.",
        technology: [
          "AWS DynamoDB",
          "AWS Lambda",
          "React",
          "Google App Script",
        ],
        workDone: [
          "Developed Google Slides extension in React",
          "Built an AI chatbot with ChatGPT integration",
          "Implemented real-time video response streaming using D-ID",
        ],
      },
      {
        title: "Car Rental Management System",
        description:
          "Developed a car rental system with REST API integration and responsive UI elements.",
        technology: ["MongoDB", "REST API", "React", "PSPDFKit"],
        workDone: [
          "Designed custom UI with tables, chips, and graphs",
          "Integrated PSPDFKit for PDF uploads and edits",
        ],
      },
    ],
    skillsUsed: [
      "React",
      "Node.js",
      "MongoDB",
      "AWS",
      "Google App Script",
      "Flask",
      "ChatGPT API",
      "Digital Ocean",
    ],
  },
  {
    company: "Byonyks",
    jobTitle: "Full Stack Developer and QA Engineer",
    date: "10/2022 - 06/2023",
    projectsWorkedOn: [],
    paragraphWorkedOn:
      "Built and optimized APIs, improved mobile UI/UX in React Native, and integrated Firebase for real-time notifications.",
    skillsUsed: ["React Native", "Node.js", "AWS", "Postgres", "Firebase"],
  },
  {
    company: "LUMS - CureLogix",
    jobTitle: "Problem Researcher and Developer",
    date: "05/2022 - 09/2022",
    projectsWorkedOn: [],
    paragraphWorkedOn:
      "Researched and solved issues in Cure-logix Health Suite (CLHS), integrated FBR POS system, and customized ERPNext.",
    skillsUsed: ["ERPNext", "FRB POS", "JavaScript"],
  },
];

const WorkExperience = () => {
  return (
    <RoutePageAnimation>
      <div className="min-h-screen bg-[#FEF3C6] px-6 py-12">
        <h2 className="text-4xl font-bold text-gray-900 text-center mb-8">
          Work Experience
        </h2>
        <div className="max-w-4xl mx-auto space-y-10">
          {jobs.map((job, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="p-6 bg-white shadow-lg rounded-lg border-l-4 border-yellow-500"
            >
              <h3 className="text-xl font-semibold text-gray-900">
                {job.jobTitle}
              </h3>
              <p className="text-gray-700 font-medium">
                {job.company} | {job.date}
              </p>
              {job.paragraphWorkedOn && (
                <p className="mt-2 text-gray-800">{job.paragraphWorkedOn}</p>
              )}
              {job.projectsWorkedOn.length > 0 && (
                <div className="mt-4 space-y-4">
                  {job.projectsWorkedOn.map((project, idx) => (
                    <div
                      key={idx}
                      className="border-l-4 pl-4 border-yellow-500"
                    >
                      <h4 className="text-lg font-semibold text-gray-900">
                        {project.title}
                      </h4>
                      <p className="text-gray-800">{project.description}</p>
                      <p className="text-gray-600 mt-1">
                        <span className="font-semibold">Technologies:</span>{" "}
                        {project.technology.join(", ")}
                      </p>
                      <ul className="list-disc list-inside mt-2 text-gray-700">
                        {project.workDone.map((task, i) => (
                          <li key={i}>{task}</li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              )}
              {job.skillsUsed.length > 0 && (
                <div className="mt-4">
                  <span className="font-semibold text-gray-900">Skills:</span>
                  <div className="flex flex-wrap gap-2 mt-2">
                    {job.skillsUsed.map((skill, idx) => (
                      <span
                        key={idx}
                        className="px-3 py-1 bg-gray-200 text-gray-800 rounded-md text-sm"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </RoutePageAnimation>
  );
};

export default WorkExperience;
