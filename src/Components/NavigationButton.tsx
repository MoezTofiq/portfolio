const NavigationButton: React.FC<{
  text: string;
  index: number;
  isSelected: boolean;
  setSelected: (index: number) => void;
}> = ({ text, index, isSelected, setSelected }) => {
  return (
    <div
      className={`transition-all duration-300 flex flex-col  text-2xl ${
        isSelected ? "w-70 text-amber-100" : "w-20 text-white"
      } `}
      onClick={() => {
        setSelected(index);
      }}
    >
      <div
        className={`justify-end flex-nowrap  text-nowrap text-amber-100 ${
          isSelected ? "flex" : "invisible"
        }`}
      >
        <h2>{text}</h2>
      </div>
      <div className=" ">
        <hr
          className={`border-t-4 ${
            isSelected
              ? "shadow-[0_0_8px_4px_rgba(255,191,71,0.4),0_0_8px_6px_rgba(255,191,71,0.6)]"
              : ""
          }`}
        />
      </div>
      <div className="justify-start">
        <h2>{`${index}.`}</h2>
      </div>
    </div>
  );
};

export default NavigationButton;
