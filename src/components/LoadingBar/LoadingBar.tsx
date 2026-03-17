import React from "react";
import "./LoadingBar.css";

interface LoadingBarProps {
  isLoading: boolean;
}

const LoadingBar: React.FC<LoadingBarProps> = ({ isLoading }) => {
  return (
    <div className={`loading-overlay ${isLoading ? "visible" : "hidden"}`}>
      <div className="loading-container">
        <div className="loading-bar">
          <div className="loading-progress"></div>
        </div>
        <p className="loading-text">Carregando...</p>
      </div>
    </div>
  );
};

export default LoadingBar;
