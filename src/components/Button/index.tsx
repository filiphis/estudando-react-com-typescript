import React from "react";
import ButtonStyle from "./Button.module.scss";

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  children: React.ReactNode;
};

const Button: React.FC<ButtonProps> = ({ children, ...props }) => {
  return (
    <button {...props} className={ButtonStyle.button}>
      {children}
    </button>
  );
};

export default Button;
