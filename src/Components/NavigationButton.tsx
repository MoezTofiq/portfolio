const NavigationButton: React.FC<{ text: string; tilt: number }> = ({
  text,
  tilt,
}) => {
  return (
    <div
      className="hover:bg-red-400 hover:shadow-[0_0_10px_8px_rgba(255,0,0,0.5),0_0_10px_rgba(255,0,0,0.7)] text-shadow transition-all duration-300 p-3 rounded-3xl"
      style={{ transform: `rotate(${tilt}deg)` }}
    >
      <div className="z-10 text-3xl cursor-pointer font-medium text-shadow textUnderLine transition-all duration-300 bg-amber-100 hover:bg-amber-200 rounded-2xl p-5 hover:shadow-[0_0_8px_4px_rgba(255,191,71,0.4),0_0_8px_6px_rgba(255,191,71,0.6)]">
        <h2>{text}</h2>
      </div>
    </div>
  );
};

export default NavigationButton;
