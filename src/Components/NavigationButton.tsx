const NavigationButton: React.FC<{ text: string; tilt: number }> = ({
  text,
  tilt,
}) => {
  return (
    <div
      className="z-10 text-3xl text-amber-100 font-semibold text-shadow  transition-all duration-300 bg-indigo-900 hover:bg-indigo-950 rounded-2xl p-5"
      style={{ transform: `rotate(${tilt}deg)` }}
    >
      <h2>{text}</h2>
    </div>
  );
};

export default NavigationButton;
