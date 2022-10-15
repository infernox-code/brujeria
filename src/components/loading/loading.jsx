import React from "react";
import "./loading.css";

function LoadingComponent() {
  return (
    <div id="spinner">
      <>
        <div id="loading-logo">
          <span>Brujería</span>
        </div>
        <div className="loading-spinner"></div>
      </>
    </div>
  );
}

export default LoadingComponent;
