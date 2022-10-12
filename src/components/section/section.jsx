import React from "react";
import "./section.css";

const SectionComponent = ({ children, backgroundColor, height, reference }) => {
  return (
    <div
      id="section"
      ref={reference ? reference : null}
      style={{ backgroundColor, height: `${height}vh` }}
    >
      {children}
    </div>
  );
};

export default SectionComponent;
