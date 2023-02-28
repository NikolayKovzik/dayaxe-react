import React from "react";
import "./default-button.scss";
import { DefaultButtonProps } from "./models";

function DefaultButton({ className, children, ...props }: DefaultButtonProps) {
  return (
    <button className={className.join(" ")} {...props}>
      {children}
    </button>
  );
}

export default DefaultButton;
