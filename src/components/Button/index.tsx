import React from "react";
import "./style.scss";

interface ButtonProps {}

interface ButtonState {}

class Button extends React.Component<ButtonProps, ButtonState> {
  render() {
    return <button className="button">Enviar</button>;
  }
}

export default Button;
