import LightsBoard from "../../Components/Name";

const LandingPage = () => {
  return (
    <div className="flex justify-center items-center">
      <LightsBoard
        topBottomLightNumber={10}
        middleSideLightNumber={4}
        rotationAngle={20}
        text="Muhammad Moeez"
      />
    </div>
  );
};

export default LandingPage;
