import React from "react";
import Link from "next/link";
import { TButton } from "../utils/types";

const ButtonLink = ({ className, content, id, link, children }: TButton) => {
  return (
    <Link
      href={`${link}`}
      target="_blank"
      rel="noreferrer"
      className={`button d-flex align-items-center ${className}`}
      id={id}>
      {content}
      {children}
    </Link>
  );
};

export default ButtonLink;
