import React, { useState } from 'react'

const CreateProfileUserPage = () => {
  const [imageProfileSrc, setImageProfileSrc] = useState(
    'https://www.freeiconspng.com/thumbs/no-image-icon/no-image-icon-4.png'
  )

  const handleImageProfileChange = event => {
    const selectedFile = event.target.files[0]

    if (selectedFile) {
      const imageUrl = URL.createObjectURL(selectedFile)
      setImageProfileSrc(imageUrl)
    }
  }

  const [imageProjectOneSrc, setImageProjectOneSrc] = useState(
    'https://media.geeksforgeeks.org/wp-content/cdn-uploads/20210401151214/What-is-Website.png'
  )

  const handleImageProjectOneChange = event => {
    const selectedFile = event.target.files[0]

    if (selectedFile) {
      const imageUrl = URL.createObjectURL(selectedFile)
      setImageProjectOneSrc(imageUrl)
    }
  }

  const handleLenguajesProgramacionChange = event => {
    const selectedOptions = event.target.selectedOptions
    const selectedValues = Array.from(selectedOptions).map(
      option => option.value
    )
    setLenguajesProgramacion(selectedValues)
  }

  const handleHabilidadesBlandasChange = event => {
    const selectedOptions = event.target.selectedOptions
    const selectedValues = Array.from(selectedOptions).map(
      option => option.value
    )
    setHabilidadesBlandas(selectedValues)
  }

  const [githubProfile, setGithubProfile] = useState('')
  const [linkedinProfile, setLinkedinProfile] = useState('')
  const [websiteUrl, setWebsiteUrl] = useState('')
  const [nombre, setNombre] = useState('')
  const [apellido, setApellido] = useState('')
  const [telefono, setTelefono] = useState('')
  const [localizacion, setLocalizacion] = useState('')
  const [idioma, setIdioma] = useState('')
  const [nivelEducacion, setNivelEducacion] = useState('')
  const [lenguajesProgramacion, setLenguajesProgramacion] = useState([])
  const [habilidadesBlandas, setHabilidadesBlandas] = useState([])
  const [permisoTrabajo, setPermisoTrabajo] = useState(false)
  const [cvFile, setCvFile] = useState(null)

  const [nombreProyecto1, setNombreProyecto1] = useState('')
  const [descripcionProyecto1, setDescripcionProyecto1] = useState('')
  const [repositorioProyecto1, setRepositorioProyecto1] = useState('')
  const [urlProyecto1, setUrlProyecto1] = useState('')

  const handleSubmit = async event => {
    event.preventDefault()

    const formData = new FormData()
    formData.append('githubProfile', githubProfile)
    formData.append('linkedinProfile', linkedinProfile)
    formData.append('websiteUrl', websiteUrl)
    formData.append('nombre', nombre)
    formData.append('apellido', apellido)
    formData.append('telefono', telefono)
    formData.append('localizacion', localizacion)
    formData.append('idioma', idioma)
    formData.append('nivelEducacion', nivelEducacion)
    formData.append(
      'lenguajesProgramacion',
      JSON.stringify(lenguajesProgramacion)
    )
    formData.append('habilidadesBlandas', JSON.stringify(habilidadesBlandas))
    formData.append('permisoTrabajo', permisoTrabajo)
    formData.append('cvFile', cvFile)

    try {
      const response = await fetch('URL_DE_LA_API', {
        method: 'POST',
        body: formData,
      })

      if (response.ok) {
      } else {
      }
    } catch (error) {}
  }
  // NOT USED
  const [imageProjectTwoSrc, setImageProjectTwoSrc] = useState(
    'https://media.geeksforgeeks.org/wp-content/cdn-uploads/20210401151214/What-is-Website.png'
  )

  const handleImageProjectTwoChange = event => {
    const selectedFile = event.target.files[0]

    if (selectedFile) {
      const imageUrl = URL.createObjectURL(selectedFile)
      setImageProjectTwoSrc(imageUrl)
    }
  }

  const [imageProjectThreeSrc, setImageProjectThreeSrc] = useState(
    'https://media.geeksforgeeks.org/wp-content/cdn-uploads/20210401151214/What-is-Website.png'
  )

  const handleImageProjectThreeChange = event => {
    const selectedFile = event.target.files[0]

    if (selectedFile) {
      const imageUrl = URL.createObjectURL(selectedFile)
      setImageProjectThreeSrc(imageUrl)
    }
  }
  // END NOT USED

  return (
    <div className='container'>
      <form className='' onSubmit={handleSubmit}>
        <div className='row'>
          <div className='d-lg-flex border'>
            <div className='col-lg-8 mt-1 rounded-1 py-3'>
              {/* Image - Social Media */}
              <div className='row mb-4 '>
                <div className='d-lg-flex justify-content-start gap-3'>
                  <div className='col-lg-3 d-flex justify-content-center pb-3 pb-lg-0'>
                    <input
                      type='file'
                      accept='image/*'
                      style={{ display: 'none' }}
                      id='imageInput'
                      onChange={handleImageProfileChange}
                    />
                    <label htmlFor='imageInput'>
                      <img
                        src={imageProfileSrc}
                        className='rounded-circle'
                        alt=''
                        width='160'
                        style={{ cursor: 'pointer' }}
                      />
                    </label>
                  </div>
                  <div className='col-lg-7'>
                    <div className='d-flex flex-column justify-content-center h-100  gap-3'>
                      <div className='d-flex gap-3 '>
                        <img
                          src='https://cdn-icons-png.flaticon.com/512/25/25231.png'
                          alt=''
                          width='35'
                        />
                        <input
                          type='text'
                          placeholder='https://github.com/nombre'
                          className='form-control text-sm rounded-1'
                          value={githubProfile}
                          onChange={event =>
                            setGithubProfile(event.target.value)
                          }
                        />
                      </div>
                      <div className='d-flex gap-3 '>
                        <img
                          src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQJYxFSn8Siueit7bVNmPDwVpA0Cq3_4rOxDA&usqp=CAU'
                          alt=''
                          width='34'
                        />
                        <input
                          type='text'
                          placeholder='https://www.linkedin.com/in/nombre/'
                          className='form-control text-sm rounded-1'
                          value={linkedinProfile}
                          onChange={event =>
                            setLinkedinProfile(event.target.value)
                          }
                        />
                      </div>
                      <div className='d-flex gap-3 '>
                        <img
                          src='https://global-uploads.webflow.com/6335b33630f88833a92915fc/63e501246a370e0d4462f2ed_herologo.png'
                          alt=''
                          width='37'
                        />
                        <input
                          type='text'
                          placeholder='https://bento.me/nombre'
                          className='form-control text-sm rounded-1'
                          value={websiteUrl}
                          onChange={event => setWebsiteUrl(event.target.value)}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* Name - Last Name - Phone */}
              <div className='row mb-3 '>
                <div className='d-lg-flex justify-content-start gap-3'>
                  <div className='col-lg-3 col-12 form-floating mb-3 mb-lg-0'>
                    <input
                      type='text'
                      className='form-control rounded-1 text-md'
                      id='nombre'
                      placeholder='Ingrese su nombre'
                      onChange={event => setNombre(event.target.value)}
                      value={nombre}
                    />
                    <label htmlFor='nombre' className='form-label text-md'>
                      Nombre
                    </label>
                  </div>
                  <div className='col-lg-3 col-12 form-floating mb-3 mb-lg-0'>
                    <input
                      type='text'
                      className='form-control rounded-1 text-md '
                      id='apellido'
                      placeholder='Ingrese su apellido'
                      onChange={event => setApellido(event.target.value)}
                      value={apellido}
                    />
                    <label htmlFor='apellido' className='form-label text-md'>
                      Apellido(s)
                    </label>
                  </div>
                  <div className='col-lg-3 col-12 form-floating'>
                    <input
                      type='number'
                      className='form-control rounded-1 text-md customWidth'
                      id='telefono'
                      placeholder='Ingrese su teléfono'
                      onChange={event => setTelefono(event.target.value)}
                    />
                    <label htmlFor='telefono' className='form-label text-md'>
                      Teléfono
                    </label>
                  </div>
                </div>
              </div>
              {/* Location - Language - Education */}
              <div className='row mb-3 '>
                <div className='d-lg-flex justify-content-start gap-3'>
                  <div className='col-lg-3 col-12 form-floating mb-3 mb-lg-0'>
                    <input
                      type='text'
                      className='form-control rounded-1 text-md'
                      id='localizacion'
                      placeholder='Ingrese su localización'
                      onChange={event => setLocalizacion(event.target.value)}
                      value={localizacion}
                    />
                    <label
                      htmlFor='localizacion'
                      className='form-label text-md'
                    >
                      Localización
                    </label>
                  </div>
                  <div className='col-lg-3 col-12 form-floating mb-3 mb-lg-0'>
                    <input
                      type='text'
                      className='form-control rounded-1 text-md'
                      id='idioma'
                      placeholder='Ingrese su localización'
                      onChange={event => setIdioma(event.target.value)}
                      value={idioma}
                    />
                    <label htmlFor='idioma' className='form-label text-md'>
                      Segundo idioma
                    </label>
                  </div>
                  <div className='col-lg-4 col-12 form-floating '>
                    <input
                      type='text'
                      className='form-control rounded-1 text-md customWidth'
                      id='nivelEducacion'
                      placeholder='Ingrese su nivel de educación'
                      onChange={event => setNivelEducacion(event.target.value)}
                      value={nivelEducacion}
                    />
                    <label
                      htmlFor='nivelEducacion'
                      className='form-label text-md'
                    >
                      Nivel de educación
                    </label>
                  </div>
                </div>
              </div>
              {/* Code Languages - Soft Skills */}
              <div className='row mb-3 '>
                <div className='d-lg-flex justify-content-start gap-3'>
                  <div className='col-lg-5 col-12 mb-3 mb-lg-0'>
                    <label
                      htmlFor='lenguajesProgramacion'
                      className='form-label text-sm'
                    >
                      Lenguajes de programación (Elección múltiple)
                    </label>
                    <select
                      className='form-select text-md'
                      multiple
                      aria-label='Multiple select example'
                      style={{ height: '140px' }}
                      id='lenguajesProgramacion'
                      onChange={handleLenguajesProgramacionChange}
                      value={lenguajesProgramacion}
                    >
                      <option value='cPlusPlus'>C++</option>
                      <option value='cSharp'>C#</option>
                      <option value='css'>CSS</option>
                      <option value='go'>Goland</option>
                      <option value='html'>HTML</option>
                      <option value='java'>Java</option>
                      <option value='javascript'>JavaScript</option>
                      <option value='kotlin'>Kotlin</option>
                      <option value='lua'>Lua</option>
                      <option value='perl'>Perl</option>
                      <option value='php'>PHP</option>
                      <option value='python'>Python</option>
                      <option value='r'>R</option>
                      <option value='ruby'>Ruby</option>
                      <option value='rust'>Rust</option>
                      <option value='scala'>Scala</option>
                      <option value='sql'>SQL</option>
                      <option value='swift'>Swift</option>
                      <option value='typescript'>TypeScript</option>
                      <option value='haskell'>Haskell</option>
                    </select>
                  </div>
                  <div className='col-lg-5 col-12'>
                    <label
                      htmlFor='habilidadesBlandas'
                      className='form-label text-sm'
                    >
                      Habilidades blandas (Elección múltiple)
                    </label>
                    <select
                      className='form-select text-md'
                      multiple
                      aria-label='Multiple select example'
                      style={{ height: '140px' }}
                      id='habilidadesBlandas'
                      onChange={handleHabilidadesBlandasChange}
                      value={habilidadesBlandas}
                    >
                      <option value='adaptabilidad'>Adaptabilidad</option>
                      <option value='aprendizajeContinuo'>
                        Aprendizaje continuo
                      </option>
                      <option value='autoconfianza'>Autoconfianza</option>
                      <option value='colaboracion'>Colaboración</option>
                      <option value='comunicacionEfectiva'>
                        Comunicación efectiva
                      </option>
                      <option value='comunicacionIntercultural'>
                        Comunicación intercultural
                      </option>
                      <option value='creatividad'>Creatividad</option>
                      <option value='empatia'>Empatía</option>
                      <option value='escuchaActiva'>Escucha activa</option>
                      <option value='flexibilidad'>Flexibilidad</option>
                      <option value='gestionTiempo'>Gestión del tiempo</option>
                      <option value='habilidadesNegociacion'>
                        Habilidades de negociación
                      </option>
                      <option value='inteligenciaEmocional'>
                        Inteligencia emocional
                      </option>
                      <option value='liderazgo'>Liderazgo</option>
                      <option value='pensamientoCritico'>
                        Pensamiento crítico
                      </option>
                      <option value='pensamientoLateral'>
                        Pensamiento lateral
                      </option>
                      <option value='resiliencia'>Resiliencia</option>
                      <option value='resolucionProblemas'>
                        Resolución de problemas
                      </option>
                      <option value='tomaDecisiones'>Toma de decisiones</option>
                      <option value='trabajoEquipo'>Trabajo en equipo</option>
                    </select>
                  </div>
                </div>
              </div>
              {/* Permission of Work - Save Button */}
              <div className='row d-flex justify-content-start gap-1 '>
                <div className='col-lg-5 mb-2'>
                  <div className='form-check'>
                    <input
                      className='form-check-input'
                      type='checkbox'
                      id='permisoTrabajo'
                      onChange={event =>
                        setPermisoTrabajo(event.target.checked)
                      }
                      value={permisoTrabajo}
                    />
                    <label
                      className='form-check-label text-md'
                      htmlFor='permisoTrabajo'
                    >
                      Tengo permiso de trabajo en España.
                    </label>
                  </div>
                </div>
                <div className='col-lg-5 mb-2'>
                  <div className='mb-3 d-flex align-items-center justify-content-center gap-3'>
                    <label
                      htmlFor='formFileSm'
                      className='form-label text-md m-0'
                    >
                      CV:
                    </label>
                    <input
                      className='form-control form-control-sm rounded-1 text-sm'
                      id='formFileSm'
                      type='file'
                      onChange={event => setCvFile(event.target.files[0])}
                    />
                  </div>
                </div>

                <div className='col-lg-10 d-none d-lg-block'>
                  <button
                    className='btn btn-primary text-md rounded-1'
                    type='submit'
                  >
                    Guardar cambios
                  </button>
                </div>
              </div>
            </div>
            {/* Portafolio */}
            <div
              className='col-lg-12 mt-1'
              style={{ maxHeight: '600px', overflowY: 'scroll' }}
            >
              {/* Project 1 */}
              <div className='col-lg-4 mt-4 rounded-1 '>
                <div className='row mb-3'>
                  <div className='col-lg-12'>
                    <div className='card'>
                      <input
                        type='file'
                        accept='image/*'
                        style={{ display: 'none' }}
                        id='imageInput1'
                        onChange={handleImageProjectOneChange}
                      />
                      <label htmlFor='imageInput1'>
                        <img
                          src={imageProjectOneSrc}
                          className='card-img-top'
                          alt='...'
                          width={'100%'}
                          style={{ cursor: 'pointer' }}
                        />
                      </label>
                      <div className='card-body'>
                        <div className='col-lg-12 form-floating mb-3'>
                          <input
                            type='text'
                            className='form-control rounded-1 text-md'
                            id='nombreProyecto1'
                            placeholder='Ingrese nombre del proyecto'
                            value={nombreProyecto1}
                            onChange={event =>
                              setNombreProyecto1(event.target.value)
                            }
                          />
                          <label
                            htmlFor='nombreProyecto1'
                            className='form-label text-md'
                          >
                            Título del proyecto #1
                          </label>
                        </div>
                        <div className='form-floating mb-3'>
                          <textarea
                            className='form-control rounded-1 text-md'
                            placeholder='Leave a comment here'
                            id='floatingTextarea1'
                            style={{ height: '100px' }}
                            value={descripcionProyecto1}
                            onChange={event =>
                              setDescripcionProyecto1(event.target.value)
                            }
                          ></textarea>
                          <label
                            htmlFor='floatingTextarea1'
                            className='text-md'
                          >
                            Descripción corta del proyecto #1
                          </label>
                        </div>
                        <div className='col-lg-12'>
                          <input
                            type='text'
                            className='form-control rounded-1 text-sm mb-2'
                            placeholder='Repositorio del proyecto #1'
                            value={repositorioProyecto1}
                            onChange={event =>
                              setRepositorioProyecto1(event.target.value)
                            }
                          />
                          <input
                            type='text'
                            className='form-control rounded-1 text-sm'
                            placeholder='URL del proyecto #1 si esta publicado'
                            value={urlProyecto1}
                            onChange={event =>
                              setUrlProyecto1(event.target.value)
                            }
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Project 2 */}
              <div className='col-lg-4 mt-4 rounded-1 '>
                <div className='row mb-3'>
                  <div className='col-lg-12'>
                    <div className='card'>
                      <input
                        type='file'
                        accept='image/*'
                        style={{ display: 'none' }}
                        id='imageInput2'
                        onChange={handleImageProjectTwoChange}
                      />
                      <label htmlFor='imageInput2'>
                        <img
                          src={imageProjectTwoSrc}
                          className='card-img-top'
                          alt='...'
                          width={'100%'}
                          style={{ cursor: 'pointer' }}
                        />
                      </label>
                      <div className='card-body'>
                        <div className='col-lg-12 form-floating mb-3'>
                          <input
                            type='text'
                            className='form-control rounded-1 text-md'
                            id='nombreProyecto2'
                            placeholder='Ingrese nombre del proyecto'
                          />
                          <label
                            htmlFor='nombreProyecto2'
                            className='form-label text-md'
                          >
                            Título del proyecto #2
                          </label>
                        </div>
                        <div className='form-floating mb-3'>
                          <textarea
                            className='form-control rounded-1 text-md'
                            placeholder='Leave a comment here'
                            id='floatingTextarea2'
                            style={{ height: '100px' }}
                          ></textarea>
                          <label
                            htmlFor='floatingTextarea2'
                            className='text-md'
                          >
                            Descripción corta del proyecto #2
                          </label>
                        </div>
                        <div className='col-lg-12'>
                          <input
                            type='text'
                            className='form-control rounded-1 text-sm mb-2'
                            placeholder='Repositorio del proyecto #2'
                          />
                          <input
                            type='text'
                            className='form-control rounded-1 text-sm'
                            placeholder='URL del proyecto #2 si esta publicado'
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Project 3 */}
              <div className='col-lg-4 mt-4 rounded-1 '>
                <div className='row mb-3'>
                  <div className='col-lg-12'>
                    <div className='card'>
                      <input
                        type='file'
                        accept='image/*'
                        style={{ display: 'none' }}
                        id='imageInput3'
                        onChange={handleImageProjectThreeChange}
                      />
                      <label htmlFor='imageInput3'>
                        <img
                          src={imageProjectThreeSrc}
                          className='card-img-top'
                          alt='...'
                          width={'100%'}
                          style={{ cursor: 'pointer' }}
                        />
                      </label>
                      <div className='card-body'>
                        <div className='col-lg-12 form-floating mb-3'>
                          <input
                            type='text'
                            className='form-control rounded-1 text-md'
                            id='nombreProyecto3'
                            placeholder='Ingrese nombre del proyecto'
                          />
                          <label
                            htmlFor='nombreProyecto3'
                            className='form-label text-md'
                          >
                            Título del proyecto #3
                          </label>
                        </div>
                        <div className='form-floating mb-3'>
                          <textarea
                            className='form-control rounded-1 text-md'
                            placeholder='Leave a comment here'
                            id='floatingTextarea3'
                            style={{ height: '100px' }}
                          ></textarea>
                          <label
                            htmlFor='floatingTextarea3'
                            className='text-md'
                          >
                            Descripción corta del proyecto #3
                          </label>
                        </div>
                        <div className='col-lg-12'>
                          <input
                            type='text'
                            className='form-control rounded-1 text-sm mb-2'
                            placeholder='Repositorio del proyecto #3'
                          />
                          <input
                            type='text'
                            className='form-control rounded-1 text-sm'
                            placeholder='URL del proyecto #3 si esta publicado'
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className='col-lg-10 pb-4 pb-lg-0 d-lg-none'>
                <button className='btn btn-primary text-md rounded-1'>
                  Guardar cambios
                </button>
              </div>
            </div>
          </div>
        </div>
      </form>
    </div>
  )
}

export default CreateProfileUserPage
