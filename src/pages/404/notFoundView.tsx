import React from "react";
import "./NotFound.css";

const NotFoundView: React.FC = () => {
  return (
    <div className="not-found-container">
      <h1 className="not-found-title">404</h1>
      <p className="not-found-message">Oops! The page you're looking for doesn't exist.</p>
      <a href="/" className="not-found-link">Go Home</a>
    </div>
  );
};

export default NotFoundView;
