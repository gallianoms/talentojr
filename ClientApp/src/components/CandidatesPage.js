import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import { BsBoxArrowRight } from 'react-icons/bs'

const CandidatesPage = () => {
  const [candidatesData, setCandidatesData] = useState([])

  useEffect(() => {
    fetch('https://64e8aae299cf45b15fdff78c.mockapi.io/candidates')
      .then(response => response.json())
      .then(data => {
        console.log(data)
        setCandidatesData(data)
      })
      .catch(error => {
        console.error('Error fetching data:', error)
      })
  }, [])

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
                      <table className='table table-striped mb-0'>
                        <thead>
                          <tr>
                            <th scope='col'>Nombre</th>
                            <th scope='col'>Apellidos</th>
                            <th scope='col'>Localización</th>
                            <th scope='col'>Github</th>
                            <th scope='col'>Linkedin</th>
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
                              <td>
                                <a href='hola'>
                                  <BsBoxArrowRight />
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
