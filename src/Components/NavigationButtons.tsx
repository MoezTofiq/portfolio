import NavigationButton from "./NavigationButton";

const NavigationButtons = () => {
  return (
    <div className="flex flex-row justify-center items-center gap-28 rounded-3xl bg-red-900 z-10 p-2 transition-all duration-300 shadow-[0_0_10px_8px_rgba(255,0,0,0.5),0_0_10px_rgba(255,0,0,0.7)]">
      <NavigationButton tilt={15} text="About Me" />
      <NavigationButton tilt={-15} text="Work Experience" />
      <NavigationButton tilt={15} text="Personal Projects" />
      <NavigationButton tilt={-15} text="Website Credit" />
    </div>
  );
};

export default NavigationButtons;
