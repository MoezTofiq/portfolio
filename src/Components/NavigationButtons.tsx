import NavigationButton from "./NavigationButton";
import { useNavigate } from "react-router-dom";

const NavigationButtons = () => {
  const navigate = useNavigate();

  return (
    <div className="flex flex-row justify-center items-center gap-28 z-10  pt-5">
      <NavigationButton
        onClick={() => navigate("/about_me")}
        tilt={15}
        text="About Me"
      />
      <NavigationButton
        onClick={() => navigate("/personal_projects")}
        tilt={-15}
        text="Work Experience"
      />
      <NavigationButton
        onClick={() => navigate("/work_experience")}
        tilt={15}
        text="Personal Projects"
      />
      <NavigationButton
        onClick={() => navigate("/credits")}
        tilt={-15}
        text="Website Credit"
      />{" "}
      <NavigationButton
        onClick={() => navigate("/contact_me")}
        tilt={15}
        text="Contact Me"
      />
    </div>
  );
};

export default NavigationButtons;
