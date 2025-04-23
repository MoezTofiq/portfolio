import aboutMe from "../../assets/AboutMe.svg";
import RoutePageAnimation from "../../Components/animations/RoutePageAnimation";

const AboutMe = () => {
  return (
    <RoutePageAnimation>
      <div className=" pt-20 z-10 flex flex-col lg:flex-row justify-center items-center px-6 py-12 gap-10 max-w-6xl mx-auto">
        <title>About Me | Muhammad Moeez Portfolio</title>
        <meta
          name="description"
          content="Learn about my background, development journey, and passions beyond coding."
        />
        <meta
          name="keywords"
          content="developer bio, personal story, software journey, about me"
        />
        <meta property="og:title" content="About Me | My Developer Portfolio" />
        <meta
          property="og:description"
          content="My background, skills, and what drives me as a developer."
        />
        <meta property="og:url" content="https://moeeztofiq.com/about_me" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="About Me | My Developer Portfolio"
        />
        <meta
          name="twitter:description"
          content="My background, skills, and what drives me as a developer."
        />

        {/* Image & Centered Heading Section */}
        <div className="relative flex justify-center items-center w-full lg:w-1/3">
          <div className="relative w-40 sm:w-56 md:w-72 lg:w-80">
            <img
              src={aboutMe}
              alt="About Me"
              className="w-full filter drop-shadow-[0_0_10px_rgba(255,191,71,0.8)] brightness-110"
            />
            {/* Centered "About Me" Text with Transparent Background */}
            <div className="absolute top-0  bottom-0 right-0 left-0 flex items-center justify-center ">
              <p className="flex items-center justify-center   md:text-5xl sm:text-3xl font-sans font-extrabold text-amber-900 bg-amber-100 p-4 md:mb-10 rounded-br-4xl rounded-tl-4xl shadow-[0_0_8px_4px_rgba(255,191,71,0.4),0_0_8px_6px_rgba(255,191,71,0.6)]">
                About Me
              </p>
            </div>
          </div>
        </div>

        {/* Text Content Section */}
        <div className="w-full lg:w-2/3 space-y-6 text-base sm:text-lg font-mono text-gray-900 bg-amber-100 rounded-bl-3xl rounded-tr-3xl p-6 sm:p-8 shadow-lg">
          <p>
            I’m a{" "}
            <span className="font-bold">Full Stack Software Engineer</span> with
            a passion for building high-quality, scalable applications. I
            started as a <span className="font-bold">MERN developer</span> at a
            startup and have since grown into a{" "}
            <span className="font-bold">Tech Lead</span>, managing multiple
            projects and teams to drive impactful solutions.
          </p>
          <p>
            The technologies I work with include{" "}
            <span className="font-bold">
              JavaScript, TypeScript, React, Node.js, Express, MongoDB, SQL,
              Python (Flask), Java, and C++
            </span>
            . Beyond web development, I also build mobile applications and
            browser extensions, constantly exploring new ways to enhance user
            experiences.
          </p>
          <p>
            I thrive in fast-paced environments, balancing multiple projects
            while ensuring clean, maintainable code. As a{" "}
            <span className="font-bold">quick learner</span>, I’m always eager
            to take on new challenges and expand my skill set.
          </p>
          <p>
            Outside of work, I immerse myself in{" "}
            <span className="font-bold">
              music production, learning guitar, and game development
            </span>
            , always finding new ways to blend creativity with technology and
            express myself.
          </p>
          <p className="text-2xl sm:text-3xl font-semibold text-amber-900">
            Let’s build something amazing! 🚀
          </p>
        </div>
      </div>
    </RoutePageAnimation>
  );
};

export default AboutMe;
