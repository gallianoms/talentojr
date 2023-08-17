import React from "react";

const CreateJob = () => {
  return (
    <div className="container mt-5">
      <h2 className="text-center mb-4">Publicar puesto de trabajo</h2>
      <form>
        <div className="mb-3">
          <label htmlFor="title" className="form-label">
            Titulo de trabajo
          </label>
          <input type="text" className="form-control" id="title" />
        </div>
        <div className="mb-3">
          <label htmlFor="description" className="form-label">
            Descripción del trabajo
          </label>
          <textarea
            className="form-control"
            id="description"
            rows="5"
          ></textarea>
        </div>
        <div className="mb-3">
          <label htmlFor="location" className="form-label">
            Ubicacion del trabajo
          </label>
          <input type="text" className="form-control" id="location" />
        </div>
        <div className="mb-3">
          <label htmlFor="workingMode" className="form-label">
            Modalidad de trabajo
          </label>
          <select className="form-select" id="workingMode">
            <option value="fullTime">Tiempo completo</option>
            <option value="partTime">Tiempo parcial</option>
            <option value="remote">Remoto</option>
          </select>
        </div>
        <div className="mb-3">
          <label htmlFor="skills" className="form-label">
            Habilidades
          </label>
          <input type="text" className="form-control" id="skills" />
        </div>
        <div className="mb-3">
          <label htmlFor="salaryRange" className="form-label">
            Rango salario
          </label>
          <input type="text" className="form-control" id="salaryRange" />
        </div>
        <div className="mb-3">
          <label htmlFor="experienceLevel" className="form-label">
            Experience Level
          </label>
          <select className="form-select" id="experienceLevel">
            <option value="entryLevel">Entry Level</option>
            <option value="midLevel">Mid Level</option>
            <option value="seniorLevel">Senior Level</option>
          </select>
        </div>
        <div className="mb-3">
          <label htmlFor="benefits" className="form-label">
            Benefits
          </label>
          <textarea className="form-control" id="benefits" rows="3"></textarea>
        </div>
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
  );
};

export default CreateJob;
