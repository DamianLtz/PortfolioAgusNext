import React, { useRef } from "react";
import { useInView } from "framer-motion";
import Image from "next/image";

import { tagsSecondProyect } from "../pages/api/listOfTags";

import Button from "./ButtonLink";
import Tag from "./Tag";
import Flecha from "../img/main/Flecha.svg";
import img from "../img/main/proyectoDos.png";

const SegundoProyecto = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <div className="row container-proyectos">
      <div className="col-lg-6">
        <h3>Quiero!</h3>
        <p className="description-proyect">
          A case study where me and my team improved the expiration of points in
          the benefits product, Quiero!
        </p>
        <div className="d-flex align-items-center">
          {tagsSecondProyect.map((tag) => {
            return <Tag key={tag} content={tag} />;
          })}
        </div>
        <div className="d-flex">
          <Button
            link="/proyect/2"
            className="button-view-proyect button-animate"
            content="View proyect"
            id="goToUno">
            <Image src={Flecha} alt="" className="ms-2" />
          </Button>
        </div>
      </div>
      <div className="col-lg-6 d-flex justify-content-end align-items-center">
        <Image
          src={img}
          alt="Segundo Proyecto"
          className="img-fluid mt-5 mt-lg-0"
          id="segundoProyecto"
          ref={ref}
          style={{
            transform: isInView ? "none" : "translateY(50px)",
            opacity: isInView ? 1 : 0,
            transition: "all 0.85s cubic-bezier(0.17, 0.55, 0.55, 1) 0.25s",
          }}
        />
      </div>
    </div>
  );
};

export default SegundoProyecto;
