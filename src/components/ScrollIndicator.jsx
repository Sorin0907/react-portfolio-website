import React, { useState, useEffect } from "react";
import "./ScrollIndicator.css"; // Import your CSS for styling

const ScrollIndicator = () => {
  const [scrollPosition, setScrollPosition] = useState(0);
  const [indicatorVisible, setIndicatorVisible] = useState(true);

  // Update the scroll position when the user scrolls
  const handleScroll = () => {
    const currentPosition = window.scrollY;
    setScrollPosition(currentPosition);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const windowHeight = window.innerHeight;
  const documentHeight = document.body.clientHeight;

  // Determine whether the indicator should be visible
  const shouldShowIndicator = scrollPosition < documentHeight - windowHeight;

  // Update the indicator's visibility state
  useEffect(() => {
    setIndicatorVisible(shouldShowIndicator);
  }, [shouldShowIndicator]);

  const indicatorStyle = {
    opacity: indicatorVisible ? 1 : 0,
    transition: "opacity 0.2s ease-in-out, transform 0.2s ease-in-out",
    transform: `translateY(${scrollPosition}px)`,
  };

  return (
    <div className="scroll-indicator" style={indicatorStyle}>
      <span className="text">Scroll for more</span>
      <div className="arrow">
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="arrow-icon"
        >
          <path d="M5 19l7-7-7-7" />
        </svg>
      </div>
    </div>
  );
};

export default ScrollIndicator;
