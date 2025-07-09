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
        title: "Lyfers",
        description:
          "Led development of a full-stack community + e-commerce platform with admin panel, Printful integration, payment gateways, and dynamic QR code generation.",
        technology: ["React", "Node.js", "SQL", "Printful", "Stripe", "PayPal"],
        workDone: [
          "Designed complete architecture and database schema",
          "Led team of 2 engineers through development and delivery",
          "Managed client demos, requirements, and technical documentation",
          "Integrated third-party services (Printful, Stripe, PayPal)",
        ],
      },
      {
        title: "STL Fleet Management System",
        description:
          "Led development of and Stabilized and extended a legacy fleet system by fixing critical bugs and adding new features across frontend and backend.",
        technology: ["React", "Node.js"],
        workDone: [
          "Audited codebase and resolved major bugs",
          "Added scalable features for fleet tracking and data handling",
          "Mentored junior developer to ensure code stability",
        ],
      },
      {
        title: "BuildClub",
        description:
          "Modernized a legacy codebase and built a cross-browser extension to scrape and sync user data from major US stores.",
        technology: ["React", "GraphQL", "Browser Extension APIs"],
        workDone: [
          "Refactored and updated outdated code",
          "Developed DOM injection and dynamic content extraction features",
          "Led a team of 3 developers in UI and backend integration",
        ],
      },
      {
        title: "LivingAI",
        description:
          "WIX extension that allows users to add an AI presenter who answers queries via text & video.",
        technology: [
          "AWS DynamoDB",
          "AWS Lambda",
          "React",
          "Google App Script",
        ],
        workDone: [
          "Built AI chatbot using ChatGPT",
          "Developed Google Slides extension in React",
          "Streamed video responses via D-ID integration",
        ],
      },
      {
        title: "Car Rental Management System",
        description:
          "System for managing rental inventory, booking, and document uploads.",
        technology: ["MongoDB", "REST API", "React", "PSPDFKit"],
        workDone: [
          "Custom UI with tables, chips, and graphs",
          "Integrated PSPDFKit for PDF upload/edit",
        ],
      },
      {
        title: "Auto Fitness Logger",
        description:
          "A nutrition tracking web app that uses Flask, ChatGPT, and WhatsApp API for real-time food analysis and syncs with Google Sheets.",
        technology: ["Flask", "React", "ChatGPT API", "Google Sheets API"],
        workDone: [
          "Built full-stack Flask + React app",
          "Integrated WhatsApp API for real-time logging",
          "Used ChatGPT for nutritional parsing and feedback",
        ],
      },
    ],
    skillsUsed: [
      "React",
      "Node.js",
      "MongoDB",
      "SQL",
      "GraphQL",
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
      "Refactored backend APIs, improved React Native app UI/UX, integrated Gmail and Firebase services, and implemented unit/E2E testing using Jest.",
    skillsUsed: [
      "React Native",
      "Node.js",
      "AWS",
      "Postgres",
      "Firebase",
      "Jest",
    ],
  },
  {
    company: "LUMS - CureLogix",
    jobTitle: "Problem Researcher and Developer",
    date: "05/2022 - 09/2022",
    projectsWorkedOn: [],
    paragraphWorkedOn:
      "Integrated Pakistan’s FBR POS system into ERPNext and maintained CureLogix Health Suite (CLHS) by resolving issues and documenting feature requests.",
    skillsUsed: ["ERPNext", "FBR POS", "JavaScript"],
  },
];

const WorkExperience = () => {
  return (
    <RoutePageAnimation>
      <div className="pt-20 min-h-screen bg-[#FEF3C6] px-6 py-12">
        <title>Work Experience | My Developer Portfolio</title>
        <meta
          name="description"
          content="An overview of my professional experience, roles, and contributions in tech."
        />
        <meta
          name="keywords"
          content="developer experience, job history, tech roles, full-stack"
        />
        <meta
          property="og:title"
          content="Work Experience | My Developer Portfolio"
        />
        <meta
          property="og:description"
          content="Check out the companies I’ve worked at and what I did there."
        />
        <meta
          property="og:url"
          content="https://your-domain.com/work_experience"
        />
        <meta name="twitter:card" content="summary_large_image" />
        <h2 className="text-4xl font-bold text-gray-900 text-center mb-8">
          My Professional Journey
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
