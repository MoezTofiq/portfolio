import { useEffect, useRef, useState } from "react";
import NavigationButton from "./NavigationButton";
import { useNavigate } from "react-router-dom";

const buttons = [
  "Home",
  "About Me",
  "Work Experience",
  "Personal Projects",
  "Website Credit",
  "Contact Me",
];

const NavigationButtons = () => {
  const navigate = useNavigate();
  const [selected, setSelected] = useState(1);
  const isFirstRender = useRef(true); //this is used to prevent the useEffect from running on the first render

  useEffect(() => {
    if (isFirstRender.current) {
      isFirstRender.current = false;
      console.log("first render");
      return;
    } else {
      switch (selected) {
        case 1:
          navigate("/");
          console.log("home");
          break;
        case 2:
          navigate("about_me");
          console.log("about me");
          break;
        case 3:
          navigate("personal_projects");
          console.log("personal projects");
          break;
        case 4:
          navigate("work_experience");
          console.log("work experience");
          break;
        case 5:
          navigate("credits");
          console.log("credits");
          break;
        case 6:
          navigate("contact_me");
          console.log("contact me");
          break;
        default:
          console.log("route not found");
          break;
      }
    }
  }, [selected]);

  return (
    <div className="z-10 absolute bottom-0 right-5">
      <div className="flex flex-row justify-center items-center gap-5 z-10 transition-all duration-300 m-14">
        {buttons.map((button, index) => (
          <NavigationButton
            key={index + 1}
            text={button}
            index={index + 1}
            isSelected={selected === index + 1}
            setSelected={setSelected}
          />
        ))}
      </div>
    </div>
  );
};

export default NavigationButtons;
