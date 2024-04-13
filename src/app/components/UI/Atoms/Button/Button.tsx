import React from "react";
import styles from "./Button.module.scss";

interface ButtonProps {
  text: string;
}
const Button = ({ text, ...rest }: ButtonProps) => {
  return (
    <button
      className={`
    ${styles.button}
`}
    >
      {text}
    </button>
  );
};

export default Button;
