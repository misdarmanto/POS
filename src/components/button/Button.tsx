import React from "react";
import "./Button.css";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "contained" | "outlined" | "text";
  color?: "primary" | "secondary" | "success" | "warning" | "danger" | "info";
  size?: "small" | "medium" | "large";
}

const Button: React.FC<ButtonProps> = ({
  variant = "contained",
  color = "primary",
  size = "medium",
  children,
  ...props
}) => {
  const className = `btn ${variant} ${color} ${size}`;

  return (
    <button className={className} {...props}>
      {children}
    </button>
  );
};

export default Button;
