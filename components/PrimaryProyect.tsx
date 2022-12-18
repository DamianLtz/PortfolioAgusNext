import React, { useRef } from "react";
import Image from "next/image";
import { useInView } from "framer-motion";
import ListaProyectos from "../pages/api/ListaProyectos";
import { TProyect } from "../utils/types";
import { v4 as uuidv4 } from "uuid";

import Button from "./ButtonLink";
import Tag from "./Tag";
import Flecha from "../img/main/Flecha.svg";

const Proyectos = ({ proyectName }: TProyect) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const proyect = ListaProyectos.find(
    (ListaProyectos) => proyectName === ListaProyectos.title
  );

  return proyect ? (
    <div className="row container-proyectos">
      <div className="col-lg-12 d-flex flex-column align-items-center">
        <Image
          src={proyect.image}
          alt={proyect.alt}
          className="img-fluid position-relative"
          ref={ref}
          style={{
            transform: isInView ? "none" : "translateY(50px)",
            opacity: isInView ? 1 : 0,
            transition: "all 0.65s cubic-bezier(0.17, 0.55, 0.55, 1) 0.25s",
          }}
        />
        <h2>{proyect.title}</h2>
        {proyect.overviewHome.split(/[\r\n]+/).map((text) => (
          <p className="text-lg-center description-proyect" key={uuidv4()}>
            {text}
          </p>
        ))}
        <div className="d-flex align-items-center">
          {proyect.tags.map((tag) => {
            return <Tag key={tag} content={tag} />;
          })}
        </div>
        <Button
          link="/unknownComponent"
          className="button-view-proyect button-animate"
          content="View proyect">
          <Image src={Flecha} alt="" className="ms-2" />
        </Button>
      </div>
    </div>
  ) : null;
};

export default Proyectos;
