import RoutePageAnimation from "../../Components/animations/RoutePageAnimation";

interface ProjectProps {
  title: string;
  description: string;
  technology: string[];
  features: string[];
  links: {
    chrome?: string;
    firefox?: string;
    edge?: string;
  };
}

const getBrowser = () => {
  if (navigator.userAgent.includes("Firefox")) return "firefox";
  if (navigator.userAgent.includes("Edg")) return "edge";
  if (navigator.userAgent.includes("Chrome")) return "chrome";
  return null;
};

const ProjectComponent: React.FC<{ projects: ProjectProps[] }> = ({
  projects,
}) => {
  const browser = getBrowser();

  const handleProjectClick = (links: ProjectProps["links"]) => {
    const url = browser ? links[browser] : null;
    if (url) window.open(url, "_blank");
    else alert("No store link available for your browser.");
  };

  return (
    <div className="w-full max-w-3xl">
      {projects.map((project, index) => (
        <div
          key={index}
          className="bg-white/10 backdrop-blur-lg shadow-lg rounded-2xl overflow-hidden m-5 p-6 border border-white/20 text-white transition-all duration-300 hover:bg-white/20 hover:scale-105 cursor-pointer"
          onClick={() => handleProjectClick(project.links)}
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
      title: "WhiteBoard Pro",
      description:
        "An in-page drawing extension with screenshot support, built for seamless annotations on any website.",
      technology: ["React", "Canvas API", "Plasmo"],
      features: [
        "Freehand drawing",
        "Screenshot capture",
        "Cross-browser support",
      ],
      links: {
        chrome:
          "https://chromewebstore.google.com/detail/whiteboard-pro-%E2%80%93-draw-on/bjckpemkhnokkmeecfokigjedmbfiopa",
        firefox:
          "https://addons.mozilla.org/en-US/firefox/addon/whiteboard-pro-on-any-site/",
        edge: "https://microsoftedge.microsoft.com/addons/detail/whiteboard-pro-%E2%80%93-draw-on-/ggllelpkknpjihheinnealgcieeefdjh",
      },
    },
    {
      title: "Candle-Light",
      description:
        "A blue light filter extension with customizable color and intensity. Designed to reduce eye strain across any webpage.",
      technology: ["JavaScript", "React", "Plasmo"],
      features: ["Custom color", "Adjustable strength", "Scheduling"],
      links: {
        chrome:
          "https://chromewebstore.google.com/detail/candle-light-bluelight-fi/ibpadkmccjflegicdgmlamljkbedmlpk",
        firefox:
          "https://addons.mozilla.org/en-US/firefox/addon/candle-light-bluelight-filter/",
        edge: "https://microsoftedge.microsoft.com/addons/detail/candle-light-bluelight-/gjdpaepkkcpboaecohngfoijfpclncah",
      },
    },
    {
      title: "Enough",
      description:
        "A distraction-blocker extension that removes addictive content from social media feeds.",
      technology: ["TypeScript", "React", "Supabase"],
      features: ["Content filtering", "Cloud sync", "Device persistence"],
      links: {
        firefox:
          "https://addons.mozilla.org/en-US/firefox/addon/enough-control-your-feed/",
        edge: "https://microsoftedge.microsoft.com/addons/detail/enough/omjbnmlafmfaglacmkbikffokaelkjcc",
      },
    },
    {
      title: "Reddit Shorts Automation",
      description:
        "An automated pipeline that generates AI-based story videos using Reddit-style prompts and uploads them to YouTube as Shorts.",
      technology: [
        "Python",
        "FFmpeg",
        "TTS",
        "Whisper",
        "OpenAI/Gemini",
        "Ollama",
      ],
      features: [
        "LLM story generation",
        "Voiceover + transcription",
        "Video creation & auto-upload",
      ],
      links: {},
    },
    {
      title: "Object Detection for the Visually Impaired",
      description:
        "A mobile tool combining depth and object recognition with real-time voice navigation to assist visually impaired users.",
      technology: ["MidasNet", "YoloAct", "Google Speech API"],
      features: [
        "Real-time object detection",
        "Depth sensing",
        "Audio feedback",
      ],
      links: {},
    },
  ];

  return (
    <RoutePageAnimation>
      <div className="pt-20 relative flex flex-col items-center justify-start w-full h-full z-10 text-white">
        <title>Personal Projects | My Developer Portfolio</title>
        <meta
          name="description"
          content="A showcase of my passion projects — browser extensions, mobile apps, and experiments."
        />
        <meta
          name="keywords"
          content="personal projects, side projects, extensions, apps, developer work"
        />
        <meta
          property="og:title"
          content="Personal Projects | My Developer Portfolio"
        />
        <meta
          property="og:description"
          content="Explore the tools and software I’ve built in my free time."
        />
        <meta
          property="og:url"
          content="https://your-domain.com/personal_projects"
        />
        <meta name="twitter:card" content="summary_large_image" />
        {/* Section Header */}
        <div className="bg-white/10 w-full backdrop-blur-lg shadow-lg rounded-2xl overflow-hidden m-6 p-6 border border-white/20 text-white max-w-3xl text-center">
          {/* <h4 className="text-3xl font-bold tracking-wide">
            Personal Projects
          </h4> */}
          <p className="text-4xl font-bold mt-2">Made with Curiosity</p>
        </div>

        {/* Project List */}
        <ProjectComponent projects={projects} />
      </div>
    </RoutePageAnimation>
  );
};

export default PersonalProjects;
