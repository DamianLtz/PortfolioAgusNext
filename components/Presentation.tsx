import React, { useRef } from "react";
import { useInView } from "framer-motion";

import Moon from "../img/main/moon.png";
import ArrowDown from "../img/main/ArrowDown.svg";
import Image from "next/image";

// Utils

import { scrollTop } from "../utils/ScrollUtils";

const Presentation = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <div className="container-presentation">
      <div className="row container-cols-presentation">
        <div className="col-lg-12 position-relative">
          <h1
            className="title-presentation text-light"
            ref={ref}
            style={{
              transform: isInView ? "none" : "translateY(50px)",
              opacity: isInView ? 1 : 0,
              transition: "all 2s cubic-bezier(0.17, 0.55, 0.55, 1) 0.25s",
            }}>
            A designer who loves <br />
            perfect and simple things.
          </h1>
          <div
            className="position-absolute position-img d-none d-lg-block"
            ref={ref}>
            <Image
              src={Moon}
              alt="Luna Llena"
              className="img-fluid moon"
              style={{
                opacity: isInView ? 1 : 0,
                transition: "all 1.7s cubic-bezier(0.17, 0.55, 0.55, 1) 1s",
              }}
            />
          </div>
        </div>
      </div>
      <div className="d-flex align-items-center justify-content-center">
        <button
          className="py-3 px-4 bg-transparent border-0 rounded-circle"
          onClick={() => scrollTop()}>
          <Image src={ArrowDown} alt="Go to my proyects" />
        </button>
      </div>
    </div>
  );
};

export default Presentation;
