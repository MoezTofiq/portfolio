import RoutePageAnimation from "../../Components/animations/RoutePageAnimation";
import HeadingCircles from "../../Components/HeadingCircles";
import LightsBoard from "../../Components/Name";

const Home = () => {
  return (
    <RoutePageAnimation>
      <div>
        <div className="flex justify-center items-center flex-col  z-10">
          <LightsBoard
            topBottomLightNumber={20}
            middleSideLightNumber={5}
            rotationAngle={5}
            inputText={["Muhammad Moeez"]}
          />

          <div
            id="sub_heading"
            className="z-10 text-2xl flex flex-row bg-amber-100 p-4 rounded-br-4xl rounded-tl-4xl shadow-[0_0_8px_4px_rgba(255,191,71,0.4),0_0_8px_6px_rgba(255,191,71,0.6)]"
            style={{ transform: `rotate(${-10}deg)` }}
          >
            <p>Full Stack Web & App Developer </p>
          </div>
        </div>
        <div className="flex justify-evenly items-center flex-row pt-20 gap-10">
          <HeadingCircles
            innerHeading="1.5"
            outerText="Total Experience"
            size={40}
            duration={4000}
          />
          <HeadingCircles
            innerHeading="1"
            outerText="Total Projects Worked On"
            size={30}
            duration={4500}
          />
        </div>
      </div>
    </RoutePageAnimation>
  );
};

export default Home;
