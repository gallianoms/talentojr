import React, { useState } from "react";

const CreateJob = () => {
  const [job, sethandleJob] = useState({
    titleJob: "",
    description: "",
    location: "",
    modeOfWork: "",
    skills: [""],
    salaryRange: "",
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    sethandleJob((prevValues) => ({
      ...prevValues,
      [name]: value,
    }));
  };

  const handleButtonClick = (event) => {
    event.preventDefault();
    console.log("Text values:", job);
  };

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
                name="titleJob"
                value={job.titleJob}
                onChange={handleInputChange}
                placeholder="Titulo de trabajo"
              />
            </div>
            <div className="mb-3">
              <textarea
                className="form-control bg-light"
                id="description"
                rows="3"
                value={job.description}
                onChange={handleInputChange}
                name="description"
                required
                placeholder="Descripción de trabajo"
              ></textarea>
            </div>
            <div className="mb-3">
              <input
                type="text"
                className="form-control bg-light"
                id="location"
                name="location"
                value={job.location}
                onChange={handleInputChange}
                required
                placeholder="Ubicación de trabajo"
              />
            </div>
            <div className="mb-3">
              <select
                className="form-select bg-light"
                id="modeOfWork"
                value={job.modeOfWork}
                onChange={handleInputChange}
                name="modeOfWork"
                required
              >
                <option value="" disabled defaultValue>
                  Modalidad de trabajo
                </option>
                <option value="Tiempo completo">Tiemp completo</option>
                <option value="Tiempo parcial">Tiempo parcial</option>
                <option value="Remoto">Remoto</option>
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
                name="skills"
                value={job.skills}
                onChange={handleInputChange}
                required
                placeholder="Tecnologias"
              />
            </div>
            <div className="mb-3">
              <input
                type="text"
                className="form-control bg-light"
                id="salaryRange"
                value={job.salaryRange}
                name="salaryRange"
                onChange={handleInputChange}
                required
                placeholder="Rango de salario"
              />
            </div>
            <button
              type="submit"
              className="btn btn-primary"
              onClick={handleButtonClick}
            >
              Crear
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default CreateJob;
