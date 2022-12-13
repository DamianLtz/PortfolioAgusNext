import React, { useRef } from "react";
import { useInView } from "framer-motion";
import Image from "next/image";
import { tagsFirstProyect } from "../pages/api/listOfTags";

import Button from "./ButtonLink";
import Tag from "./Tag";
import ProyectoUno from "../img/main/proyectoUno.png";
import Flecha from "../img/main/Flecha.svg";

const Proyectos = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  return (
    <div className="row container-proyectos">
      <div className="col-lg-12 d-flex flex-column align-items-center">
        <Image
          src={ProyectoUno}
          alt="Primer Proyecto"
          className="img-fluid position-relative"
          id="proyectoDestacado"
          ref={ref}
          style={{
            transform: isInView ? "none" : "translateY(50px)",
            opacity: isInView ? 1 : 0,
            transition: "all 0.65s cubic-bezier(0.17, 0.55, 0.55, 1) 0.25s",
          }}
        />
        <h2>Pampa</h2>
        <p className="text-lg-center description-proyect">
          A design system for a desktop a mobile product. I started to design
          from 0, to improve consistency and reutilization in the day to day
          work.
        </p>
        <div className="d-flex align-items-center">
          {tagsFirstProyect.map((tag) => {
            return <Tag key={tag} content={tag} />;
          })}
        </div>
        <Button
          link="/proyect/1"
          className="button-view-proyect button-animate"
          content="View proyect"
          id="goToUno">
          <Image src={Flecha} alt="" className="ms-2" />
        </Button>
      </div>
    </div>
  );
};

export default Proyectos;
