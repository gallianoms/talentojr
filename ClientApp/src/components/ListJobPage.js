/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable jsx-a11y/anchor-is-valid */
import { useState } from 'react'
import { useEffect } from 'react'
import React from 'react'
import { HiOutlineTrash, HiPencil } from 'react-icons/hi'

const ListJob = () => {
  const [companies, setCompanies] = useState([])
  const companyId = JSON.parse(localStorage.getItem('user'))

  useEffect(() => {
    const fetchData = async () => {
      const url = new URL('https://64e8aae299cf45b15fdff78c.mockapi.io/offers')
      url.searchParams.append('companyId', companyId.id.toString())

      const res = await fetch(url, {
        method: 'GET',
        headers: { 'content-type': 'application/json' },
      })

      if (res.ok) {
        const data = await res.json()
        setCompanies(data)
      }
    }

    fetchData()
  }, [])

  const formatDate = dateString => {
    const date = new Date(dateString)
    return `${date.getFullYear()}-${(date.getMonth() + 1)
      .toString()
      .padStart(2, '0')}-${date.getDate().toString().padStart(2, '0')}`
  }

  const handleDeleteOffer = offerId => {
    fetch(`https://64e8aae299cf45b15fdff78c.mockapi.io/offers/${offerId}`, {
      method: 'DELETE',
    })
      .then(response => {
        if (response.ok) {
          setCompanies(prevOffers =>
            prevOffers.filter(offer => offer.id !== offerId)
          )
        }
      })
      .catch(error => {
        console.error('Error deleting offer:', error)
      })
  }

  return (
    <section className='intro'>
      <div className='bg-image mt-5'>
        <div className=' d-flex align-items-center'>
          <div className='container'>
            <div className='row justify-content-center'>
              <div className='col-12'>
                <h1 className='mb-3'>Lista de ofertas</h1>
                {companies.length === 0 ? ( // Check if companies array is empty
                  <div className='text-center'>
                    <p>No hay ofertas disponibles.</p>
                    <a href='/crear-empleo' className='btn btn-primary'>
                      Publicar nueva oferta
                    </a>
                  </div>
                ) : (
                  <div className='card'>
                    <div className='card-body p-0'>
                      <div data-mdb-perfect-scrollbar='true'>
                        <table className='table mb-0 table-light table-striped'>
                          <thead>
                            <tr>
                              <th scope='col'>Oferta</th>
                              {/* <th scope="col">Descripción</th> */}
                              <th scope='col'>Tecnologias</th>
                              <th scope='col'>Localización</th>
                              <th scope='col'>Modo</th>
                              <th scope='col'>Salario</th>
                              <th scope='col'>Fecha</th>
                              <th scope='col'>Operaciones</th>
                            </tr>
                          </thead>
                          <tbody>
                            {companies.map((offer, index) => (
                              <tr key={index}>
                                <td className='text-md'>{offer.title}</td>
                                {/* <td>{offer.description}</td> */}
                                <td className='text-md'>
                                  {offer.technologies.map((leng, lengIndex) => (
                                    <span key={lengIndex}>{leng}, </span>
                                  ))}
                                </td>
                                <td className='text-md'>{offer.location}</td>
                                <td className='text-md'>{offer.mode}</td>
                                <td className='text-md'>{offer.salary}</td>
                                <td className='text-md'>
                                  {formatDate(offer.createdAt)}
                                </td>
                                <td className=''>
                                  <div className='d-flex justify-content-evenly'>
                                    <button className='btn btn-warning'>
                                      <HiPencil />
                                    </button>
                                    <button
                                      className='btn btn-danger'
                                      onClick={() =>
                                        handleDeleteOffer(offer.id)
                                      }
                                    >
                                      <HiOutlineTrash />
                                    </button>
                                  </div>
                                </td>
                              </tr>
                            ))}
                          </tbody>
                        </table>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ListJob
