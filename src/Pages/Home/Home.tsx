import { useState, useEffect, useRef, useLayoutEffect } from "react";
import RoutePageAnimation from "../../Components/animations/RoutePageAnimation";
import HeadingCircles from "../../Components/HeadingCircles";
import LightsBoard from "../../Components/Name";
import LightsBoardMobile from "../../Components/LightsBoardMobile";

const Home = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // const lightSize = 40;

  // const topBottomLightNumber = Math.floor(window.innerWidth / lightSize);
  // const middleSideLightNumber = Math.floor(window.innerHeight / lightSize);
  // console.log(
  //   `Top/Bottom Lights: ${topBottomLightNumber}, Middle Side Lights: ${middleSideLightNumber}`
  // );

  const contentRef = useRef<HTMLDivElement>(null);
  const [middleHeight, setMiddleHeight] = useState(0);

  useLayoutEffect(
    () => {
      if (contentRef.current) {
        const height = contentRef.current.offsetHeight;
        setMiddleHeight(height);
      }
    },
    [
      /* dependencies that could affect height, like route changes */
    ]
  );

  const lightSize = 40;
  const middleSideLightNumber = Math.floor(middleHeight / lightSize);
  let topBottomLightNumber = Math.floor(window.innerWidth / lightSize) + 1;
  if (topBottomLightNumber < 3) {
    // Ensure at least 3 lights for aesthetics
    topBottomLightNumber = 3;
  } else if (topBottomLightNumber > 20) {
    // Limit to a maximum of 10 lights for aesthetics
    topBottomLightNumber = 20;
  }

  return (
    <RoutePageAnimation>
      <div className=" pt-20 flex flex-col items-center justify-center px-4">
        <title>Muhammad Moeez | Portfolio</title>
        <meta
          name="description"
          content="Welcome to my personal portfolio. Explore my journey, skills, and featured work."
        />
        <meta
          name="keywords"
          content="developer, portfolio, software engineer, projects, skills, muhammad, moeez, tofiq, web developer, full stack developer"
        />
        <meta property="og:title" content="Home | My Developer Portfolio" />
        <meta
          property="og:description"
          content="Discover my work, personal projects, and experiences."
        />
        <meta property="og:url" content="https://moeeztofiq.com/" />
        <meta
          property="og:image"
          content="https://moeeztofiq.com/assets/images/portfolio.png"
        />
        <meta property="og:type" content="website" />
        <meta
          property="og:site_name"
          content="Muhammad Moeez | personal portfolio"
        />
        {/* Name Board */}
        <div ref={contentRef}>
          {isMobile ? (
            <LightsBoardMobile
              topBottomLightNumber={topBottomLightNumber}
              middleSideLightNumber={middleSideLightNumber}
              rotationAngle={0}
              inputText={["Muhammad Moeez"]}
            />
          ) : (
            <LightsBoard
              topBottomLightNumber={topBottomLightNumber}
              middleSideLightNumber={middleSideLightNumber}
              rotationAngle={5}
              inputText={["Muhammad Moeez"]}
            />
          )}
        </div>

        {/* Subheading */}
        <div
          id="sub_heading"
          className="z-10 text-xl md:text-2xl flex flex-row bg-amber-100 p-2 md:p-4 rounded-br-4xl 
                    rounded-tl-4xl shadow-[0_0_8px_4px_rgba(255,191,71,0.4),0_0_8px_6px_rgba(255,191,71,0.6)] mt-4 md:mt-6"
          style={{ transform: `rotate(${-10}deg)` }}
        >
          <p>Full Stack Web & App Developer</p>
        </div>

        {/* Stats Section */}
        <div className="flex flex-wrap justify-center items-center pt-10 gap-6 md:gap-10 w-full">
          <HeadingCircles
            innerHeading="1.5"
            outerText="Total Experience (Years)"
            size={32}
            duration={4000}
          />
          <HeadingCircles
            innerHeading="10+"
            outerText="Projects Completed"
            size={28}
            duration={4500}
          />
          <HeadingCircles
            innerHeading="5+"
            outerText="Technologies Mastered"
            size={30}
            duration={4000}
          />
          <HeadingCircles
            innerHeading="3"
            outerText="Open Source Contributions"
            size={26}
            duration={3500}
          />
          <HeadingCircles
            innerHeading="100%"
            outerText="Passion for Coding"
            size={32}
            duration={5000}
          />
          <HeadingCircles
            innerHeading="100%"
            outerText="Passion for Solving Problems"
            size={32}
            duration={5000}
          />
        </div>
      </div>
    </RoutePageAnimation>
  );
};

export default Home;
