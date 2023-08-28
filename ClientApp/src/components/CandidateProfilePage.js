import React, { useEffect, useState } from 'react'
import { AiOutlineLinkedin, AiOutlineGithub } from 'react-icons/ai'
import { HiDesktopComputer } from 'react-icons/hi'

const CandidateProfilePage = () => {
  const [candidateData, setCandidateData] = useState([])

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          'https://64e8aae299cf45b15fdff78c.mockapi.io/candidates/1'
          // TODO: replace ID
        )
        const data = await response.json()
        setCandidateData(data)
      } catch (error) {
        console.log('Error fetching data', error)
      }
    }
    fetchData()
  }, [])

  console.log(candidateData)

  // const technologiesList = candidateData.technologies.join(', ')
  // const skillsList = candidateData.softSkills.join(', ')

  return (
    <>
      <div className='container mt-5'>
        <div className='row shadow-sm'>
          {/* Image - Name - LastName - Email - Phone - Location - LinkedIn - Github - Website */}
          <div className='col-lg-4 border'>
            <div className='text-center'>
              <img
                src={candidateData.photo}
                alt='Profile'
                className='img-fluid rounded-circle mt-4'
                width='160'
              />
              <h4 className='mt-3'>
                {candidateData.name} {candidateData.lastname}
              </h4>
              <p className='text-muted m-0 mb-1'>{candidateData.email}</p>
              <p className='text-muted m-0 mb-1'>{candidateData.phone}</p>
              <div
                className='gap-5 d-flex justify-content-center mt-2'
                style={{ fontSize: '27px' }}
              >
                <a
                  href={candidateData.linkedin}
                  target='_blank'
                  rel='noreferrer'
                >
                  <AiOutlineLinkedin style={{ color: '#0b65c2' }} />
                </a>
                <a href={candidateData.github} target='_blank' rel='noreferrer'>
                  <AiOutlineGithub style={{ color: '#02040a' }} />
                </a>
                <a
                  href={candidateData.website}
                  target='_blank'
                  rel='noreferrer'
                >
                  <HiDesktopComputer style={{ color: '#6b7280' }} />
                </a>
              </div>
            </div>
          </div>
          {/* Education - Location - Second Language - Permission - Code Language - Soft Skills - CV */}
          <div className='col-lg-8'>
            <div className='row border'>
              <div className='col-md-5'>
                <h5 className='mt-4'>Nivel de educación</h5>
                <p>{candidateData.education}</p>
                <h5 className='mt-4'>Localización</h5>
                <p>{candidateData.location}</p>
              </div>
              <div className='col-md-7'>
                <h5 className='mt-4'>Lenguajes de Programación</h5>
                {candidateData.technologies &&
                  candidateData.technologies.length > 0 && (
                    <p>{candidateData.technologies.join(', ')}</p>
                  )}
                <h5 className='mt-4'>Habilidades blandas</h5>
                {candidateData.softSkills &&
                  candidateData.softSkills.length > 0 && (
                    <p>{candidateData.softSkills.join(', ')}</p>
                  )}
              </div>
              <div className='col-md-5'>
                <h5 className='mt-4'>Segundo Idioma</h5>
                <p>{candidateData.secondLanguage}</p>
                <h5 className='mt-4'>Permiso de trabajo en España</h5>
                <p>{candidateData.permissionWork === true ? 'Si' : 'No'}</p>
              </div>
              <div className='col-md-7'>
                <h5 className='mt-4'>Curriculum Vitae (CV)</h5>
                <div className='d-flex gap-3'>
                  {/* <a
                    href={candidateData.cv}
                    target='_blank'
                    rel='noreferrer'
                    className=' d-flex align-self-center'
                    style={{ textDecoration: 'none' }}
                  >
                    Revisar en línea
                  </a> */}
                  <a
                    href={candidateData.cv}
                    target='_blank'
                    rel='noreferrer'
                    download
                    className='btn btn-primary rounded-1 text-md'
                  >
                    Descargar PDF
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='row mt-4 mb-3'>
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
                />
                <label htmlFor='imageInput1'>
                  <img
                    src={candidateData.imageWebsiteOne}
                    className='card-img-top'
                    alt='...'
                    width={'100%'}
                    style={{ cursor: 'pointer' }}
                  />
                </label>
                <div className='card-body'>
                  <div className='col-lg-12 form-floating mb-3'>
                    <h5>{candidateData.titleWebsiteOne}</h5>
                  </div>
                  <div className='form-floating mb-3'>
                    <p className='text-md'>
                      {candidateData.descriptionWebsiteOne}
                    </p>
                  </div>
                  <div className='col-lg-12'>
                    <a
                      href='http://reposito.com'
                      className='d-block  text-md mb-1'
                      style={{ textDecoration: 'none' }}
                    >
                      {candidateData.repositoryWebsiteOne}
                    </a>
                    <a
                      href='http://url.com'
                      className='d-inline-block  text-md'
                      style={{ textDecoration: 'none' }}
                    >
                      {candidateData.urlWebsiteOne}
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Project 2 */}
        {/* <div className='col-lg-4 mt-4 rounded-1 '>
          <div className='row mb-3'>
            <div className='col-lg-12'>
              <div className='card'>
                <input
                  type='file'
                  accept='image/*'
                  style={{ display: 'none' }}
                  id='imageInput2'
                />
                <label htmlFor='imageInput2'>
                  <img
                    src='https://media.geeksforgeeks.org/wp-content/cdn-uploads/20210401151214/What-is-Website.png'
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
                    <label htmlFor='floatingTextarea2' className='text-md'>
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
        </div> */}

        {/* Project 3 */}
        {/* <div className='col-lg-4 mt-4 rounded-1 '>
          <div className='row mb-3'>
            <div className='col-lg-12'>
              <div className='card'>
                <input
                  type='file'
                  accept='image/*'
                  style={{ display: 'none' }}
                  id='imageInput3'
                />
                <label htmlFor='imageInput3'>
                  <img
                    src='https://media.geeksforgeeks.org/wp-content/cdn-uploads/20210401151214/What-is-Website.png'
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
                    <label htmlFor='floatingTextarea3' className='text-md'>
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
        </div> */}
      </div>
    </>
  )
}

export default CandidateProfilePage

// 3column - 4spaces
// profile image ?
// name *
// last name *
// email *
// phone *
//  github *
// linkedin ?
// website ?

// education level *
// location *
// 2nd language ?
// permission to work in spain *

// code language *
// soft skills *
// CV file *

// 3column - 4spaces
// Projects (1,2,3) * ? ?
// title *
// description *
// repository *
// URL ?
