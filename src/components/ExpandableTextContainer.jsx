import React, { useState } from "react";
import "./ExpandableTextContainer.css";

const ExpandableComponent = () => {
  const [expanded, setExpanded] = useState(false);

  const toggleExpansion = () => {
    setExpanded(!expanded);
  };

  const textContent = `I am a multidisciplinary professional with a solid foundation in
  mechatronic and robotic engineering, complemented by intensive training
  from a software development bootcamp. Currently, I am furthering my
  expertise through a Level 4 software development apprenticeship. This
  combination of skills and experiences has uniquely equipped me for a
  dynamic role as a junior software developer. My academic journey in
  mechatronic and robotic engineering has provided me with a strong
  technical background, emphasizing problem-solving, automation, and
  control systems. Additionally, my dedication to software development led
  me to complete an intensive bootcamp, where I gained proficiency in
  programming languages, web development frameworks, and software
  engineering principles. As an apprentice in software development, I am
  actively applying my knowledge and skills in real-world scenarios,
  collaborating with experienced professionals, and enhancing my abilities
  in areas such as software architecture, application development, and
  system integration. I am a quick learner who thrives in challenging
  environments, and I am passionate about creating innovative solutions
  that bridge the gap between hardware and software. My diverse background
  enables me to approach problems from a holistic perspective, allowing me
  to develop efficient and effective software solutions. With a commitment
  to continuous learning and a passion for technology, I am eager to
  contribute my unique blend of engineering and software development
  expertise to a dynamic team. I am excited to take on new challenges and
  make a meaningful impact in the ever-evolving world of software
  development.`;

  return (
    <div className={`expandable-container ${expanded ? "expanded" : ""}`}>
      <div className="left-section">
        <h2>Left Section</h2>
        <div className={`text-content ${expanded ? "expanded" : ""}`}>
          {textContent}
        </div>
      </div>
      <div className="expand-button">
        <button onClick={toggleExpansion}>
          {expanded ? "Collapse" : "Expand"}
        </button>
      </div>
    </div>
  );
};

export default ExpandableComponent;
