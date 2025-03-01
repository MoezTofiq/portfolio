import { useState, useEffect } from "react";
import RoutePageAnimation from "../../Components/animations/RoutePageAnimation";
import HeadingCircles from "../../Components/HeadingCircles";
import LightsBoard from "../../Components/Name";
import LightsBoardMobile from "../../Components/LightsBoardMobile";

const Home = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    handleResize(); // Check on initial render
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <RoutePageAnimation>
      <div className="flex flex-col items-center justify-center px-4">
        {/* Name Board */}
        {isMobile ? (
          <LightsBoardMobile
            topBottomLightNumber={
              window.innerWidth < 321 ? 9 : window.innerWidth < 376 ? 11 : 12
            }
            middleSideLightNumber={
              window.innerWidth < 321 ? 3 : window.innerWidth < 376 ? 3 : 3
            }
            rotationAngle={0}
            inputText={["Muhammad Moeez"]}
          />
        ) : (
          <LightsBoard
            topBottomLightNumber={20}
            middleSideLightNumber={5}
            rotationAngle={5}
            inputText={["Muhammad Moeez"]}
          />
        )}

        {/* Subheading */}
        <div
          id="sub_heading"
          className="z-10 text-xl md:text-2xl flex flex-row bg-amber-100 p-2 md:p-4 rounded-br-4xl rounded-tl-4xl shadow-[0_0_8px_4px_rgba(255,191,71,0.4),0_0_8px_6px_rgba(255,191,71,0.6)] mt-4 md:mt-6"
          style={{ transform: `rotate(${-10}deg)` }}
        >
          <p>Full Stack Web & App Developer </p>
        </div>

        {/* Stats Section */}
        <div className="flex flex-col md:flex-row justify-center items-center pt-10 gap-6 md:gap-10 w-full">
          <HeadingCircles
            innerHeading="1.5"
            outerText="Total Experience"
            size={32}
            duration={4000}
          />
          <HeadingCircles
            innerHeading="1"
            outerText="Total Projects Worked On"
            size={28}
            duration={4500}
          />
        </div>
      </div>
    </RoutePageAnimation>
  );
};

export default Home;
