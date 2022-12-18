import React, { useRef } from "react";
import { useInView } from "framer-motion";
import Image from "next/image";
import ListaProyectos from "../pages/api/ListaProyectos";
import { TProyect } from "../utils/types";

import Button from "./ButtonLink";
import Tag from "./Tag";
import Flecha from "../img/main/Flecha.svg";

const SecondaryProyects = ({ proyectName, order }: TProyect) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const proyect = ListaProyectos.find(
    (ListaProyectos) => proyectName === ListaProyectos.title
  );

  return proyect ? (
    <div className="row container-proyectos">
      <div className={`col-lg-6 ${order ? "order-2" : ""}`}>
        <h3 className={order ? "text-lg-end" : ""}>{proyect.title}</h3>
        <p className={`${order ? "text-lg-end" : ""} description-proyect`}>
          {proyect.overviewHome}
        </p>
        <div
          className={`d-flex align-items-center ${
            order ? "justify-content-lg-end" : ""
          }`}>
          {proyect.tags.map((tag) => {
            return <Tag key={tag} content={tag} />;
          })}
        </div>
        <div className={`d-flex ${order ? "justify-content-lg-end" : ""}`}>
          <Button
            link={`/proyect/${proyect.id}`}
            className="button-view-proyect button-animate"
            content="View proyect">
            <Image src={Flecha} alt="" className="ms-2" />
          </Button>
        </div>
      </div>
      <div
        className={`col-lg-6 d-flex align-items-center ${
          !order ? "justify-content-end" : "justify-content-start"
        }`}>
        <Image
          src={proyect.image}
          alt={proyect.alt}
          className={`img-fluid ${!order ? "mt-5 mt-lg-0" : "mb-3"}`}
          ref={ref}
          style={{
            transform: isInView ? "none" : "translateY(50px)",
            opacity: isInView ? 1 : 0,
            transition: "all 0.85s cubic-bezier(0.17, 0.55, 0.55, 1) 0.25s",
          }}
        />
      </div>
    </div>
  ) : null;
};

export default SecondaryProyects;
