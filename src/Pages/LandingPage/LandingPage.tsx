import LightsBoard from "../../Components/Name";
import NavigationButtons from "../../Components/NavigationButtons";

const LandingPage = () => {
  return (
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
        <p>Full Stack Software Developer </p>
      </div>

      <NavigationButtons />
    </div>
  );
};

export default LandingPage;
