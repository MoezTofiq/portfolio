import LightsBoard from "../../Components/Name";

const LandingPage = () => {
  return (
    <div className="flex justify-center items-center">
      <LightsBoard
        topBottomLightNumber={40}
        middleSideLightNumber={3}
        rotationAngle={5}
        text="Muhammad Moeez is a Full Stack Developer"
      />
    </div>
  );
};

export default LandingPage;
