import React from 'react'

const Filters = () => {
  return (
    <div className='container flex'>
      <h4 className='text-center mb-3 text-muted fw-bold'>
        Filtros de Búsqueda
      </h4>
      <div className='row d-flex justify-content-center'>
        <div className='col-lg-3 col-12'>
          <input
            type='text'
            placeholder='Buscar por titulo, palabras clave'
            className='form-control text-md'
          />
        </div>
        <div className='col-lg-3 col-12'>
          <input
            type='text'
            placeholder='Buscar por ciudad'
            className='form-control text-md'
          />
        </div>
      </div>
      <div className='row d-flex justify-content-center mt-3'>
        <div className='col-lg-2'>
          <select
            className='form-select text-md'
            aria-label='Default select example'
          >
            <option selected>Lenguaje</option>
            <option value='1'>One</option>
            <option value='2'>Two</option>
            <option value='3'>Three</option>
          </select>
        </div>
        <div className='col-lg-2'>
          <select
            className='form-select text-md'
            aria-label='Default select example'
          >
            <option selected>Modo de empleo</option>
            <option value='1'>One</option>
            <option value='2'>Two</option>
            <option value='3'>Three</option>
          </select>
        </div>
        <div className='col-lg-2'>
          <select
            className='form-select text-md'
            aria-label='Default select example'
          >
            <option selected>Rango salarial</option>
            <option value='1'>One</option>
            <option value='2'>Two</option>
            <option value='3'>Three</option>
          </select>
        </div>
      </div>
    </div>
  )
}

export default Filters
