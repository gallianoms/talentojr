import React from "react";

const Candidates = () => {
  return (
    <section class="intro">
      <div class="bg-image mt-5">
        <div class=" d-flex align-items-center">
          <div class="container">
            <div class="row justify-content-center">
              <div class="col-12">
                <h1 className="mb-3">Lista de Candidatos</h1>
                <div class="card">
                  <div class="card-body p-0">
                    <div
                      class="table-responsive table-scroll"
                      data-mdb-perfect-scrollbar="true"
                    >
                      <table class="table table-striped mb-0">
                        <thead>
                          <tr>
                            <th scope="col">Nombre y apellidos</th>
                            <th scope="col">Oferta</th>
                            <th scope="col">Estado</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td>Like a butterfly</td>
                            <td>Boxing</td>
                            <td>9:00 AM - 11:00 AM</td>
                          </tr>
                          <tr>
                            <td>Mind &amp; Body</td>
                            <td>Yoga</td>
                            <td>8:00 AM - 9:00 AM</td>
                          </tr>
                          <tr>
                            <td>Crit Cardio</td>
                            <td>Gym</td>
                            <td>9:00 AM - 10:00 AM</td>
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

export default Candidates;
