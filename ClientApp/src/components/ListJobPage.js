import React from "react";

const ListJob = () => {
  return (
    <section className="intro">
      <div className="bg-image mt-5">
        <div className=" d-flex align-items-center">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-12">
                <h1 className="mb-3">Lista de ofertas</h1>
                <div className="card">
                  <div className="card-body p-0">
                    <div data-mdb-perfect-scrollbar="true">
                      <table className="table table-striped mb-0">
                        <thead>
                          <tr>
                            <th scope="col">Nombre de la oferta</th>
                            <th scope="col">Descripción</th>
                            <th scope="col">Fecha publicada</th>
                            <th scope="col">Tecnologias</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td>Like a butterfly</td>
                            <td>Boxing</td>
                            <td>12/08/2023</td>
                            <td>Morning</td>
                          </tr>
                          <tr>
                            <td>Mind &amp; Body</td>
                            <td>Yoga</td>
                            <td>12/08/2023</td>
                            <td>Morning</td>
                          </tr>
                          <tr>
                            <td>Crit Cardio</td>
                            <td>Gym</td>
                            <td>12/08/2023</td>
                            <td>Morning</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ListJob;
