import React, { useState } from 'react'

// const Filters = () => {
const Filters = ({ onSearch }) => {
  const [searchQuery, setSearchQuery] = useState('')

  const handleSearchChange = event => {
    const newSearchQuery = event.target.value
    setSearchQuery(newSearchQuery)

    if (newSearchQuery.trim() === '') {
      onSearch('') // Si el término de búsqueda está vacío, muestra todas las ofertas
    } else {
      onSearch(newSearchQuery)
    }
  }

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
            onChange={handleSearchChange}
            value={searchQuery}
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
            <option>Lenguaje</option>
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
        <div className='col-lg-2'>
          <select
            className='form-select text-md'
            aria-label='Default select example'
          >
            <option>Modo de empleo</option>
            <option value='1'>Fisico</option>
            <option value='2'>Hibrido</option>
            <option value='3'>Remoto</option>
          </select>
        </div>
        <div className='col-lg-2'>
          <select
            className='form-select text-md'
            aria-label='Default select example'
          >
            <option>Rango salarial</option>
            <option value='1'>15k - 20k</option>
            <option value='2'>21k - 25k</option>
            <option value='3'>26k - 30k</option>
          </select>
        </div>
      </div>
    </div>
  )
}

export default Filters
