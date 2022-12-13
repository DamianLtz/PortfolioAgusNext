import React from "react";
// import img from "../img/Rights/noDisponible.png"

const NotAvailable = () => {
  return (
    <div className="d-flex align-items-center justify-content-center mt-5">
      <div className="d-flex flex-column align-items-center">
        <h1>Debe Solicitar permisos para acceder a este contenido</h1>
        {/* <img src={img} alt="" /> */}
      </div>
    </div>
  );
};

export default NotAvailable;
