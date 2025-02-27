import React, { ReactElement, useEffect, useState } from "react";
import LightCircle from "./LightCircle";

interface props {
  topBottomLightNumber: number;
  middleSideLightNumber: number;
  inputText: string[];
  rotationAngle: number;
  image?: ReactElement;
}

const LightsBoard: React.FC<props> = ({
  topBottomLightNumber,
  middleSideLightNumber,
  inputText,
  rotationAngle,
  image,
}) => {
  const [activeLight, setActiveLight] = useState(0);
  const totalLights = topBottomLightNumber * 2 + middleSideLightNumber * 2;

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveLight((prev) => (prev + 1) % totalLights);
    }, 500);
    return () => clearInterval(interval);
  });

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
          <LightCircle key={index} isActive={index % 2 === activeLight % 2} />
        ))}
      </div>
      <div
        id="middleLayer"
        className="px-1 p-0 flex flex-row justify-between items-center w-[100%]"
      >
        <div id="leftLights" className="flex flex-col ">
          {Array.from({ length: middleSideLightNumber }).map((_, index) => (
            <LightCircle
              key={index}
              isActive={!(index % 2 === activeLight % 2)}
            />
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
              {image}
            </div>
          </div>
        </div>
        <div id="rightLights" className="flex flex-col">
          {Array.from({ length: middleSideLightNumber }).map((_, index) => (
            <LightCircle key={index} isActive={index % 2 === activeLight % 2} />
          ))}
        </div>
      </div>
      <div
        id="bottomLayer"
        className="px-1 pb-1 flex justify-center items-center flex-row"
      >
        {Array.from({ length: topBottomLightNumber }).map((_, index) => (
          <LightCircle key={index} isActive={index % 2 === activeLight % 2} />
        ))}
      </div>
    </div>
  );
};

export default LightsBoard;
