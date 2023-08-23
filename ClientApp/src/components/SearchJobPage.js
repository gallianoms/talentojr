import React from 'react'
import JobOfferCard from './JobOfferCard'
import Filters from './Filters'

const SearchJobPage = () => {
  return (
    <>
      <br />
      <Filters />
      <hr />
      <div className='row d-flex justify-content-center gap-4 py-4'>
        <JobOfferCard />
        <JobOfferCard />
        <JobOfferCard />
        <JobOfferCard />
      </div>
    </>
  )
}

export default SearchJobPage
