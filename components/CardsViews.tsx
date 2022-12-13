import React from "react";
import Image from "next/image";
import Col from "react-bootstrap/Col";

import FlechaV from "../img/main/FlechaV.svg";
import { TCardsViews } from "../utils/types";

const CardsViews = ({ title, description, viewOn }: TCardsViews) => {
  return (
    <Col xl={6} lg={12} md={12} sm={12}>
      <div className="border border-white rounded">
        <div className="p-4">
          <h2 className="py-1 fs-4">{title}</h2>
          <p className="py-1">{description}</p>
        </div>
        <div className="d-flex align-items-center px-4 py-3 border-white border-top">
          <p className="text-view me-2">{viewOn}</p>
          <Image src={FlechaV} alt="Go to Medium" />
        </div>
      </div>
    </Col>
  );
};

export default CardsViews;
