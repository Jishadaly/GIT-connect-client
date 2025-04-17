import React from 'react';
import './PrimaryButton.css';

interface PrimaryButtonProps {
  text: string;
  onClick: () => void;
  styleProps?: React.CSSProperties;
}

const PrimaryButton: React.FC<PrimaryButtonProps> = ({ text, onClick, styleProps }) => {
  return (
    <button
      className="primary-btn"
      onClick={onClick}
      style={styleProps}
    >
      {text}
    </button>
  );
};

export default PrimaryButton;
