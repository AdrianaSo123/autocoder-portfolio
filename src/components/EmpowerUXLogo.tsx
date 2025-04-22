import React from "react";

// Clean EmpowerUX wordmark logo: brand colors, no icon
export default function EmpowerUXLogo({ size = 48 }: { size?: number }) {
  // Proportional scaling for wordmark
  const width = size * 4.2;
  const height = size;
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 200 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-label="EmpowerUX logo"
      style={{ display: 'block' }}
    >
      {/* Empower in brand blue */}
      <text
        x="0"
        y="34"
        fontFamily="Inter, Arial, sans-serif"
        fontSize="32"
        fontWeight="bold"
        fill="#246BCE"
        letterSpacing="-1"
      >
        Empower
      </text>
      {/* UX in accent orange, spaced after Empower */}
      <text
        x="145"
        y="34"
        fontFamily="Inter, Arial, sans-serif"
        fontSize="32"
        fontWeight="bold"
        fill="#FFB43A"
        letterSpacing="-1"
      >
        UX
      </text>
    </svg>
  );
}
