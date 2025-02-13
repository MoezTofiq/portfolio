import NavigationButton from "./NavigationButton";

const NavigationButtons = () => {
  return (
    <div className="flex flex-row justify-center items-center gap-36 rounded-3xl bg-indigo-900 z-10 p-2 border-5">
      <NavigationButton tilt={8} text="Personal Projects" />
      <NavigationButton tilt={-8} text="Work Experience" />
      <NavigationButton tilt={8} text="Contact Me" />
      <NavigationButton tilt={8} text="Website Credits" />
    </div>
  );
};

export default NavigationButtons;
