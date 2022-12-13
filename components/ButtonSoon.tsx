import React from "react";
import { TButton } from "../utils/types";

const ButtonLink = ({ className, content, id, children }: TButton) => {
  return (
    <button
      className={`button d-flex align-items-center justify-content-center ${className}`}
      id={id}>
      {content}
      {children}
    </button>
  );
};

export default ButtonLink;
