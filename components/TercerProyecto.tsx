import React, { useRef } from "react";
import { useInView } from "framer-motion";
import Image from "next/image";

import { tagsThirdProyect } from "../pages/api/listOfTags";

import Button from "./ButtonLink";
import Tag from "./Tag";
import Flecha from "../img/main/Flecha.svg";
import img from "../img/main/proyectoCuatro.png";

const TercerProyecto = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <div className="row container-proyectos">
      <div className="col-lg-6 order-2">
        <h3 className="text-lg-end">MercadoPOS</h3>
        <p className="text-lg-end description-proyect">
          This is a personal challengue to design MercadoPos function at
          Mercadopago and make a short experiment to validate an a hiphotesys
        </p>
        <div className="d-flex align-items-center justify-content-lg-end">
          {tagsThirdProyect.map((tag) => {
            return <Tag key={tag} content={tag} />;
          })}
        </div>
        <div className="d-flex justify-content-lg-end">
          <Button
            link="/proyect/3"
            className="button-view-proyect button-animate"
            content="View proyect"
            id="goToUno">
            <Image src={Flecha} alt="" className="ms-2" />
          </Button>
        </div>
      </div>
      <div className="col-lg-6 d-flex justify-content-start align-items-center">
        <Image
          src={img}
          alt=""
          className="img-fluid mb-3"
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

export default TercerProyecto;
