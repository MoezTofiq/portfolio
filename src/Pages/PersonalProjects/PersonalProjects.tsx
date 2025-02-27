import RoutePageAnimation from "../../Components/animations/RoutePageAnimation";

interface ProjectProps {
  title: string;
  description: string;
  technology: string[];
  features: string[];
}

const ProjectComponent: React.FC<{ projects: ProjectProps[] }> = ({
  projects,
}) => {
  return (
    <div className="w-full max-w-3xl">
      {projects.map((project, index) => (
        <div
          key={index}
          className="bg-white/10 backdrop-blur-lg shadow-lg rounded-2xl overflow-hidden m-5 p-6 border border-white/20 text-white transition-all duration-300 hover:bg-white/20 hover:scale-105"
        >
          <h3 className="text-xl font-semibold tracking-wide">
            {project.title}
          </h3>
          <p className="mt-2 text-gray-300 text-sm">{project.description}</p>

          {/* Technology Used */}
          <div className="mt-4 border-t border-white/20 pt-4">
            <h4 className="text-sm font-medium text-gray-200 uppercase">
              Technology Used
            </h4>
            <ul className="list-disc pl-5 text-gray-300">
              {project.technology.map((tech, techIndex) => (
                <li key={techIndex} className="hover:text-blue-300 transition">
                  {tech}
                </li>
              ))}
            </ul>
          </div>

          {/* Features */}
          <div className="mt-4 border-t border-white/20 pt-4">
            <h4 className="text-sm font-medium text-gray-200 uppercase">
              Features
            </h4>
            <ul className="list-disc pl-5 text-gray-300">
              {project.features.map((feature, featureIndex) => (
                <li
                  key={featureIndex}
                  className="hover:text-blue-300 transition"
                >
                  {feature}
                </li>
              ))}
            </ul>
          </div>
        </div>
      ))}
    </div>
  );
};

const PersonalProjects = () => {
  const projects: ProjectProps[] = [
    {
      title: "Enough",
      description: "A cross-browser content-blocking tool for social media.",
      technology: ["TypeScript", "React", "Firebase"],
      features: ["Content filtering", "Cloud sync"],
    },
    {
      title: "Candle-Light",
      description: "A cross-browser customizable blue light filter extension.",
      technology: ["JavaScript", "React", "CSS"],
      features: ["Customizable color", "Adjustable filter strength"],
    },
  ];

  return (
    <RoutePageAnimation>
      <div className="relative flex flex-col items-center justify-start w-full h-full z-10 text-white">
        {/* Section Header */}
        <div className="bg-white/10 backdrop-blur-lg shadow-lg rounded-2xl overflow-hidden m-6 p-6 border border-white/20 text-white max-w-3xl text-center">
          <h3 className="text-3xl font-bold tracking-wide">
            Personal Projects
          </h3>
          <p className="text-gray-300 mt-2 text-sm">
            A collection of personal projects I’ve worked on, blending
            creativity with technology.
          </p>
        </div>

        {/* Project List */}
        <ProjectComponent projects={projects} />
      </div>
    </RoutePageAnimation>
  );
};

export default PersonalProjects;
