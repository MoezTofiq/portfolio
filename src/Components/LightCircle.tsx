const LightCircle: React.FC<{ isActive: boolean }> = ({ isActive }) => {
  return (
    <span
      className={`h-[24px] w-[25px] bg-amber-200 rounded-4xl inline-block m-0.5 transition-all duration-300 ${
        isActive
          ? "bg-amber-200 shadow-[0_0_8px_4px_rgba(255,191,71,0.4),0_0_8px_6px_rgba(255,191,71,0.6)]"
          : "bg-amber-950 shadow-none"
      }`}
    />
  );
};

export default LightCircle;
