import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import { BsBoxArrowRight } from 'react-icons/bs'

const CandidatesPage = () => {
  const [candidatesData, setCandidatesData] = useState([])
  const [offersData, setOffersData] = useState([])
  // const companyId = '1' // Cambiar a la compañía deseada
  const user = JSON.parse(localStorage.getItem('user'))
  const companyId = user.id

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Obtener todas las ofertas de la compañía X
        const offersUrl = new URL(
          'https://64e8aae299cf45b15fdff78c.mockapi.io/offers'
        )
        const offersResponse = await fetch(offersUrl)
        const offersData = await offersResponse.json()
        setOffersData(offersData) // Almacenar los datos de las ofertas

        // Obtener todas las aplicaciones
        const applicationsUrl = new URL(
          'https://64e8aae299cf45b15fdff78c.mockapi.io/applications'
        )
        const applicationsResponse = await fetch(applicationsUrl)
        const applicationsData = await applicationsResponse.json()

        // Obtener los detalles completos de los candidatos
        const candidatesUrl = new URL(
          'https://64e8aae299cf45b15fdff78c.mockapi.io/candidates'
        )
        const candidatesResponse = await fetch(candidatesUrl)
        const candidatesData = await candidatesResponse.json()

        // Asociar aplicaciones a los candidatos
        candidatesData.forEach(candidate => {
          candidate.applications = applicationsData.filter(
            application => application.candidateId === candidate.id
          )
        })

        // Filtrar candidatos que aplicaron a las ofertas de la compañía X
        const companyCandidates = candidatesData.filter(candidate =>
          candidate.applications.some(application =>
            offersData.some(
              offer =>
                offer.companyId === companyId &&
                offer.id === application.offerId
            )
          )
        )

        // Establecer los candidatos en el estado
        setCandidatesData(companyCandidates)
      } catch (error) {
        console.error('Error fetching data:', error)
      }
    }

    fetchData()
  }, [])

  // useEffect(() => {
  //   const fetchCandidates = async () => {
  //     try {
  //       // Obtener todas las ofertas de la compañía deseada
  //       const offersUrl = new URL(
  //         'https://64e8aae299cf45b15fdff78c.mockapi.io/offers'
  //       )
  //       const offersResponse = await fetch(offersUrl)
  //       const offersData = await offersResponse.json()

  //       // Obtener los IDs de las ofertas de la compañía
  //       const companyOffersIds = offersData
  //         .filter(offer => offer.companyId === companyId)
  //         .map(offer => offer.id)

  //       // Obtener todas las aplicaciones correspondientes a las ofertas de la compañía
  //       const applicationsUrl = new URL(
  //         'https://64e8aae299cf45b15fdff78c.mockapi.io/applications'
  //       )
  //       const applicationsResponse = await fetch(applicationsUrl)
  //       const applicationsData = await applicationsResponse.json()

  //       // Obtener los IDs de los candidatos que aplicaron a las ofertas de la compañía
  //       const companyCandidatesIds = applicationsData
  //         .filter(application => companyOffersIds.includes(application.offerId))
  //         .map(application => application.candidateId)

  //       // Obtener los detalles completos de los candidatos
  //       const candidatesUrl = new URL(
  //         'https://64e8aae299cf45b15fdff78c.mockapi.io/candidates'
  //       )
  //       const candidatesResponse = await fetch(candidatesUrl)
  //       const candidatesData = await candidatesResponse.json()

  //       // Filtrar los candidatos correspondientes a los IDs obtenidos
  //       const companyCandidates = candidatesData.filter(candidate =>
  //         companyCandidatesIds.includes(candidate.id)
  //       )

  //       // Establecer los candidatos en el estado
  //       setCandidatesData(companyCandidates)
  //     } catch (error) {
  //       console.error('Error fetching data:', error)
  //     }
  //   }

  //   fetchCandidates()
  // }, [])
  // ARRIBA OK
  // const [candidatesData, setCandidatesData] = useState([])

  // useEffect(() => {
  //   const url = new URL(
  //     'https://64e8aae299cf45b15fdff78c.mockapi.io/candidates'
  //   )
  //   // url.searchParams.append('id', '1')

  //   fetch(url)
  //     .then(response => response.json())
  //     .then(data => {
  //       console.log(data)
  //       setCandidatesData(data)
  //     })
  //     .catch(error => {
  //       console.error('Error fetching data:', error)
  //     })
  // }, [])

  return (
    <section className='intro'>
      <div className='bg-image mt-5'>
        <div className=' d-flex align-items-center'>
          <div className='container'>
            <div className='row justify-content-center'>
              <div className='col-12'>
                <h1 className='mb-3'>Lista de Candidatos</h1>
                <div className='card'>
                  <div className='card-body p-0'>
                    <div data-mdb-perfect-scrollbar='true'>
                      <table className='table table-light table-striped mb-0'>
                        <thead>
                          <tr>
                            <th scope='col'>Nombre</th>
                            <th scope='col'>Apellidos</th>
                            <th scope='col'>Localización</th>
                            <th scope='col'>Github</th>
                            <th scope='col'>Linkedin</th>
                            <th scope='col'>Ofertas</th>
                            <th scope='col'>Ver perfil</th>
                          </tr>
                        </thead>
                        <tbody>
                          {candidatesData.map((candidate, index) => (
                            <tr key={index}>
                              <td>{candidate.name}</td>
                              <td>{candidate.lastname}</td>
                              <td>{candidate.location}</td>
                              <td>{candidate.github}</td>
                              <td>{candidate.linkedin}</td>
                              <td className=''>
                                {/* Render offers data for the current candidate */}
                                {candidate.applications
                                  .filter(application =>
                                    offersData.some(
                                      offer =>
                                        offer.companyId === companyId &&
                                        offer.id === application.offerId
                                    )
                                  )
                                  .map(application => (
                                    <div key={application.id}>
                                      {
                                        offersData.find(
                                          offer =>
                                            offer.id === application.offerId
                                        )?.title
                                      }
                                    </div>
                                  ))}
                              </td>
                              <td className='text-center'>
                                <a href='perfil-candidato'>
                                  <BsBoxArrowRight size={20} />
                                </a>
                              </td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default CandidatesPage
