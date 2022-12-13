import React from "react";

import { TTag } from "../utils/types";

const tag = ({ content, className }: TTag) => {
  return <p className={`tag ${className ? className : ""}`}>{content}</p>;
};

export default tag;
