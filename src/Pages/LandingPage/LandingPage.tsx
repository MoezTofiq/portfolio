import { useNavigate } from "react-router-dom";
import LightsBoard from "../../Components/Name";
import NavigationButton from "../../Components/NavigationButton";
import NavigationButtons from "../../Components/navigationButtons";
import Star from "../../Components/Star";

const LandingPage = () => {
  const navigate = useNavigate();
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
