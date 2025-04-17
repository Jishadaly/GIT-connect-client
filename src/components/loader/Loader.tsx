// src/components/Loader.tsx
import React from 'react';
import './loader.css';

interface LoaderProps {
  message?: string;  // Optional message prop
}

const Loader: React.FC<LoaderProps> = ({ message = "Loading..." }) => {
  return (
    <div className="loader-container">
      <div className="loader">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
      <p className="loader-message">{message}</p>
    </div>
  );
};

export default Loader;
