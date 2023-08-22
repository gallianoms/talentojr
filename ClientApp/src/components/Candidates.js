import React from "react";
import { BsBoxArrowRight } from "react-icons/bs";

const Candidates = () => {
  return (
    <section className="intro">
      <div className="bg-image mt-5">
        <div className=" d-flex align-items-center">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-12">
                <h1 className="mb-3">Lista de Candidatos</h1>
                <div className="card">
                  <div className="card-body p-0">
                    <div data-mdb-perfect-scrollbar="true">
                      <table className="table table-striped mb-0">
                        <thead>
                          <tr>
                            <th scope="col">Nombre y apellidos</th>
                            <th scope="col">Oferta Inscrita</th>
                            <th scope="col">Estado</th>
                            <th scope="col">Ver perfil</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td>Like a butterfly</td>
                            <td>Boxing</td>
                            <td>
                              <form>
                                <select className="form-select">
                                  <option>Morning</option>
                                  <option>Afternoon</option>
                                  <option>Evening</option>
                                </select>
                              </form>
                            </td>
                            <td>
                              <a href="hola">
                                <BsBoxArrowRight />
                              </a>
                            </td>
                          </tr>
                          <tr>
                            <td>Mind &amp; Body</td>
                            <td>Yoga</td>
                            <td>
                              <form>
                                <select className="form-select">
                                  <option>Morning</option>
                                  <option>Afternoon</option>
                                  <option>Evening</option>
                                </select>
                              </form>
                            </td>
                            <td>
                              <a href="hola">
                                <BsBoxArrowRight />
                              </a>
                            </td>
                          </tr>
                          <tr>
                            <td>Crit Cardio</td>
                            <td>Gym</td>
                            <td>
                              <form>
                                <select className="form-select">
                                  <option>Morning</option>
                                  <option>Afternoon</option>
                                  <option>Evening</option>
                                </select>
                              </form>
                            </td>
                            <td>
                              <a href="hola">
                                <BsBoxArrowRight />
                              </a>
                            </td>
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
