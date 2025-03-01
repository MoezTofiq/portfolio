import React, { useEffect, useState } from "react";
import LightCircle from "./LightCircle";

interface props {
  topBottomLightNumber: number;
  middleSideLightNumber: number;
  inputText: string[];
  rotationAngle: number;
  image?: React.ReactElement;
}

const LightsBoardMobile: React.FC<props> = ({
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
  }, [totalLights]);

  return (
    <div
      className="bg-red-400 border rounded-xl flex justify-center items-center flex-col mt-8 
                 shadow-[0_0_20px_10px_rgba(255,0,0,0.5)] w-[90vw] p-2 relative"
      style={{ transform: `rotate(${rotationAngle}deg)` }}
    >
      {/* Top Lights */}
      <div className="flex justify-center">
        {Array.from({ length: topBottomLightNumber }).map((_, index) => (
          <LightCircle key={index} isActive={index % 2 === activeLight % 2} />
        ))}
      </div>

      {/* Middle Section with Side Lights */}
      <div className="flex flex-row items-center justify-between w-full relative">
        {/* Left Side Lights */}
        <div className="flex flex-col">
          {Array.from({ length: middleSideLightNumber }).map((_, index) => (
            <LightCircle
              key={index}
              isActive={!(index % 2 === activeLight % 2)}
            />
          ))}
        </div>

        {/* Name Section */}
        <div
          className="bg-amber-100 m-1 p-3 rounded-lg w-full max-w-[75%] 
                        shadow-[0_0_6px_3px_rgba(255,191,71,0.4)]"
        >
          <div
            className="flex flex-col justify-center items-center font-extrabold text-2xl 
                          text-black font-sans text-center"
          >
            {inputText.map((line, i) => (
              <p key={i}>{line}</p>
            ))}
            {image}
          </div>
        </div>

        {/* Right Side Lights */}
        <div className="flex flex-col">
          {Array.from({ length: middleSideLightNumber }).map((_, index) => (
            <LightCircle key={index} isActive={index % 2 === activeLight % 2} />
          ))}
        </div>
      </div>

      {/* Bottom Lights */}
      <div className="flex justify-center">
        {Array.from({ length: topBottomLightNumber }).map((_, index) => (
          <LightCircle key={index} isActive={index % 2 === activeLight % 2} />
        ))}
      </div>
    </div>
  );
};

export default LightsBoardMobile;
