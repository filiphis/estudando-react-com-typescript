import React, { ReactNode } from "react";
import ButtonStyle from "./Button.module.scss";

interface ButtonProps {
  children: ReactNode;
}

interface ButtonState {}

class Button extends React.Component<ButtonProps, ButtonState> {
  render() {
    return (
      <button className={ButtonStyle.button}>{this.props.children}</button>
    );
  }
}

export default Button;
