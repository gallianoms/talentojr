import React, { useEffect, useState } from 'react'
import JobOfferCard from './JobOfferCard'
import Filters from './Filters'

const SearchJobPage = () => {
  const [offersData, setOffersData] = useState([])
  const [filteredOffers, setFilteredOffers] = useState([])
  const [appliedOffers, setAppliedOffers] = useState([])

  const handleApply = offerId => {
    setAppliedOffers([...appliedOffers, offerId])
  }

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          'https://64e8aae299cf45b15fdff78c.mockapi.io/offers'
        )
        const data = await response.json()
        setOffersData(data)
        setFilteredOffers(data) // Establecer los datos filtrados al principio
      } catch (error) {
        console.log('Error fetching data', error)
      }
    }
    fetchData()
  }, [])

  const handleSearch = searchQuery => {
    if (searchQuery === '') {
      setFilteredOffers(offersData) // Mostrar todas las ofertas si el término está vacío
    } else {
      const filtered = offersData.filter(offer =>
        offer.title.toLowerCase().includes(searchQuery.toLowerCase())
      )
      setFilteredOffers(filtered)
    }
  }

  const sortedOffers = filteredOffers.sort(
    (a, b) => new Date(b.createdAt) - new Date(a.createdAt)
  )

  console.log(offersData)

  if (offersData.length === 0) {
    return <p>Cargando ofertas...</p>
  }

  return (
    <>
      <br />
      <Filters onSearch={handleSearch} />
      <hr />
      {sortedOffers.length === 0 ? (
        <b>No se encontraron coincidencias.</b>
      ) : (
        <div className='row d-flex justify-content-center gap-4 py-4'>
          {sortedOffers.map(offer => (
            <JobOfferCard
              key={offer.id}
              offer={offer}
              applied={appliedOffers.includes(offer.id)}
              onApply={handleApply}
            />
          ))}
        </div>
      )}
    </>
  )
}

export default SearchJobPage
