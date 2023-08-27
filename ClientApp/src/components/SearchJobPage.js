import React, { useEffect, useState } from 'react'
import JobOfferCard from './JobOfferCard'
import Filters from './Filters'

const SearchJobPage = () => {
  const [offersData, setOffersData] = useState([])

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          'https://64e8aae299cf45b15fdff78c.mockapi.io/ofertas'
        )
        const data = await response.json()
        setOffersData(data)
      } catch (error) {
        console.log('Error fetching data', error)
      }
    }
    fetchData()
  }, [])

  console.log(offersData)

  return (
    <>
      <br />
      <Filters />
      <hr />
      <div className='row d-flex justify-content-center gap-4 py-4'>
        {offersData.map(offer => (
          <JobOfferCard key={offer.id} offer={offer} />
        ))}
      </div>
    </>
  )
}

export default SearchJobPage
