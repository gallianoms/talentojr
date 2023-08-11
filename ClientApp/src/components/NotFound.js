import React from "react";

const NotFound = () => {
  return (
    <div className="d-flex align-items-center justify-content-center vh-90 mt-5">
      <div className="text-center">
        <h1 className="display-1 fw-bold">404</h1>
        <p className="fs-3">
          {" "}
          <span className="text-danger">Opps!</span> Pagina no encontrada.
        </p>
        <p className="lead">La pagina que buscas no existe.</p>
        <a href="/" className="btn btn-primary">
          Pagina principal
        </a>
      </div>
    </div>
  );
};

export default NotFound;
