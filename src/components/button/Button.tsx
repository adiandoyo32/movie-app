import React from "react";

import "./button.scss"

interface ButtonProps {
  className?: string;
  onClick?: () => void;
  children?: React.ReactNode;
}

const Button: React.FC<ButtonProps> = ({ className, onClick, children }) => {
  return (
    <button className={`btn ${className}`} onClick={onClick}>
      {children}
    </button>
  );
};

export const OutlineButton: React.FC<ButtonProps> = ({
  className,
  onClick,
  children,
}) => {
  return (
    <Button className={`btn-outline ${className}`} onClick={onClick}>
      {children}
    </Button>
  );
};

export default Button;
