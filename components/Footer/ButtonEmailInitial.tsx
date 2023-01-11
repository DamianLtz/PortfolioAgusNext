import React from "react";
import Image from "next/image";
import emailCopyIcon from "../../img/footer/HandWaving.svg";

const ButtonEmailInitial = () => {
  return (
    <div className="button button-email position-relative d-flex align-items-center justify-content-center">
      <button className="bg-transparent border-0 text-light p-0">
        agustinfrancoietta@gmail.com
      </button>
      <button className="button button-hover d-flex align-items-center justify-content-center">
        <Image src={emailCopyIcon} alt="copy my email" className="me-2" />
        <p className="text-light">Copy email</p>
      </button>
    </div>
  );
};

export default ButtonEmailInitial;
