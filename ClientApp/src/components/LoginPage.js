import React, { useState } from 'react'
const LoginPage = () => {
  const [login, setLogin] = useState({
    email: '',
    password: '',
  })

  const [errorMessage, setErrorMessage] = useState('')

  const [errors, setErrors] = useState({
    email: '',
    password: '',
  })

  const handleInputChange = event => {
    const { name, value } = event.target

    setLogin(prevValues => ({
      ...prevValues,
      [name]: value,
    }))
  }

  const handleButtonClick = event => {
    event.preventDefault()

    const urlCandidates =
      'https://64e8aae299cf45b15fdff78c.mockapi.io/candidates'
    const urlCompanies = 'https://64e8aae299cf45b15fdff78c.mockapi.io/companies'

    const checkUserExistence = async () => {
      try {
        const responseCandidates = await fetch(urlCandidates)
        const responseCompanies = await fetch(urlCompanies)

        const dataCandidates = await responseCandidates.json()
        const dataCompanies = await responseCompanies.json()

        const existingUser =
          dataCandidates.find(
            user =>
              user.email === login.email && user.password === login.password
          ) ||
          dataCompanies.find(
            user =>
              user.email === login.email && user.password === login.password
          )
        if (existingUser) {
          setErrorMessage('')
          localStorage.setItem('user', JSON.stringify(existingUser))
          window.location.href = '/'
        } else {
          setErrorMessage('Email o contraseña incorrectos')
        }
      } catch (error) {
        console.error('Error checking user existence:', error)
      }
    }

    const newErrors = {
      email: login.email === '' ? 'Campo email no puede estar vacio' : '',
      password:
        login.password === '' ? 'Campo password no puede estar vacio' : '',
    }

    setErrors(newErrors)
    if (!newErrors.email && !newErrors.password) {
      checkUserExistence()
    }
  }

  return (
    <div className='container mt-5'>
      <div className='row mx-auto d-flex align-items-center justify-content-evenly'>
        {/* <div className="col-lg-4 d-none d-sm-block">
          <img
            src="https://static.vecteezy.com/system/resources/previews/016/757/184/original/3d-padlock-key-icon-with-password-insecure-isolated-security-data-protection-minimal-concept-3d-render-illustration-png.png"
            alt=""
            width="420"
            height="420"
          />
        </div> */}
        <div
          className='col-lg-4 mt-4 rounded-1 px-lg-1 px-4'
          style={{ height: '500px', backgroundColor: '#f3f4f6' }}
        >
          {/* Input Email + Input Password */}
          <div className='row mt-4'>
            <div className='col-lg-12'>
              <h3 className='text-center'>Bienvenido</h3>
              <p className='text-center fw-light '>Por favor entre sus datos</p>
            </div>
          </div>
          <div className='row d-flex justify-content-center mt-2'>
            <div className='col-lg-11'>
              <input
                type='text'
                placeholder='correo'
                className={`form-control mb-3 rounded-1 ${
                  errors.email ? 'is-invalid' : ''
                }`}
                name='email'
                value={login.email}
                onChange={handleInputChange}
              />
              {errors.email && (
                <div className='invalid-feedback mb-4 text-sm'>
                  {errors.email}
                </div>
              )}
              <input
                type='password'
                placeholder='contraseña'
                className={`form-control rounded-1 ${
                  errors.password ? 'is-invalid' : ''
                }`}
                name='password'
                value={login.password}
                onChange={handleInputChange}
              />
              {errors.password && (
                <div className='invalid-feedback text-sm'>
                  {errors.password}
                </div>
              )}
            </div>
          </div>
          {/* Remember me + Forgot password */}
          <div className='row d-flex justify-content-center mt-3'>
            <div className='col-lg-12'>
              <div className='row row-cols-auto d-flex justify-content-lg-center justify-content-evenly'>
                <div className='col-lg-4 d-flex align-self-center m-1'>
                  <div className='form-check'>
                    <input
                      type='checkbox'
                      className='form-check-input'
                      id='remember'
                    />
                    <label
                      htmlFor='remember'
                      className='form-check-label fw-light text-sm'
                    >
                      Recuerdame
                    </label>
                  </div>
                </div>
                <div className='col-lg-7  d-flex align-self-center'>
                  <a href='/' className='text-primary text-sm'>
                    ¿Olvidaste tu contraseña?
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Buttons */}
          <div className='row mt-4 d-flex justify-content-center'>
            <div className='col-lg-11 d-grid gap-3 '>
              <button
                className='btn btn-primary text-md rounded-1 shadow-lg py-2'
                type='button'
                onClick={handleButtonClick}
              >
                Iniciar Sesión
              </button>
              {errorMessage && <p className='text-danger'>{errorMessage}</p>}
              <button
                className='btn btn-secondary text-sm rounded-1 d-flex justify-content-center align-items-center py-2'
                type='button'
              >
                <img
                  src='https://assets.stickpng.com/images/5847f9cbcef1014c0b5e48c8.png'
                  alt=''
                  width='18'
                  height='18'
                  className=''
                />
                <span className='ms-2'> Iniciar Sesión con Google</span>
              </button>
            </div>
          </div>

          {/* Sign Up */}
          <div className='row mt-4'>
            <div className='col-lg-12 d-flex justify-content-center'>
              <span className='fw-light text-md'>¿No tienes una cuenta?</span>
              <a
                href='/registrarse'
                className='ps-2 fw-bold text-primary text-md'
              >
                Regístrate
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default LoginPage
