import React, { useState } from "react";

const SignUpPage = () => {
  const [register, setRegister] = useState({
    usuario: "",
    contraseña: "",
    tipoUsuario: "",
  });

  const [errors, setErrors] = useState({
    usuario: "",
    contraseña: "",
    tipoUsuario: "",
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;

    if (name === "tipoUsuario") {
      setErrors((prevErrors) => ({
        ...prevErrors,
        tipoUsuario: "",
      }));
    }

    setRegister((prevValues) => ({
      ...prevValues,
      [name]: value,
    }));
  };

  const handleButtonClick = (event) => {
    event.preventDefault();

    const newErrors = {
      usuario:
        register.usuario === "" ? "Campo usuario no puede estar vacio" : "",
      contraseña:
        register.contraseña === ""
          ? "Campo contraseña no puede estar vacio"
          : "",
      tipoUsuario:
        register.tipoUsuario === "" ? "Selecciona un tipo de usuario" : "",
    };

    setErrors(newErrors);
    if (!newErrors.usuario && !newErrors.contraseña && !newErrors.tipoUsuario) {
      console.log("Text values:", register);
    }
  };

  return (
    <div className="container mt-5">
      <div className="row mx-auto d-flex align-items-center justify-content-evenly">
        <div className="col-lg-4 d-none d-sm-block">
          <img src="/img/rocket.png" alt="" width="420" height="420" />
        </div>
        <div
          className="col-lg-3 mt-4 rounded-1 px-lg-1 px-4"
          style={{ height: "470px", backgroundColor: "#f3f4f6" }}
        >
          {/* Input Email + Input Password */}
          <div className="row mt-4">
            <div className="col-lg-12">
              <h3 className="text-center">Bienvenido</h3>
              <p className="text-center fw-light ">
                Registrate si no tienes cuenta
              </p>
            </div>
          </div>
          <div className="row d-flex justify-content-center mt-2">
            <div className="col-lg-11">
              <input
                type="text"
                placeholder="correo"
                className={`form-control mb-3 rounded-1 ${
                  errors.usuario ? "is-invalid" : ""
                }`}
                name="usuario"
                value={register.usuario}
                onChange={handleInputChange}
              />
              {errors.usuario && (
                <div className="invalid-feedback">{errors.usuario}</div>
              )}
              <input
                type="text"
                placeholder="contraseña"
                className={`form-control rounded-1 ${
                  errors.contraseña ? "is-invalid" : ""
                }`}
                name="contraseña"
                value={register.contraseña}
                onChange={handleInputChange}
              />
              {errors.contraseña && (
                <div className="invalid-feedback">{errors.contraseña}</div>
              )}
            </div>
          </div>
          {/* Remember me + Forgot password */}
          <div className="row d-flex justify-content-center mt-3">
            <div className="col-lg-12">
              <div className="row row-cols-auto d-flex justify-content-lg-center justify-content-between">
                <div className="col-lg-4 d-flex align-self-center">
                  <div className="form-check">
                    <input
                      type="radio"
                      className="form-check-input"
                      id="remember"
                      name="registro"
                    />
                    <label
                      htmlFor="remember"
                      className="form-check-label fw-light text-sm"
                    >
                      Buscas empleo
                    </label>
                  </div>
                </div>
                <div className="col-lg-4 d-flex align-self-center">
                  <div className="form-check">
                    <input
                      type="radio"
                      className="form-check-input"
                      id="remember"
                      name="registro"
                    />
                    <label
                      htmlFor="remember"
                      className="form-check-label fw-light text-sm"
                    >
                      Desea contratar
                    </label>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Buttons */}
          <div className="row mt-5 d-flex justify-content-center">
            <div className="col-lg-11 d-grid gap-3 ">
              <button
                className="btn btn-primary text-md rounded-1 shadow-lg py-2"
                type="button"
                onClick={handleButtonClick}
              >
                Registrate
              </button>
              <button
                className="btn btn-secondary text-sm rounded-1 d-flex justify-content-center align-items-center py-2"
                type="button"
              >
                <img
                  src="https://assets.stickpng.com/images/5847f9cbcef1014c0b5e48c8.png"
                  alt=""
                  width="18"
                  height="18"
                  className=""
                />
                <span className="ms-2"> Iniciar Sesión con Google</span>
              </button>
            </div>
          </div>

          {/* Sign Up */}
          <div className="row mt-4">
            <div className="col-lg-12 d-flex justify-content-center">
              <span className="fw-light text-md">¿Ya tienes una cuenta?</span>
              <a
                href="/iniciar-sesion"
                className="ps-2 fw-bold text-primary text-md"
              >
                Iniciar sesion
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUpPage;
