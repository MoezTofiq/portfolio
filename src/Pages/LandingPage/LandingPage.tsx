import LightsBoard from "../../Components/Name";

import NavigationButtons from "../../Components/navigationButtons";

const LandingPage = () => {
  return (
    <div className="flex justify-center items-center flex-col gap-20 z-10">
      <LightsBoard
        topBottomLightNumber={20}
        middleSideLightNumber={5}
        rotationAngle={5}
        inputText={["Muhammad Moeez"]}
      />
      <NavigationButtons />
    </div>
  );
};

export default LandingPage;
