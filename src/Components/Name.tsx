import React from "react";
// import LightCircle from "./LightCircle";

const LightCircle = () => {
  return (
    <span className="h-[24px] w-[25px] bg-amber-200 rounded-4xl inline-block m-0.5 shadow-[0_0_8px_4px_rgba(255,191,71,0.4),0_0_8px_6px_rgba(255,191,71,0.6)]"
    />
  );
};

interface props {
  topBottomLightNumber: number;
  middleSideLightNumber: number;
  inputText: string[];
  rotationAngle: number;
}

const LightsBoard: React.FC<props> = ({
  topBottomLightNumber,
  middleSideLightNumber,
  inputText,
  rotationAngle,
}) => {
  return (
    <div
      id="red"
      className="bg-red-400 border rounded-2xl flex justify-center items-center flex-col mt-12 shadow-[0_0_30px_18px_rgba(255,0,0,0.5),0_0_30px_rgba(255,0,0,0.7)]"
      style={{ transform: `rotate(${rotationAngle}deg)` }}
    >
      <div
        id="topLayer"
        className="px-1 pt-1 flex justify-center items-center flex-row"
      >
        {Array.from({ length: topBottomLightNumber }).map((_, index) => (
          <LightCircle key={index} />
        ))}
      </div>
      <div
        id="middleLayer"
        className="px-1 p-0 flex flex-row justify-between items-center w-[100%]"
      >
        <div id="rightLights" className="flex flex-col ">
          {Array.from({ length: middleSideLightNumber }).map((_, index) => (
            <LightCircle key={index} />
          ))}
        </div>
        <div
          id="nameSection"
          className="flex flex-col justify-center items-center  w-[100%]"
        >
          <div className="bg-amber-100 m-1 p-4 rounded-2xl  w-[95%] shadow-[0_0_8px_4px_rgba(255,191,71,0.4),0_0_8px_6px_rgba(255,191,71,0.6)]">
            <div className="flex flex-col justify-center items-center font-extrabold text-5xl text-black font-sans">
              {inputText.map((line: string) => (
                <p>{line}</p>
              ))}
            </div>
          </div>
        </div>
        <div id="leftLights" className="flex flex-col">
          {Array.from({ length: middleSideLightNumber }).map((_, index) => (
            <LightCircle key={index} />
          ))}
        </div>
      </div>
      <div
        id="bottomLayer"
        className="px-1 pb-1 flex justify-center items-center flex-row"
      >
        {Array.from({ length: topBottomLightNumber }).map((_, index) => (
          <LightCircle key={index} />
        ))}
      </div>
    </div>
  );
};

export default LightsBoard;
