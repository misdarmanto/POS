import React from "react";
import "./button.css";

interface ButtonProps {
  label?: string;
  variant?: "primary" | "secondary" | "outlined" | "icon";
  size?: "small" | "medium" | "large";
  rounded?: boolean;
  icon?: React.ReactNode;
  onClick?: () => void;
  disabled?: boolean;
}

const Button: React.FC<ButtonProps> = ({
  label,
  variant = "primary",
  size = "medium",
  rounded = false,
  icon,
  onClick,
  disabled = false,
}) => {
  return (
    <button
      className={`custom-button ${variant} ${size} ${
        rounded ? "rounded" : ""
      } ${icon && !label ? "icon-only" : ""}`}
      onClick={onClick}
      disabled={disabled}
    >
      {icon && <span className="button-icon">{icon}</span>}
      {label && <span className="button-label">{label}</span>}
    </button>
  );
};

export default Button;
