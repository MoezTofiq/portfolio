import LightsBoard from "../../Components/Name";

const LandingPage = () => {
  return (
    <div className="flex justify-center items-center">
      <LightsBoard
        topBottomLightNumber={20}
        middleSideLightNumber={3}
        rotationAngle={5}
        text="Muhammad Moeez"
      />
    </div>
  );
};

export default LandingPage;
