const NavigationButton: React.FC<{ text: string; tilt: number }> = ({
  text,
  tilt,
}) => {
  return (
    <div
      className="z-10 text-3xl cursor-pointer font-medium text-shadow textUnderLine transition-all duration-300 bg-amber-100 hover:bg-amber-200 rounded-2xl p-5 hover:shadow-[0_0_8px_4px_rgba(255,191,71,0.4),0_0_8px_6px_rgba(255,191,71,0.6)]"
      style={{ transform: `rotate(${tilt}deg)` }}
    >
      <h2>{text}</h2>
    </div>
  );
};

export default NavigationButton;
