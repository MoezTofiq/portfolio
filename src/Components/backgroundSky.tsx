import React, { useEffect, useState } from "react";

interface Star {
  size: number;
  top: number;
  left: number;
  opacity: number;
}

const BackgroundSky: React.FC = () => {
  const [stars, setStars] = useState<Star[]>([]);

  useEffect(() => {
    const numStars = 350;
    const newStars: Star[] = [];

    for (let i = 0; i < numStars; i++) {
      newStars.push({
        size: Math.random() * (20 - 10) + 1, // Star size between 1px and 4px
        top: Math.random() * 100, // Random vertical position (0-100%)
        left: Math.random() * 100, // Random horizontal position (0-100%)
        opacity: Math.random() * 0.8 + 0.2, // Brightness between 0.2 and 1
      });
    }

    setStars(newStars);
  }, []);

  return (
    <div className="fixed top-0 right-0 left-0 bottom-0 z-0 bg-[#1D1522]  will-change-transform transform translate-z-0 ">
      <div className="relative w-full min-h-screen h-full bg-[#1D1522] overflow-hidden">
        {stars.map((star, index) => (
          <div
            key={`${index}_star`}
            className="fixed rounded-full bg-amber-100 shadow-lg animate-pulse "
            style={{
              width: `${star.size}px`,
              height: `${star.size}px`,
              top: `${star.top}vh`,
              left: `${star.left}vw`,
              opacity: star.opacity,
            }}
          />
        ))}
      </div>
    </div>
  );
};

export default BackgroundSky;
