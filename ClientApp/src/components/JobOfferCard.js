import React from 'react'
import {
  HiOutlineLocationMarker,
  HiOutlineCurrencyEuro,
  HiOutlineAcademicCap,
} from 'react-icons/hi'

const JobOfferCard = () => {
  return (
    <div className='card mb-3 rounded-1 shadow-sm' style={{ maxWidth: 540 }}>
      <div className='row g-0'>
        <div className='col-md-12'>
          <div className='card-body'>
            <div className='d-flex justify-content-between'>
              <h5 className='card-title'>Desarrollador C# </h5>
              <h6 className='card-subtitle mb-2 text-muted d-flex align-self-center '>
                Remoto
              </h6>
            </div>
            <p className='card-text text-md mb-4'>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Praesentium atque totam, reprehenderit dolore perferendis optio
              sapiente quisquam quae quaerat! Rerum incidunt commodi uisquam
              quae quaerat! Rerum...
            </p>
            <div className='row mb-4'>
              <div className='col-lg-4 '>
                <div className='d-flex mb-1'>
                  <HiOutlineAcademicCap
                    className='d-flex align-self-center'
                    style={{ fontSize: '20px' }}
                  />
                  <span className='mx-2 text-md'>Junior</span>
                </div>
                <div className='d-flex mb-1'>
                  <HiOutlineCurrencyEuro
                    className='d-flex align-self-center'
                    style={{ fontSize: '20px' }}
                  />
                  <span className='mx-2 text-md'>18k - 22k</span>
                </div>
                <div className='d-flex mb-1'>
                  <HiOutlineLocationMarker
                    className='d-flex align-self-center'
                    style={{ fontSize: '20px' }}
                  />
                  <span className='mx-2 text-md'>Barcelona</span>
                </div>
              </div>
              <div className='col-lg-8 d-flex align-items-center '>
                <div className='d-flex flex-wrap gap-2 justify-content-end'>
                  <span className='badge rounded-pill text-bg-light p-2'>
                    HTML
                  </span>
                  <span className='badge rounded-pill text-bg-light p-2'>
                    CSS
                  </span>
                  <span className='badge rounded-pill text-bg-light p-2'>
                    JavaScript
                  </span>
                  <span className='badge rounded-pill text-bg-light p-2'>
                    Python
                  </span>
                  <span className='badge rounded-pill text-bg-light p-2'>
                    Java
                  </span>
                  <span className='badge rounded-pill text-bg-light p-2'>
                    SQL
                  </span>
                  <span className='badge rounded-pill text-bg-light p-2'>
                    React
                  </span>
                  <span className='badge rounded-pill text-bg-light p-2'>
                    Node.js
                  </span>
                </div>
              </div>
            </div>
            <div className='row'>
              <div className='col-lg-6 d-flex align-items-center'>
                <p className='card-text d-flex'>
                  <small className='text-body-secondary text-sm text-muted'>
                    Oferta añadida hace 3 minutos
                  </small>
                </p>
              </div>
              <div className='col-lg-6 pb-4 pb-lg-0 d-flex justify-content-end'>
                <button
                  className='btn btn-primary text-md rounded-1'
                  type='submit'
                >
                  Aplicar oferta
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default JobOfferCard
