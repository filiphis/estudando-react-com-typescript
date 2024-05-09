import React, { ReactNode } from "react";
import ButtonStyle from "./Button.module.scss";

// interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {

// }

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  children: ReactNode;
};

interface ButtonState {
  onClick?: () => void;
}

class Button extends React.Component<ButtonProps, ButtonState> {
  render() {
    const { onClick } = this.props;
    return (
      <button onClick={onClick} className={ButtonStyle.button}>
        {this.props.children}
      </button>
    );
  }
}

export default Button;
