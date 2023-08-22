import React, { useState } from "react";

const CreateProfileCompany = () => {
  const [imageProfileSrc, setImageProfileSrc] = useState(
    "https://www.freeiconspng.com/thumbs/no-image-icon/no-image-icon-4.png"
  );
  const handleImageProfileChange = (event) => {
    const selectedFile = event.target.files[0];

    if (selectedFile) {
      setCompany((prevValues) => ({
        ...prevValues,
        image: selectedFile,
      }));

      const imageUrl = URL.createObjectURL(selectedFile);
      setImageProfileSrc(imageUrl);
    }
  };

  const [company, setCompany] = useState({
    nombre: "",
    website: "",
    numEmpleados: "",
    ceo: "",
    descEmpresa: "",
    descBeneficios: "",
    descCultura: "",
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setCompany((prevValues) => ({
      ...prevValues,
      [name]: value,
    }));
  };

  const handleButtonClick = (event) => {
    event.preventDefault();
    console.log("Text values:", company);
  };

  return (
    <div className="container">
      <form className="my-3">
        <div className="row">
          <div className="d-lg-flex d-flex justify-content-center">
            <div className="col-lg-9 col-12 mt-1 rounded-1 py-3 border px-5">
              <div className="row mb-3">
                {/* Image */}
                <div className="d-lg-flex justify-content-start gap-3 ">
                  <div className="col-lg-4 col-12 d-flex justify-content-center  pb-lg-0 mx-auto">
                    <input
                      type="file"
                      accept="image/*"
                      id="imageInput"
                      style={{ display: "none" }}
                      onChange={handleImageProfileChange}
                    />
                    <label htmlFor="imageInput">
                      <img
                        src={imageProfileSrc}
                        className="rounded-circle"
                        alt=""
                        width={160}
                        style={{ cursor: "pointer" }}
                      />
                    </label>
                  </div>
                </div>
                <p className="text-center text-md mb-2">Logo de la empresa</p>
              </div>
              {/* Name - Website - Num. Employees */}
              <div className="row mb-3 ">
                <div className="d-lg-flex justify-content-center gap-3">
                  <div className="col-lg-4 col-12 form-floating mb-3 mb-lg-0">
                    <input
                      type="text"
                      className="form-control rounded-1 text-md"
                      id="nombre"
                      name="nombre"
                      value={company.nombre}
                      onChange={handleInputChange}
                      required=""
                      placeholder="Ingrese su nombre"
                    />
                    <label htmlFor="nombre" className="form-label text-md">
                      Nombre
                    </label>
                  </div>
                  <div className="col-lg-4 col-12 form-floating mb-3 mb-lg-0">
                    <input
                      type="text"
                      className="form-control rounded-1 text-md "
                      id="website"
                      name="website"
                      value={company.website}
                      onChange={handleInputChange}
                      required=""
                      placeholder="Ingrese su sitio web"
                    />
                    <label htmlFor="website" className="form-label text-md">
                      Website
                    </label>
                  </div>
                  <div className="col-lg-4 col-12 form-floating">
                    <input
                      type="number"
                      className="form-control rounded-1 text-md "
                      name="numEmpleados"
                      value={company.numEmpleados}
                      onChange={handleInputChange}
                      id="size"
                      required=""
                      placeholder="Ingrese el tamaño de su empresa en empleados"
                    />
                    <label htmlFor="size" className="form-label text-md">
                      Número de empleados
                    </label>
                  </div>
                </div>
              </div>
              {/* CEO - COO - RRHH */}
              <div className="row mb-3 ">
                <div className="d-lg-flex justify-content-center gap-3">
                  <div className="col-lg-4 col-12 form-floating mb-3 mb-lg-0">
                    <input
                      type="text"
                      className="form-control rounded-1 text-md"
                      id="ceo"
                      name="ceo"
                      value={company.ceo}
                      onChange={handleInputChange}
                      required=""
                      placeholder="Ingrese su localización"
                    />
                    <label htmlFor="ceo" className="form-label text-md">
                      Director Ejecutivo (CEO)
                    </label>
                  </div>
                  <div className="col-lg-4 col-12 form-floating mb-3 mb-lg-0">
                    <input
                      type="text"
                      className="form-control rounded-1 text-md"
                      id="coo"
                      required=""
                      placeholder="Ingrese su localización"
                    />
                    <label htmlFor="coo" className="form-label text-md">
                      Director de Operac. (COO)
                    </label>
                  </div>
                  <div className="col-lg-4 col-12 form-floating ">
                    <input
                      type="text"
                      className="form-control rounded-1 text-md "
                      id="rrhh"
                      required=""
                      placeholder="Ingrese su nivel de educación"
                    />
                    <label htmlFor="rrhh" className="form-label text-md">
                      Encarg. Recursos Humanos (RR.HH)
                    </label>
                  </div>
                </div>
              </div>
              {/* Description */}
              <div className="row mb-3 ">
                <div className="d-lg-flex justify-content-center gap-3">
                  <div className="col-lg-12 col-12 form-floating mb-3 mb-lg-0">
                    <textarea
                      className="form-control rounded-1 text-md "
                      placeholder="Breve descripción de la empresa"
                      id="ceo"
                      style={{ height: 100 }}
                      name="descEmpresa"
                      value={company.descEmpresa}
                      onChange={handleInputChange}
                    />
                    <label htmlFor="ceo" className="form-label text-md">
                      Breve descripción de la empresa
                    </label>
                  </div>
                </div>
              </div>
              {/* Benefits - Culture */}
              <div className="row mb-3 ">
                <div className="d-lg-flex justify-content-center gap-3">
                  <div className="col-lg-6 col-12 form-floating mb-3 mb-lg-0">
                    <textarea
                      className="form-control rounded-1 text-md"
                      placeholder="Breve descripción de la empresa"
                      id="benefits"
                      style={{ height: 100 }}
                      name="descBeneficios"
                      value={company.descBeneficios}
                      onChange={handleInputChange}
                    />
                    <label htmlFor="benefits" className="form-label text-md">
                      Breve descripción de los beneficios
                    </label>
                  </div>
                  <div className="col-lg-6 col-12 form-floating mb-3 mb-lg-0">
                    <textarea
                      className="form-control rounded-1 text-md"
                      placeholder="Breve descripción de la empresa"
                      id="ceo"
                      style={{ height: 100 }}
                      name="descCultura"
                      value={company.descCultura}
                      onChange={handleInputChange}
                    />
                    <label htmlFor="ceo" className="form-label text-md">
                      Breve descripción de la cultura
                    </label>
                  </div>
                </div>
              </div>
              {/* Save Button */}
              <div className="col-lg-10 pb-4 pb-lg-0">
                <button
                  className="btn btn-primary text-md rounded-1"
                  type="submit"
                  onClick={handleButtonClick}
                >
                  Guardar cambios
                </button>
              </div>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default CreateProfileCompany;
