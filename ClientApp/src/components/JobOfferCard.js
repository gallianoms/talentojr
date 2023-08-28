import React from "react";
import {
  HiOutlineLocationMarker,
  HiOutlineCurrencyEuro,
  HiOutlineAcademicCap,
} from 'react-icons/hi'
import { formatDistanceToNow } from 'date-fns'
import { es } from 'date-fns/locale'


const JobOfferCard = ({ offer }) => {
  const {
    id,
    title,
    description,
    experience,
    location,
    mode,
    salary,
    technologies,
    createdAt,
  } = offer


  // TODO: Resolve button to send offer

  return (
    <div className='card mb-3 rounded-1 shadow-sm' style={{ maxWidth: 540 }}>
      <div className='row g-0'>
        <div className='col-md-12'>
          <div className='card-body'>
            <div className='d-flex justify-content-between'>
              <h5 className='card-title'>{title}</h5>
              <h6 className='card-subtitle mb-2 text-muted d-flex align-self-center '>
                {mode}
              </h6>
            </div>
            <p className="card-text text-md mb-4">{description}</p>
            <div className="row mb-4">
              <div className="col-lg-4 ">
                <div className="d-flex mb-1">
                  <HiOutlineAcademicCap
                    className="d-flex align-self-center"
                    style={{ fontSize: "20px" }}
                  />
                  <span className="mx-2 text-md">{experience}</span>
                </div>
                <div className="d-flex mb-1">
                  <HiOutlineCurrencyEuro
                    className="d-flex align-self-center"
                    style={{ fontSize: "20px" }}
                  />
                  <span className='mx-2 text-md'>{salary}</span>

                </div>
                <div className="d-flex mb-1">
                  <HiOutlineLocationMarker
                    className="d-flex align-self-center"
                    style={{ fontSize: "20px" }}
                  />
                  <span className='mx-2 text-md'>{location}</span>
                </div>
              </div>
              <div className='col-lg-8 d-flex align-items-center '>
                <div className='d-flex flex-wrap gap-2 justify-content-end'>
                  {technologies.map((technology, idx) => (
                    <span
                      key={idx}
                      className='badge rounded-pill text-bg-light p-2'
                    >
                      {technology}
                    </span>
                  ))}
                </div>
              </div>
            </div>
            <div className='row'>
              <div className='col-lg-7 d-flex align-items-center'>
                <p className='card-text d-flex'>
                  <small className='text-body-secondary text-sm text-muted'>
                    Oferta creada{' '}
                    {formatDistanceToNow(new Date(createdAt), {
                      locale: es,
                    })}
                  </small>
                </p>
              </div>
              <div className='col-lg-5 pb-4 pb-lg-0 d-flex justify-content-end'>
                <button
                  className="btn btn-primary text-md rounded-1"
                  type="submit"
                >
                  Aplicar oferta
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JobOfferCard;
