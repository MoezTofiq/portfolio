import NavigationButton from "./NavigationButton";

const NavigationButtons = () => {
  return (
    <div className="flex flex-row justify-center items-center gap-28 z-10  ">
      <NavigationButton tilt={15} text="About Me" />
      <NavigationButton tilt={-15} text="Work Experience" />
      <NavigationButton tilt={15} text="Personal Projects" />
      <NavigationButton tilt={-15} text="Website Credit" />
    </div>
  );
};

export default NavigationButtons;
