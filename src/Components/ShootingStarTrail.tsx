import React, { useEffect, useState } from "react";

const ShootingStarTrail: React.FC = () => {
  const [, setMousePosition] = useState({ x: 0, y: 0 });
  const [trail, setTrail] = useState<{ x: number; y: number; id: string }[]>(
    []
  );

  // Handle mouse movement
  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      const { clientX, clientY } = event;
      setMousePosition({ x: clientX, y: clientY });

      // Add a new trail point
      setTrail((prevTrail) => [
        ...prevTrail,
        {
          x: clientX,
          y: clientY,
          id: Math.random().toString(36).substring(2, 9),
        },
      ]);

      // Limit trail length
      if (trail.length > 10) {
        setTrail((prevTrail) => prevTrail.slice(1));
      }
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [trail]);

  return (
    <div className="fixed top-0 left-0 w-full h-full pointer-events-none blur-lg">
      {trail.map((point) => (
        <div
          key={point.id}
          className="absolute rounded-full bg-amber-100 opacity-70"
          style={{
            width: "10px",
            height: "10px",
            top: `${point.y - 5}px`,
            left: `${point.x - 5}px`,
            animation: "fadeOut 1s ease-out forwards",
          }}
        />
      ))}
    </div>
  );
};

export default ShootingStarTrail;
