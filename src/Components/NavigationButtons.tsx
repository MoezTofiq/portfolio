import { useState } from "react";
import NavigationButton from "./NavigationButton";
import { useNavigate } from "react-router-dom";

const NavigationButtons = () => {
  const navigate = useNavigate();
  const [selected, setSelected] = useState(1);
  // onClick={() => navigate("/about_me")}
  // onClick={() => navigate("/personal_projects")}
  // onClick={() => navigate("/work_experience")}
  // onClick={() => navigate("/credits")}
  // onClick={() => navigate("/contact_me")}

  return (
    <div className="flex flex-row justify-center items-center gap-5 z-10  pt-5 transition-all duration-300 p-10">
      <NavigationButton
        tilt={15}
        text="About Me"
        index={1}
        isSelected={selected === 1}
        setSelected={setSelected}
      />
      <NavigationButton
        tilt={-15}
        text="Work Experience"
        index={2}
        isSelected={selected === 2}
        setSelected={setSelected}
      />
      <NavigationButton
        tilt={15}
        text="Personal Projects"
        index={3}
        isSelected={selected === 3}
        setSelected={setSelected}
      />
      <NavigationButton
        tilt={-15}
        text="Website Credit"
        index={4}
        isSelected={selected === 4}
        setSelected={setSelected}
      />{" "}
      <NavigationButton
        tilt={15}
        index={5}
        isSelected={selected === 5}
        setSelected={setSelected}
        text="Contact Me"
      />
    </div>
  );
};

export default NavigationButtons;
