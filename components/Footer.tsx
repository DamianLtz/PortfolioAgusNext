import React, { useState } from "react";
import Link from "next/link";
import ButtonEmailInitial from "./Footer/ButtonEmailInitial";
import ButtonEmailClicked from "./Footer/ButtonEmailClicked";

import { AnimatePresence, motion } from "framer-motion";

const Footer = () => {
  const [emailClicked, setEmailClicked] = useState(false);

  const changeEmailButton = () => {
    setEmailClicked(true);
    navigator.clipboard.writeText("agustinfrancoietta@gmail.com");
    setTimeout(() => {
      setEmailClicked(false);
    }, 3500);
  };

  return (
    <footer>
      <div className="container">
        <div className="row footer">
          <div className="col-lg-12 col-md-12 col-sm-12">
            <div className="d-flex flex-column align-items-center justify-content-center h-100">
              <h2 className="title-footer text-light">
                Let&apos;s work together
              </h2>
              <p className="fs-5 pb-5">
                {`Contact me for jobs, freelance projects or say hi :)`}
              </p>
              <AnimatePresence initial={false} mode="popLayout">
                {!emailClicked ? (
                  <motion.div
                    key={"ButtonEmailInitial"}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    onClick={() => changeEmailButton()}>
                    <ButtonEmailInitial />
                  </motion.div>
                ) : (
                  <motion.div
                    key={"ButtonEmailClicked"}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}>
                    <ButtonEmailClicked />
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>
        </div>
        <div className="row py-5">
          <div className="col-lg-6 col-md-6 col-sm-12 order-md-1 g-0">
            <ul className="d-flex align-items-center justify-content-center justify-content-md-end redes">
              <li>
                <Link
                  href="https://www.linkedin.com/in/agustin-ietta/"
                  target="_blank"
                  rel="noreferrer"
                  className="position-relative">
                  LinkedIn
                </Link>
              </li>
              <li>
                <Link
                  href={"./CV_Agustin_Ietta.pdf"}
                  target="_blank"
                  rel="noreferrer"
                  className="position-relative">
                  Download CV
                </Link>
              </li>
              <li>
                <Link
                  href="https://agustinietta.medium.com"
                  target="_blank"
                  rel="noreferrer"
                  className="position-relative">
                  Medium
                </Link>
              </li>
              <li>
                <Link
                  href="https://dribbble.com/geniusaturn"
                  target="_blank"
                  rel="noreferrer"
                  className="position-relative">
                  Dribble
                </Link>
              </li>
            </ul>
          </div>
          <div className="col-lg-6 col-md-6 col-sm-12 me-auto pt-4 pt-md-0 d-flex align-items-center justify-content-md-start justify-content-center">
            <h6 className="text-muted fw-normal text-center text-lg-start">
              Designed by me & developed by{" "}
              <span>
                <a
                  href="https://portfolio-zeta-topaz-63.vercel.app/"
                  target="_blank"
                  rel="noreferrer"
                  className="text-muted developed pt-2">
                  Damian Laterza
                </a>
              </span>
            </h6>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
