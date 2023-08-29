import React, { useState } from 'react'
import { storage } from '../firebaseConfig'
import { ref, uploadBytes, getDownloadURL } from 'firebase/storage'

const CreateProfileUserPage = () => {
  const [profileData, setProfileData] = useState({
    photo:
      'https://www.freeiconspng.com/thumbs/no-image-icon/no-image-icon-4.png',
    imageWebsiteOne:
      'https://media.geeksforgeeks.org/wp-content/cdn-uploads/20210401151214/What-is-Website.png',
    github: '',
    linkedin: '',
    website: '',
    name: '',
    lastname: '',
    phone: '',
    location: '',
    secondLanguage: '',
    education: '',
    technologies: [],
    softSkills: [],
    permissionWork: false,
    cv: null,
    titleWebsiteOne: '',
    descriptionWebsiteOne: '',
    repositoryWebsiteOne: '',
    urlWebsiteOne: '',
  })

  const handleInputChange = event => {
    const { name, value } = event.target
    setProfileData(prevProfileData => ({
      ...prevProfileData,
      [name]: value,
    }))
  }

  const handleCheckboxChange = event => {
    const { name, checked } = event.target
    setProfileData(prevProfileData => ({
      ...prevProfileData,
      [name]: checked,
    }))
  }

  const handleArrayChange = (name, selectedOptions) => {
    const selectedValues = Array.from(selectedOptions).map(
      option => option.value
    )
    setProfileData(prevProfileData => ({
      ...prevProfileData,
      [name]: selectedValues,
    }))
  }

  const handleImageChange = (name, selectedFile) => {
    if (selectedFile) {
      // const imageUrl = URL.createObjectURL(selectedFile)
      setProfileData(prevProfileData => ({
        ...prevProfileData,
        [name]: selectedFile,
      }))
    }
  }

  const handleFileChange = event => {
    const selectedFile = event.target.files[0]
    if (selectedFile) {
      setProfileData(prevData => ({
        ...prevData,
        cv: selectedFile,
      }))
    }
  }

  const handleSubmit = async event => {
    event.preventDefault()

    const dataWithCreatedAt = {
      ...profileData,
      createdAt: new Date(), // Agregar la fecha y hora actuales
    }

    try {
      if (profileData.cv) {
        const cvFile = profileData.cv
        const cvStorageRef = ref(
          storage,
          'cvs/' + new Date().getTime() + '_' + cvFile.name
        )
        await uploadBytes(cvStorageRef, cvFile)
        const cvURL = await getDownloadURL(cvStorageRef)
        dataWithCreatedAt.cv = cvURL
      }

      if (profileData.photo) {
        const photoFile = profileData.photo
        const photoStorageRef = ref(
          storage,
          'photos/' + new Date().getTime() + '_' + photoFile.name
        )
        await uploadBytes(photoStorageRef, photoFile)
        const photoURL = await getDownloadURL(photoStorageRef)
        dataWithCreatedAt.photo = photoURL
      }

      if (profileData.imageWebsiteOne) {
        const imageWebsiteOneFile = profileData.imageWebsiteOne
        const imageWebsiteOneStorageRef = ref(
          storage,
          'websites/' + new Date().getTime() + '_' + imageWebsiteOneFile.name
        )
        await uploadBytes(imageWebsiteOneStorageRef, imageWebsiteOneFile)
        const imageWebsiteOneURL = await getDownloadURL(
          imageWebsiteOneStorageRef
        )
        dataWithCreatedAt.imageWebsiteOne = imageWebsiteOneURL
      }

      // console.log(dataWithCreatedAt)

      const user = localStorage.getItem('user')
      const { id } = JSON.parse(user)

      const response = await fetch(
        'https://64e8aae299cf45b15fdff78c.mockapi.io/candidates/' + id,
        {
          method: 'PUT',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(dataWithCreatedAt),
        }
      )
      if (response.ok) {
        console.log(
          'Profile candidate created successfully:',
          dataWithCreatedAt
        )
        window.location.href = '/buscar-empleo'
      }
    } catch (error) {
      console.log(error)
    }
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
                      onChange={event =>
                        handleImageChange('photo', event.target.files[0])
                      }
                      name='photo'
                    />
                    <label htmlFor='imageInput'>
                      <img
                        src={
                          profileData.photo !==
                          'https://www.freeiconspng.com/thumbs/no-image-icon/no-image-icon-4.png'
                            ? URL.createObjectURL(profileData.photo)
                            : profileData.photo
                        }
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
                          value={profileData.github}
                          onChange={handleInputChange}
                          name='github'
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
                          value={profileData.linkedin}
                          onChange={handleInputChange}
                          name='linkedin'
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
                          value={profileData.website}
                          onChange={handleInputChange}
                          name='website'
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
                      id='name'
                      placeholder='Ingrese su Nombre'
                      onChange={handleInputChange}
                      value={profileData.name}
                      name='name'
                    />
                    <label htmlFor='name' className='form-label text-md'>
                      Nombre
                    </label>
                  </div>
                  <div className='col-lg-3 col-12 form-floating mb-3 mb-lg-0'>
                    <input
                      type='text'
                      className='form-control rounded-1 text-md '
                      id='lastname'
                      placeholder='Ingrese su apellido'
                      onChange={handleInputChange}
                      value={profileData.lastname}
                      name='lastname'
                    />
                    <label htmlFor='lastname' className='form-label text-md'>
                      Apellido(s)
                    </label>
                  </div>
                  <div className='col-lg-3 col-12 form-floating'>
                    <input
                      type='number'
                      className='form-control rounded-1 text-md customWidth'
                      id='phone'
                      placeholder='Ingrese su teléfono'
                      onChange={handleInputChange}
                      value={profileData.phone}
                      name='phone'
                    />
                    <label htmlFor='phone' className='form-label text-md'>
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
                      id='location'
                      placeholder='Ingrese su localización'
                      onChange={handleInputChange}
                      value={profileData.location}
                      name='location'
                    />
                    <label htmlFor='location' className='form-label text-md'>
                      Localización
                    </label>
                  </div>
                  <div className='col-lg-3 col-12 form-floating mb-3 mb-lg-0'>
                    <input
                      type='text'
                      className='form-control rounded-1 text-md'
                      id='secondLanguage'
                      placeholder='Ingrese su localización'
                      onChange={handleInputChange}
                      value={profileData.secondLanguage}
                      name='secondLanguage'
                    />
                    <label
                      htmlFor='secondLanguage'
                      className='form-label text-md'
                    >
                      Segundo idioma
                    </label>
                  </div>
                  <div className='col-lg-4 col-12 form-floating '>
                    <input
                      type='text'
                      className='form-control rounded-1 text-md customWidth'
                      id='education'
                      placeholder='Ingrese su nivel de educación'
                      onChange={handleInputChange}
                      value={profileData.education}
                      name='education'
                    />
                    <label htmlFor='education' className='form-label text-md'>
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
                      htmlFor='technologies'
                      className='form-label text-md'
                    >
                      Lenguajes de programación (Elección múltiple)
                    </label>
                    <select
                      className='form-select text-md'
                      multiple
                      aria-label='Multiple select example'
                      style={{ height: '140px' }}
                      id='technologies'
                      onChange={event =>
                        handleArrayChange(
                          'technologies',
                          event.target.selectedOptions
                        )
                      }
                      value={profileData.technologies}
                    >
                      <option value='C++'>C++</option>
                      <option value='C#'>C#</option>
                      <option value='CSS'>CSS</option>
                      <option value='GO'>Goland</option>
                      <option value='HTML'>HTML</option>
                      <option value='Java'>Java</option>
                      <option value='JavaScript'>JavaScript</option>
                      <option value='Kotlin'>Kotlin</option>
                      <option value='Lua'>Lua</option>
                      <option value='Perl'>Perl</option>
                      <option value='PHP'>PHP</option>
                      <option value='Python'>Python</option>
                      <option value='R'>R</option>
                      <option value='Ruby'>Ruby</option>
                      <option value='Rust'>Rust</option>
                      <option value='Scala'>Scala</option>
                      <option value='SQL'>SQL</option>
                      <option value='Swift'>Swift</option>
                      <option value='TypeScript'>TypeScript</option>
                      <option value='Haskell'>Haskell</option>
                    </select>
                  </div>
                  <div className='col-lg-5 col-12'>
                    <label htmlFor='softSkills' className='form-label text-md'>
                      Habilidades blandas (Elección múltiple)
                    </label>
                    <select
                      className='form-select text-md'
                      multiple
                      aria-label='Multiple select example'
                      style={{ height: '140px' }}
                      id='softSkills'
                      onChange={event =>
                        handleArrayChange(
                          'softSkills',
                          event.target.selectedOptions
                        )
                      }
                      value={profileData.softSkills}
                    >
                      <option value='Adaptabilidad'>Adaptabilidad</option>
                      <option value='Aprendizaje Continuo'>
                        Aprendizaje Continuo
                      </option>
                      <option value='Autoconfianza'>Autoconfianza</option>
                      <option value='Colaboracion'>Colaboración</option>
                      <option value='Comunicacion Efectiva'>
                        Comunicación Efectiva
                      </option>
                      <option value='Comunicacion Intercultural'>
                        Comunicación Intercultural
                      </option>
                      <option value='Creatividad'>Creatividad</option>
                      <option value='Empatia'>Empatía</option>
                      <option value='Escucha Activa'>Escucha Activa</option>
                      <option value='Flexibilidad'>Flexibilidad</option>
                      <option value='Gestion del Tiempo'>
                        Gestión del Tiempo
                      </option>
                      <option value='Habilidades de Negociacion'>
                        Habilidades de Negociación
                      </option>
                      <option value='Inteligencia Emocional'>
                        Inteligencia Emocional
                      </option>
                      <option value='Liderazgo'>Liderazgo</option>
                      <option value='Pensamiento Critico'>
                        Pensamiento Crítico
                      </option>
                      <option value='Pensamiento Lateral'>
                        Pensamiento Lateral
                      </option>
                      <option value='Resiliencia'>Resiliencia</option>
                      <option value='Resolucion de Problemas'>
                        Resolución de Problemas
                      </option>
                      <option value='Toma de Decisiones'>
                        Toma de Decisiones
                      </option>
                      <option value='Trabajo en Equipo'>
                        Trabajo en Equipo
                      </option>
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
                      id='permissionWork'
                      onChange={handleCheckboxChange}
                      checked={profileData.permissionWork}
                      name='permissionWork'
                    />
                    <label
                      className='form-check-label text-md'
                      htmlFor='permissionWork'
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
                      onChange={handleFileChange}
                      accept='application/pdf'
                      name='cv'
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
                        onChange={event =>
                          handleImageChange(
                            'imageWebsiteOne',
                            event.target.files[0]
                          )
                        }
                        name='imageWebsiteOne'
                      />
                      <label htmlFor='imageInput1'>
                        <img
                          src={
                            profileData.imageWebsiteOne !==
                            'https://media.geeksforgeeks.org/wp-content/cdn-uploads/20210401151214/What-is-Website.png'
                              ? URL.createObjectURL(profileData.imageWebsiteOne)
                              : profileData.imageWebsiteOne
                          }
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
                            id='titleWebsiteOne'
                            placeholder='Ingrese nombre del proyecto'
                            value={profileData.titleWebsiteOne}
                            onChange={handleInputChange}
                            name='titleWebsiteOne'
                          />
                          <label
                            htmlFor='titleWebsiteOne'
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
                            value={profileData.descriptionWebsiteOne}
                            onChange={handleInputChange}
                            name='descriptionWebsiteOne'
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
                            value={profileData.repositoryWebsiteOne}
                            onChange={handleInputChange}
                            name='repositoryWebsiteOne'
                          />
                          <input
                            type='text'
                            className='form-control rounded-1 text-sm'
                            placeholder='URL del proyecto #1 si esta publicado'
                            value={profileData.urlWebsiteOne}
                            onChange={handleInputChange}
                            name='urlWebsiteOne'
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
