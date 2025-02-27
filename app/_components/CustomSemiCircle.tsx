import React from "react";

interface CustomSemiCircleProps {
  value: number; // Progress percentage (0 to 100)
  color: string; // Color of the progress bar
}

const CustomSemiCircle: React.FC<CustomSemiCircleProps> = ({
  value,
  color,
}) => {
  const radius = 40; // Radius of the arc
  const circumference = Math.PI * radius; // Circumference of the semi-circle (πr)
  const progress = (value / 100) * circumference; // Amount filled

  return (
    <div className="relative w-28 h-14">
      <svg width="100%" height="100%" viewBox="0 0 100 50">
        {/* Background Arc (Gray) */}
        <path
          d="M 10 50 A 40 40 0 0 1 90 50"
          fill="none"
          stroke="#E5E7EB"
          strokeWidth="10"
        />

        {/* Progress Arc (Dynamic Color) */}
        <path
          d="M 10 50 A 40 40 0 0 1 90 50"
          fill="none"
          stroke={color}
          strokeWidth="10"
          strokeDasharray={`${circumference}, ${circumference}`} // Define full length
          strokeDashoffset={circumference - progress} // Adjust fill
          strokeLinecap="round"
        />
      </svg>

      {/* Centered Text */}
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-gray-700 text-lg font-bold">
        {value}%
      </div>
    </div>
  );
};

export default CustomSemiCircle;
