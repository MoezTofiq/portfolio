const NavigationButton: React.FC<{ text: string; tilt: number }> = ({
  text,
  tilt,
}) => {
  return (
    <div
      className="z-10 text-3xl  font-medium text-shadow  transition-all duration-300 bg-amber-100 hover:bg-amber-200 rounded-2xl p-5"
      style={{ transform: `rotate(${tilt}deg)` }}
    >
      <h2>{text}</h2>
    </div>
  );
};

export default NavigationButton;
