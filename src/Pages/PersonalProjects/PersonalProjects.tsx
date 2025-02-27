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
    <>
      {projects.map((project, index) => (
        <div
          key={index}
          className="bg-white shadow sm:rounded-lg sm:overflow-hidden m-3 p-2"
        >
          <div className="px-4 sm:px-0">
            <h3 className="text-base/7 font-semibold text-gray-900">
              {project.title}
            </h3>
            <p className="mt-1 max-w-2xl text-sm/6 text-gray-500">
              {project.description}
            </p>
          </div>

          {/* Technology Used */}
          <div className="mt-6 border-t border-gray-100">
            <dl className="divide-y divide-gray-100">
              <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                <dt className="text-sm/6 font-medium text-gray-900">
                  Technology used
                </dt>
                <dd className="mt-1 text-sm/6 text-gray-700 sm:col-span-2 sm:mt-0">
                  <ul className="list-disc pl-5">
                    {project.technology.map((tech, techIndex) => (
                      <li key={techIndex}>
                        <a className="textUnderLine transition-all duration-300">
                          {tech}
                        </a>
                      </li>
                    ))}
                  </ul>
                </dd>
              </div>
            </dl>
          </div>

          {/* Features */}
          <div className="mt-6 border-t border-gray-100">
            <dl className="divide-y divide-gray-100">
              <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                <dt className="text-sm/6 font-medium text-gray-900">
                  Features
                </dt>
                <dd className="mt-1 text-sm/6 text-gray-700 sm:col-span-2 sm:mt-0">
                  <ul className="list-disc pl-5">
                    {project.features.map((feature, featureIndex) => (
                      <li key={featureIndex}>
                        <a className="textUnderLine transition-all duration-300">
                          {feature}
                        </a>
                      </li>
                    ))}
                  </ul>
                </dd>
              </div>
            </dl>
          </div>
        </div>
      ))}
    </>
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
      <div className="flex flex-col items-center justify-start w-full h-full z-10">
        <div className="bg-white shadow sm:rounded-lg sm:overflow-hidden m-3 p-2">
          <div className="px-4 sm:px-0">
            <h3 className="text-base/7 font-semibold text-gray-900">
              Personal Projects
            </h3>
          </div>
        </div>

        {/* Pass the projects array */}
        <ProjectComponent projects={projects} />
      </div>
    </RoutePageAnimation>
  );
};

export default PersonalProjects;
