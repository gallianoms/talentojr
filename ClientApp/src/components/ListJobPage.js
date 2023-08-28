/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable jsx-a11y/anchor-is-valid */
import { useState } from "react";
import { useEffect } from "react";
import React from "react";

const ListJob = () => {
  const [companies, setCompanies] = useState([]);
  const companyId = JSON.parse(localStorage.getItem("user"));

  useEffect(() => {
    const fetchData = async () => {
      const url = new URL("https://64e8aae299cf45b15fdff78c.mockapi.io/offers");
      url.searchParams.append("companyId", companyId.id.toString());

      const res = await fetch(url, {
        method: "GET",
        headers: { "content-type": "application/json" },
      });

      if (res.ok) {
        const data = await res.json();
        setCompanies(data);
      }
    };

    fetchData();
  }, []);

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return `${date.getFullYear()}-${(date.getMonth() + 1)
      .toString()
      .padStart(2, "0")}-${date.getDate().toString().padStart(2, "0")}`;
  };

  const handleDeleteOffer = (offerId) => {
    fetch(`https://64e8aae299cf45b15fdff78c.mockapi.io/offers/${offerId}`, {
      method: "DELETE",
    })
      .then((response) => {
        if (response.ok) {
          setCompanies((prevOffers) =>
            prevOffers.filter((offer) => offer.id !== offerId)
          );
        }
      })
      .catch((error) => {
        console.error("Error deleting offer:", error);
      });
  };

  return (
    <section className="intro">
      <div className="bg-image mt-5">
        <div className=" d-flex align-items-center">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-12">
                <h1 className="mb-3">Lista de ofertas</h1>
                {companies.length === 0 ? ( // Check if companies array is empty
                  <div className="text-center">
                    <p>No hay ofertas disponibles.</p>
                    <a href="/crear-empleo" className="btn btn-primary">
                      Publicar nueva oferta
                    </a>
                  </div>
                ) : (
                  <div className="card">
                    <div className="card-body p-0">
                      <div data-mdb-perfect-scrollbar="true">
                        <table className="table table-striped mb-0">
                          <thead>
                            <tr>
                              <th scope="col">Nombre de la oferta</th>
                              <th scope="col">Descripción</th>
                              <th scope="col">Ubicación</th>
                              <th scope="col">Modo de trabajo</th>
                              <th scope="col">Fecha publicada</th>
                              <th scope="col">Tecnologias</th>
                              <th scope="col">Rango de salario</th>
                              <th scope="col">Eliminar empleo</th>
                            </tr>
                          </thead>
                          <tbody>
                            {companies.map((offer, index) => (
                              <tr key={index}>
                                <td>{offer.title}</td>
                                <td>{offer.description}</td>
                                <td>{offer.location}</td>
                                <td>{offer.modo}</td>
                                <td>{formatDate(offer.createdAt)}</td>
                                <td>
                                  {offer.technologies.map((leng, lengIndex) => (
                                    <span key={lengIndex}>{leng},</span>
                                  ))}
                                </td>
                                <td>{offer.salary}€</td>
                                <td>
                                  <button
                                    className="btn btn-danger"
                                    onClick={() => handleDeleteOffer(offer.id)}
                                  >
                                    Delete
                                  </button>
                                </td>
                              </tr>
                            ))}
                          </tbody>
                        </table>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ListJob
