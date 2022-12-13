import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/router";
import Container from "react-bootstrap/Container";

import Footer from "../../components/Footer";
import ListaProyectos from "../api/ListaProyectos";
import Tag from "../../components/Tag";
import ButtonBack from "../../components/ButtonBack";
import NotFound from "../404";

const InformacionProyecto = () => {
  const router = useRouter();
  const proyectId = router.query.proyectId;
  const [backDark, setBackDark] = useState(false);

  const selectedProyect = ListaProyectos.find(
    (ListaProyectos) => Number(proyectId) === ListaProyectos.id
  );

  const changeBackground = () => {
    if (window.scrollY >= 875 && window.screen.width > 1272) {
      setBackDark(true);
    } else if (window.scrollY >= 650 && window.screen.width <= 1272) {
      setBackDark(true);
    } else if (window.scrollY >= 590 && window.screen.width <= 576) {
      setBackDark(true);
    } else {
      setBackDark(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", changeBackground);

    return () => {
      window.removeEventListener("scroll", changeBackground);
    };
  }, []);

  return Number(proyectId) <= ListaProyectos.length ? (
    <>
      <main>
        <section className="position-relative vh-lg-100">
          <Link href={"/"}>
            <ButtonBack className={backDark ? "button-flecha-dark" : ""} />
          </Link>
          <div className="container-presentation justify-items-center">
            <div className="row">
              <div className="col-lg-6 d-flex align-items-center justify-content-center">
                <div>
                  <h1 className="text-light title-proyect">
                    {selectedProyect?.title}
                  </h1>
                  <div className="d-flex">
                    <div className="d-flex tags-adjust">
                      {selectedProyect?.tags.map((tag: string) => {
                        return <Tag key={tag} content={tag} />;
                      })}
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-6 d-flex align-items-center">
                {selectedProyect ? (
                  <Image
                    src={selectedProyect?.image}
                    alt="Image of the proyect"
                    className="img-fluid"
                    priority={true}
                  />
                ) : (
                  <Image
                    src={"./issue.png"}
                    alt="Image of the proyect"
                    className="img-fluid"
                    priority={true}
                    width={10}
                    height={10}
                  />
                )}
              </div>
            </div>
          </div>
        </section>
        <section className="bg-light position-relative">
          <div className="container container-overview">
            <div className="row">
              <div className="col-lg-5">
                <h4 className="text-dark pb-3">Overview</h4>
                <p className="text-dark">{selectedProyect?.overview}</p>
              </div>
              <div className="col-lg-3 my-lg-0 my-4">
                <h4 className="text-dark pb-3">My Role</h4>
                <p className="text-dark">{selectedProyect?.role}</p>
              </div>
              <div className="col-lg-4">
                <h4 className="text-dark pb-3">Year</h4>
                <p className="text-dark">{selectedProyect?.year}</p>
              </div>
            </div>
          </div>
        </section>
        <section className="bg-presentation-proyect">
          <Container>
            {selectedProyect?.imagesProyect.map((image, index) => {
              return (
                <Image
                  key={index}
                  src={image}
                  alt="Images of the proyect"
                  className="img-fluid w-100"
                  placeholder="blur"
                />
              );
            })}
          </Container>
        </section>
      </main>
      <Footer />
    </>
  ) : (
    <NotFound />
  );
};

export default InformacionProyecto;
