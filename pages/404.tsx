import React, { useEffect } from "react";
import Link from "next/link";
import { Container } from "react-bootstrap";
import Img404 from "../img/Miscellaneous/moria404.jpeg";
import Image from "next/image";
import { useRouter } from "next/router";

const NotFound = () => {
  const router = useRouter();

  useEffect(() => {
    setTimeout(() => {
      router.replace("/");
    }, 5000);
  }, [router]);

  return (
    <Container>
      <div className="notFound-container">
        <div>
          <Image src={Img404} alt={"La One (?)"} priority={true} />
          <h1 className="text-center pt-4">Ups! Ruta No Encontrada!</h1>
          <Link href={"/"} className="fs-1 text-center py-3 w-100">
            Volver al Inicio
          </Link>
        </div>
      </div>
    </Container>
  );
};

export default NotFound;
