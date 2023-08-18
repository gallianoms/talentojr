import React from 'react'
import JobOfferCard from './JobOfferCard'
import Filters from './Filters'

const SearchJob = () => {
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

export default SearchJob
