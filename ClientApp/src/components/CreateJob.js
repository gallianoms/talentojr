import React from "react";

const CreateJob = () => {
  return (
    <div className="container-fluid mb-5">
      <div className="row justify-content-center align-items-center">
        <div className="col-lg-6 col-md-6 col-sm-8">
          <form className="p-4 shadow rounded">
            <h2 className="mb-4">Publica un puesto de trabajo</h2>
            <div className="mb-3">
              <input
                type="text"
                className="form-control bg-light"
                id="title"
                required
                placeholder="Titulo de trabajo"
              />
            </div>
            <div className="mb-3">
              <textarea
                className="form-control bg-light"
                id="description"
                rows="3"
                required
                placeholder="Descripción de trabajo"
              ></textarea>
            </div>
            <div className="mb-3">
              <input
                type="text"
                className="form-control bg-light"
                id="location"
                required
                placeholder="Ubicación de trabajo"
              />
            </div>
            <div className="mb-3">
              <select className="form-select bg-light" id="modeOfWork" required>
                <option value="" disabled defaultValue>
                  Modalidad de trabajo
                </option>
                <option value="fullTime">Tiemp completo</option>
                <option value="partTime">Tiempo parcial</option>
                <option value="remote">Remoto</option>
              </select>
            </div>
            <div className="mb-3">
              <label htmlFor="skills" className="form-label">
                Tecnologias <em>(Separa las tecnologias por una coma)</em>
              </label>
              <input
                type="text"
                className="form-control bg-light"
                id="skills"
                required
                placeholder="Tecnologias"
              />
            </div>
            <div className="mb-3">
              <input
                type="text"
                className="form-control bg-light"
                id="salaryRange"
                required
                placeholder="Rango de salario"
              />
            </div>
            <button type="submit" className="btn btn-primary">
              Crear
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default CreateJob;
