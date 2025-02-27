import { useEffect, useRef, useState } from "react";
import NavigationButton from "./NavigationButton";
import { useNavigate, useLocation } from "react-router-dom";

const buttons = [
  { name: "Home", path: "/" },
  { name: "About Me", path: "/about_me" },
  { name: "Work Experience", path: "/work_experience" },
  { name: "Personal Projects", path: "/personal_projects" },
  { name: "Website Credit", path: "/credits" },
  { name: "Contact Me", path: "/contact_me" },
];

const NavigationButtons = () => {
  const navigate = useNavigate();
  const location = useLocation();

  // Find the index of the current path to set as initial selected value
  const getInitialIndex = () => {
    const index = buttons.findIndex((btn) => btn.path === location.pathname);
    return index !== -1 ? index + 1 : 1; // Default to 1 if not found
  };

  const [selected, setSelected] = useState(getInitialIndex);
  const isFirstRender = useRef(true);

  useEffect(() => {
    if (isFirstRender.current) {
      isFirstRender.current = false;
      console.log("first render - no navigation");
      return;
    }

    const selectedButton = buttons[selected - 1]; // Adjust for 1-based index
    if (selectedButton) {
      navigate(selectedButton.path);
      console.log(`Navigating to ${selectedButton.name}`);
    }
  }, [selected]);

  return (
    <div className="z-10 fixed bottom-0 right-5">
      <div className="flex flex-row justify-center items-center gap-5 z-10 transition-all duration-300 m-14 bg-[#1D1522]/70 backdrop-blur-md p-1 rounded-xl shadow-lg">
        {buttons.map((button, index) => (
          <NavigationButton
            key={index + 1}
            text={button.name}
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
