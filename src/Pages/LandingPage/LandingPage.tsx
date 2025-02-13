import LightsBoard from "../../Components/Name";

const LandingPage = () => {
  return (
    <div className="flex justify-center items-center">
      <LightsBoard
        topBottomLightNumber={20}
        middleSideLightNumber={5}
        rotationAngle={5}
        inputText={["Muhammad Moeez"]}
      />
    </div>
  );
};

export default LandingPage;
