import React, { useState } from "react";
import "./Select.css";

interface Option {
  label: string;
  value: string;
}

interface SelectProps {
  options: Option[];
  label?: string;
  value?: string;
  onChange: (value: string) => void;
}

const Select: React.FC<SelectProps> = ({ options, label, value, onChange }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selected, setSelected] = useState(value || "");

  const handleSelect = (val: string) => {
    setSelected(val);
    onChange(val);
    setIsOpen(false);
  };

  return (
    <div className="select-container">
      {label && <label className="select-label">{label}</label>}
      <div className="select-box" onClick={() => setIsOpen(!isOpen)}>
        {selected
          ? options.find((opt) => opt.value === selected)?.label
          : "Select an option"}
        <span className="arrow">&#9662;</span>
      </div>
      {isOpen && (
        <ul className="select-menu">
          {options.map((option) => (
            <li key={option.value} onClick={() => handleSelect(option.value)}>
              {option.label}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Select;
