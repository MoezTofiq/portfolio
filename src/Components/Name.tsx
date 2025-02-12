import React from "react";
import LightCircle from "./LightCircle";

interface props {
  topBottomLightNumber: number;
  middleSideLightNumber: number;
  text: string;
  rotationAngle: number;
}

const LightsBoard: React.FC<props> = ({
  topBottomLightNumber,
  middleSideLightNumber,
  text,
  rotationAngle,
}) => {
  return (
    <div
      id="red"
      className={`bg-red-400 border rounded-2xl flex justify-center items-center flex-col mt-12`}
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
          <div className="bg-blue-200 m-1 p-4 rounded-2xl  w-[95%]">
            <div className="flex flex-col justify-center items-center">
              {text}
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
