import React from "react";
import styles from "./Typography.module.css";

interface TypographyProps {
  variant?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "caption" | "overline";
  children: React.ReactNode;
  className?: string;
}

const Typography: React.FC<TypographyProps> = ({
  variant = "body1",
  children,
  className,
}) => {
  const Tag = variant.startsWith("h") ? variant : "p";

  return React.createElement(
    Tag,
    { className: `${styles[variant]} ${className || ""}` },
    children
  );
};

export default Typography;
