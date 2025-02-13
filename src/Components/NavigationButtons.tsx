import NavigationButton from "./NavigationButton";

const NavigationButtons = () => {
  return (
    <div
      className="flex flex-row justify-center items-center gap-36 rounded-3xl bg-amber-100 z-10 p-2 
    shadow-[0_0_10px_8px_rgba(255,191,71,0.4),0_0_10px_8px_rgba(255,191,71,0.6)] hover:shadow-[0_0_20px_8px_rgba(255,191,71,0.4),0_0_20px_8px_rgba(255,191,71,0.6)]  transition-all duration-300"
    >
      <NavigationButton tilt={8} text="temp" />
      <NavigationButton tilt={-8} text="temp" />
      <NavigationButton tilt={8} text="temp" />
      <NavigationButton tilt={8} text="temp" />
    </div>
  );
};

export default NavigationButtons;
