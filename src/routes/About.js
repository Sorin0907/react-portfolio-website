import React from "react";
import ExpandableComponent from "../components/ExpandableTextContainer";

const About = () => {
  const ref = React.useRef();
  
  return (
    <div ref={ref}>
      <ExpandableComponent />
    </div>
  );
};

export default About;
