import React, { useState } from 'react'

const CreateProfileUser = () => {
  const [imageProfileSrc, setImageProfileSrc] = useState(
    'https://www.freeiconspng.com/thumbs/no-image-icon/no-image-icon-4.png'
  )

  const [imageProjectOneSrc, setImageProjectOneSrc] = useState(
    'https://media.geeksforgeeks.org/wp-content/cdn-uploads/20210401151214/What-is-Website.png'
  )

  const handleImageProfileChange = event => {
    const selectedFile = event.target.files[0]

    if (selectedFile) {
      const imageUrl = URL.createObjectURL(selectedFile)
      setImageProfileSrc(imageUrl)
    }
  }

  const handleImageProjectOneChange = event => {
    const selectedFile = event.target.files[0]

    if (selectedFile) {
      const imageUrl = URL.createObjectURL(selectedFile)
      setImageProjectOneSrc(imageUrl)
    }
  }

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

  return (
    <div className='container'>
      <form className=''>
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
                      required
                      placeholder='Ingrese su nombre'
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
                      required
                      placeholder='Ingrese su apellido'
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
                      required
                      placeholder='Ingrese su teléfono'
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
                      required
                      placeholder='Ingrese su localización'
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
                      required
                      placeholder='Ingrese su localización'
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
                      required
                      placeholder='Ingrese su nivel de educación'
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
                      value=''
                      id='permisoTrabajo'
                      required
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
                  <div class='mb-3 d-flex align-items-center justify-content-center gap-3'>
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
                            required
                            placeholder='Ingrese nombre del proyecto'
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
                          />
                          <input
                            type='text'
                            className='form-control rounded-1 text-sm'
                            placeholder='URL del proyecto #1 si esta publicado'
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
                            required
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
                            required
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
                <button
                  className='btn btn-primary text-md rounded-1'
                  type='submit'
                >
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

export default CreateProfileUser
