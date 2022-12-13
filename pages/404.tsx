import React from "react";
import Link from "next/link";
import { Container } from "react-bootstrap";

const NotFound = () => {
  return (
    <Container>
      <div className="notFound-container">
        <div>
          <h1>Ups! Ruta No Encontrada!</h1>
          <Link href={"/"} className="fs-1 text-center py-3 w-100">Volver al Inicio</Link>
        </div>
      </div>
    </Container>
  );
};

export default NotFound;
