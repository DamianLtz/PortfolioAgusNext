import React from "react";
import Link from "next/link";

import Row from "react-bootstrap/Row";
import ButtonBack from "../components/ButtonBack";
import { contentCards } from "./api/contentCards";
import CardsViews from "../components/CardsViews";

const UnknownComponent = () => {
  return (
    <main>
      <Link href={"/"}>
        <ButtonBack />
      </Link>
      <section className="container">
        <div className="d-flex flex-column justify-content-center height-container">
          <h1 className="text-center fw-bold">
            Choose your preference
            <br />
            to continue
          </h1>
          <Row className="g-4">
            {contentCards.map((card) => {
              return (
                <CardsViews
                  key={card.title}
                  title={card.title}
                  description={card.description}
                  viewOn={card.viewOn}
                />
              );
            })}
          </Row>
        </div>
      </section>
    </main>
  );
};

export default UnknownComponent;
