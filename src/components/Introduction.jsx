import React, { useEffect, useState } from "react";
import "./Introduction.css";

const Introduction = () => {
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    // Trigger the animation by adding the .active class after a short delay
    const animationTimeout = setTimeout(() => {
      setIsActive(true);
    }, 1000); // Adjust the delay duration as needed

    // Start the border animation when the component mounts
    startBorderAnimation();

    return () => clearTimeout(animationTimeout); // Cleanup to avoid memory leaks
  }, []);

  // Function to add and remove the class for border animation
  const startBorderAnimation = () => {
    const paragraph = document.getElementById("animated-paragraph");
    paragraph.classList.add("border-animation");

    // Remove the class after a certain duration
    setTimeout(() => {
      paragraph.classList.remove("border-animation");
    }, 5000); // Adjust the duration as needed (in milliseconds)
  };

  return (
    <div className="introduction">
      <div className={`paragraph-container ${isActive ? "active" : ""}`}>
        <p id="animated-paragraph">
          Hello! I'm Sorin, a passionate software developer on a mission to turn
          ideas into reality through code. In this digital space, you'll find a
          collection of my projects and creations.
        </p>
      </div>
    </div>
  );
};

export default Introduction;
