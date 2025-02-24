import aboutMe from "../../assets/AboutMe.svg";

const AboutMe = () => {
  return (
    <div className="z-10 flex flex-col md:flex-row justify-center items-center p-8 gap-10">
      <div className="relative md:w-1/3 flex flex-col justify-center items-center">
        <img
          src={aboutMe}
          alt="About Me"
          className="mt-4 w-40 md:w-4xl filter drop-shadow-[0_0_10px_rgba(255,191,71,0.8)] brightness-110"
        />
        <h1
          // style={{ transform: `rotate(${-15}deg)` }}
          className="absolute text-4xl md:text-5xl font-sans font-extrabold text-amber-900 bg-amber-100 p-4 md:mb-10 rounded-br-4xl rounded-tl-4xl shadow-[0_0_8px_4px_rgba(255,191,71,0.4),0_0_8px_6px_rgba(255,191,71,0.6)]"
        >
          About Me
        </h1>
      </div>

      <div className="md:w-2/3 space-y-4 justify-center items-center text-lg font-mono text-gray-900 bg-amber-100 rounded-bl-4xl rounded-tr-4xl p-4 shadow-[0_0_8px_4px_rgba(255,191,71,0.4),0_0_8px_6px_rgba(255,191,71,0.6)]">
        <p>
          I’m a <span className="font-bold">Full Stack Software Engineer</span>{" "}
          with a passion for building high-quality, scalable applications. I
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
          . Beyond web development, I also build mobile applications and browser
          extensions, constantly exploring new ways to enhance user experiences.
        </p>
        <p>
          I thrive in fast-paced environments, balancing multiple projects while
          ensuring clean, maintainable code. As a{" "}
          <span className="font-bold">quick learner</span>, I’m always eager to
          take on new challenges and expand my skill set.
        </p>
        <p>
          Outside of work, I immerse myself in{" "}
          <span className="font-bold">
            music production, learning guitar, and game development
          </span>
          , always finding new ways to blend creativity with technology and
          express myself.
        </p>
        <p className="text-3xl font-semibold text-amber-900">
          Let’s build something amazing! 🚀
        </p>
      </div>
    </div>
  );
};

export default AboutMe;
