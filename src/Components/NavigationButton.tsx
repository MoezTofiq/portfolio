const NavigationButton: React.FC<{
  text: string;
  index: number;
  isSelected: boolean;
  setSelected: (index: number) => void;
}> = ({ text, index, isSelected, setSelected }) => {
  return (
    <div
      className="flex flex-row items-center cursor-pointer transition-all duration-300"
      onClick={() => setSelected(index)}
    >
      {/* Label - centered on the extended line */}
      <div
        className={`relative w-40 flex justify-end transition-all duration-300`}
      >
        <span
          className={`absolute right-2 -translate-y-1/2 top-1/2 text-nowrap text-lg transition-all duration-300 ${
            isSelected
              ? "opacity-100 scale-100 text-amber-100 [text-shadow:_0_1px_30px_rgb(246_255_0_/_90%)]"
              : "opacity-0 scale-90"
          }`}
        >
          {text}
        </span>
      </div>

      {/* Line */}
      <div
        className={`flex justify-center transition-all duration-300 ${
          isSelected ? "h-28" : "h-12"
        }`}
      >
        <div
          className={`w-1 transition-all duration-300 border-1 rounded-2xl ${
            isSelected
              ? "bg-amber-200 shadow-[0_0_8px_4px_rgba(255,191,71,0.4),0_0_8px_6px_rgba(255,191,71,0.6)]"
              : "bg-white "
          }`}
        />
      </div>

      {/* Index number */}
      <div className={`ml-3 text-white text-lg`}>{index}.</div>
    </div>
  );
};

export default NavigationButton;

// <div className="relative flex items-center justify-center transition-all duration-300">
// <div
//   className={`transition-all duration-500  border-1 rounded-2xl${
//     isSelected ? "rotate-180 w-28 h-1" : " w-1 h-16"
//   } ${
//     isSelected
//       ? "bg-amber-200 shadow-[0_0_8px_4px_rgba(255,191,71,0.4),0_0_8px_6px_rgba(255,191,71,0.6)]"
//       : "bg-white"
//   }`}
// />
// </div>
