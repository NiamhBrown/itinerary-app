import React from "react";

// A simple SVG logo placeholder
const Logo: React.FC = () => (
  <svg
    width="40"
    height="40"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className="text-[#E94E1B]"
  >
    <path
      d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M12 10.5C13.3807 10.5 14.5 9.38071 14.5 8C14.5 6.61929 13.3807 5.5 12 5.5C10.6193 5.5 9.5 6.61929 9.5 8C9.5 9.38071 10.6193 10.5 12 10.5Z"
      fill="currentColor"
    />
  </svg>
);

export const Header: React.FC = () => {
  return (
    <header className="w-full max-w-4xl py-6 mb-6 sm:mb-10 flex flex-col items-center">
      <div className="flex items-center space-x-3">
        <Logo />
        <h1
          className="text-4xl sm:text-5xl font-bold text-center text-stone-800"
          style={{ fontFamily: "'Playfair Display', serif" }}
        >
          AI Trip Planner
        </h1>
      </div>
      <p className="mt-2 text-md text-stone-600 text-center">
        Your Personal AI Travel Genie ✨
      </p>
    </header>
  );
};
