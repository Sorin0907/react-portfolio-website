import React from "react";

import Work from "../components/Work";

const Portfolio = () => {
  const ref = React.useRef();
  return (
    <div ref={ref}>
      <Work />
    </div>
  );
};

export default Portfolio;
