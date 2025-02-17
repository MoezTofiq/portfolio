import React from "react";

interface HeadingCirclesProps {
  innerHeading: string;
  outerText: string;
  size: number;
  duration: number; // Duration in milliseconds
}

const HeadingCircles: React.FC<HeadingCirclesProps> = ({
  innerHeading,
  outerText,
  size,
  duration,
}) => {
  return (
    <div id="container" className="font-sans">
      <div
        id="circleOuter"
        className="flex justify-center items-center relative z-10 flex-col gap-2"
      >
        <div
          id="circle"
          className={`flex justify-center items-center rounded-full bg-amber-100 text-3xl shadow-[0_0_8px_4px_rgba(255,191,71,0.4),0_0_8px_6px_rgba(255,191,71,0.6)] animate-pulse transition-all`}
          style={{
            width: `calc(var(--spacing) * ${size})`,
            height: `calc(var(--spacing) * ${size})`,
            animationDuration: `${duration}ms`, // Set animation duration dynamically
          }}
        >
          {innerHeading}
        </div>
        <div className="text-amber-200 text-xl">{outerText}</div>
      </div>
    </div>
  );
};

export default HeadingCircles;