import React, { useState } from "react";

const Login = () => {
  const [login, setLogin] = useState({
    email: "",
    contraseña: "",
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;

    setLogin((prevValues) => ({
      ...prevValues,
      [name]: value,
    }));
  };

  const handleButtonClick = (event) => {
    event.preventDefault();
    console.log("Text values:", login);
  };

  return (
    <div className="container mt-5">
      <div className="row mx-auto d-flex align-items-center justify-content-evenly">
        <div className="col-lg-4 d-none d-sm-block">
          <img
            src="https://static.vecteezy.com/system/resources/previews/016/757/184/original/3d-padlock-key-icon-with-password-insecure-isolated-security-data-protection-minimal-concept-3d-render-illustration-png.png"
            alt=""
            width="420"
            height="420"
          />
        </div>
        <div
          className="col-lg-3 mt-4 rounded-5 px-lg-1 px-4"
          style={{ height: "470px", backgroundColor: "#f3f4f6" }}
        >
          {/* Input Email + Input Password */}
          <div className="row mt-4">
            <div className="col-lg-12">
              <h3 className="text-center">Bienvenido</h3>
              <p className="text-center fw-light ">Por favor entre sus datos</p>
            </div>
          </div>
          <div className="row d-flex justify-content-center mt-2">
            <div className="col-lg-11">
              <input
                type="text"
                placeholder="correo"
                className="form-control mb-3 rounded-5"
                name="email"
                value={login.email}
                onChange={handleInputChange}
              />
              <input
                type="text"
                placeholder="contraseña"
                className="form-control rounded-5"
                name="contraseña"
                value={login.contraseña}
                onChange={handleInputChange}
              />
            </div>
          </div>
          {/* Remember me + Forgot password */}
          <div className="row d-flex justify-content-center mt-3">
            <div className="col-lg-12">
              <div className="row row-cols-auto d-flex justify-content-lg-center justify-content-evenly">
                <div className="col-lg-4 d-flex align-self-center">
                  <div className="form-check">
                    <input
                      type="checkbox"
                      className="form-check-input"
                      id="remember"
                    />
                    <label
                      htmlFor="remember"
                      className="form-check-label fw-light text-sm"
                    >
                      Recuerdame
                    </label>
                  </div>
                </div>
                <div className="col-lg-7  d-flex align-self-center">
                  <a href="/recovery-pass" className="text-primary text-sm">
                    ¿Olvidaste tu contraseña?
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Buttons */}
          <div className="row mt-5 d-flex justify-content-center">
            <div className="col-lg-11 d-grid gap-3 ">
              <button
                className="btn btn-primary text-md rounded-5 shadow-lg py-2"
                type="button"
                onClick={handleButtonClick}
              >
                Iniciar Sesión
              </button>
              <button
                className="btn btn-secondary text-sm rounded-5 d-flex justify-content-center align-items-center py-2"
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
              <span className="fw-light text-md">¿No tienes una cuenta?</span>
              <a href="/signup" className="ps-2 fw-bold text-primary text-md">
                Regístrate
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
