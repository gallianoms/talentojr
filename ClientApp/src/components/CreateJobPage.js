import React, { useState } from 'react'

const CreateJob = () => {
  const [job, setJob] = useState({
    title: '',
    description: '',
    location: '',
    mode: '',
    technologies: [],
    salary: '',
    createdAt: '',
  })

  const { id } = JSON.parse(localStorage.getItem('user'))
  const [errors, setErrors] = useState({
    title: '',
    description: '',
    location: '',
    mode: '',
    salary: '',
  })

  const handleInputChange = event => {
    const { name, value } = event.target
    setJob(prevValues => ({
      ...prevValues,
      [name]: value,
    }))
  }

  const handleSubmit = async event => {
    event.preventDefault()

    const newJob = {
      title: job.title,
      description: job.description,
      location: job.location,
      mode: job.mode,
      technologies: job.technologies.split(',').map(tech => tech.trim()), // Convert technologies to array
      salary: job.salary,
      companyId: id,
      createdAt: new Date().toISOString(), // Establecer la fecha actual
    }

    try {
      const response = await fetch(
        'https://64e8aae299cf45b15fdff78c.mockapi.io/offers',
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(newJob),
        }
      )

      if (response.ok) {
        console.log('Job offer created successfully:', newJob)
        // Reset the form after successful submission
        setJob({
          title: '',
          description: '',
          location: '',
          mode: '',
          technologies: '',
          salary: '',
          createdAt: '',
        })
      } else {
        console.error('Failed to create job offer')
      }
    } catch (error) {
      console.error('Error creating job offer:', error)
    }

    // const newErrors = {
    //   title:
    //     job.title === '' ? 'Campo titulo de trabajo no puede estar vacio' : '',
    //   description:
    //     job.description === ''
    //       ? 'Campo descripcion de trabajo no puede estar vacio'
    //       : '',
    //   mode: job.mode === '' ? 'Escoge opcion para modo de trabajo' : '',
    //   salary:
    //     job.salary === '' ? 'Campo rango salario no puede estar vacio' : '',
    // }

    // setErrors(newErrors)
    // if (
    //   !newErrors.title &&
    //   !newErrors.description &&
    //   !newErrors.mode &&
    //   !newErrors.salary
    // ) {
    //   console.log('Text values:', job)
    // }
  }

  return (
    <div className='container-fluid mb-5'>
      <div className='row justify-content-center align-items-center'>
        <div className='col-lg-6 col-md-6 col-sm-8'>
          <form
            className='p-4 shadow rounded'
            onSubmit={handleSubmit}
            type='submit'
          >
            <h2 className='mb-4'>Publica un puesto de trabajo</h2>
            <div className='mb-3'>
              <input
                type='text'
                className={`form-control rounded-1 ${
                  errors.title ? 'is-invalid' : ''
                }`}
                id='title'
                name='title'
                value={job.title}
                onChange={handleInputChange}
                placeholder='Titulo de trabajo'
                required
              />
              {errors.title && (
                <div className='invalid-feedback'>{errors.title}</div>
              )}
            </div>
            <div className='mb-3'>
              <textarea
                className={`form-control rounded-1 ${
                  errors.description ? 'is-invalid' : ''
                }`}
                id='description'
                rows='3'
                value={job.description}
                onChange={handleInputChange}
                name='description'
                required
                placeholder='Descripción de trabajo'
              ></textarea>
              {errors.description && (
                <div className='invalid-feedback'>{errors.description}</div>
              )}
            </div>
            <div className='mb-3'>
              <input
                type='text'
                className='form-control '
                id='location'
                name='location'
                value={job.location}
                onChange={handleInputChange}
                required
                placeholder='Ubicación de trabajo'
              />
            </div>
            <div className='mb-3'>
              <select
                className={`form-control rounded-1 ${
                  errors.mode ? 'is-invalid' : ''
                }`}
                id='mode'
                value={job.mode}
                onChange={handleInputChange}
                name='mode'
                required
              >
                <option value='' disabled defaultValue>
                  Modalidad de trabajo
                </option>
                <option value='Físico'>Físico</option>
                <option value='Híbrido'>Híbrido</option>
                <option value='Remoto'>Remoto</option>
              </select>
              {errors.mode && (
                <div className='invalid-feedback'>{errors.mode}</div>
              )}
            </div>
            <div className='mb-3'>
              <label htmlFor='technologies' className='form-label'>
                Tecnologias <em>(Separa las tecnologias por una coma)</em>
              </label>
              <input
                type='text'
                className='form-control rounded-1'
                id='technologies'
                name='technologies'
                value={job.technologies}
                onChange={handleInputChange}
                required
                placeholder='Tecnologias'
              />
            </div>
            <div className='mb-3'>
              <input
                type='text'
                className={`form-control rounded-1 ${
                  errors.salary ? 'is-invalid' : ''
                }`}
                id='salary'
                value={job.salary}
                name='salary'
                onChange={handleInputChange}
                required
                placeholder='Rango de salario'
              />
              {errors.salary && (
                <div className='invalid-feedback'>{errors.salary}</div>
              )}
            </div>
            <button className='btn btn-primary'>Crear</button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default CreateJob
