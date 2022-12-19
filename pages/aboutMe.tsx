import React, { useRef } from "react";
import Image from "next/image";
import Head from "next/head";
import { useInView } from "framer-motion";
// Background-image:
import BgAboutMe from "../img/AboutMe/BlancoyNegro.png";
// Botones:
import ButtonBack from "../components/ButtonBack";
import ButtonLink from "../components/ButtonLinkExterno";
import Flecha from "../img/main/Flecha.svg";
import Footer from "../components/Footer";

const AboutMe = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  return (
    <>
      <Head>
        <title>Agustin Ietta | About me </title>
        <meta name="description" content="My Portfolio" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <div className="position-relative vh-lg-100">
          <Image
            src={BgAboutMe}
            alt=""
            className="img-fluid w-100 img-aboutMe"
            priority={true}
            ref={ref}
            style={{
              opacity: isInView ? 1 : 0,
              transition: "all 2s cubic-bezier(0.17, 0.55, 0.55, 1) 0.25s",
            }}
          />
          <ButtonBack />
          <h1 className="position-absolute top-50 start-50 translate-middle aboutMe fw-bold">
            About Me
          </h1>
          <p className="position-absolute">Mendoza Arg.</p>
        </div>
        <div className="container container-aboutMe">
          <div className="row">
            <div className="col-lg-6">
              <h2 className="aboutme-titulo">Hello</h2>
              <div className="aboutMe-info">
                <p className="fs-5">
                  I&apos;m Agustín, Product designer with almost 3 years of
                  experience in UX and a huge background in graphic and
                  audiovisual design.
                </p>
                <p className="fs-5">
                  I started to work on development web startup with an ambicious
                  self product. I was the first UX/UI designer. Later, to keep
                  learning, i started to work in a software factory and finally
                  as a product designer in a bank.
                </p>
                <p className="fs-5">
                  Other things about me: I love music, i can listen to it all
                  the time (really) i like to teach, im a UX/UI professor.
                </p>
              </div>
              <div className="d-flex container-buttons">
                <ButtonLink
                  className="button-aboutMe button-animate my-4"
                  content="Full profile on LinkedIn"
                  link="https://www.linkedin.com/in/agustin-ietta/">
                  <Image src={Flecha} alt="" className="ms-2 flechita" />
                </ButtonLink>
                <ButtonLink
                  className="button-download my-4"
                  content="Download CV"
                  link={"./CV_Agustin_Ietta.pdf"}>
                  <Image src={Flecha} alt="" className="ms-2 flechita" />
                </ButtonLink>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default AboutMe;
