import React from "react";
import "./Input.css";

interface InputProps {
  label?: string;
  placeholder?: string;
  type?: string;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  fullWidth?: boolean;
  error?: boolean;
  helperText?: string;
}

const Input: React.FC<InputProps> = ({
  label,
  placeholder,
  type = "text",
  value,
  onChange,
  fullWidth = false,
  error = false,
  helperText = "",
}) => {
  return (
    <div className={`input-container ${fullWidth ? "full-width" : ""}`}>
      {label && <label className="input-label">{label}</label>}
      <input
        type={type}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className={`input-field ${error ? "input-error" : ""}`}
      />
      {helperText && (
        <p className={`helper-text ${error ? "error-text" : ""}`}>
          {helperText}
        </p>
      )}
    </div>
  );
};

export default Input;
