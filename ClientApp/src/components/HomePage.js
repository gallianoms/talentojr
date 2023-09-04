/* eslint-disable jsx-a11y/iframe-has-title */
import React from 'react'
import { HiOutlineLocationMarker } from 'react-icons/hi'
import { AiOutlineMail } from 'react-icons/ai'
import { AiOutlinePhone } from 'react-icons/ai'
import { useEffect } from 'react'
import JobOfferCard from './JobOfferCard'
import { useState } from 'react'

const HomePage = () => {
  const [offers, setOffers] = useState([])

  useEffect(() => {
    const fetchData = async () => {
      const url = new URL('https://64e8aae299cf45b15fdff78c.mockapi.io/offers')
      url.searchParams.append('limit', 2)

      const res = await fetch(url, {
        method: 'GET',
        headers: { 'content-type': 'application/json' },
      })

      if (res.ok) {
        const data = await res.json()
        setOffers(data)
      }
    }

    fetchData()
  }, [])

  return (
    <>
      {/* Hero section */}
      <section id='hero'>
        <div className='container'>
          <div className='row'>
            <div
              className='col-lg-6 pt-5 pt-lg-0 order-2 order-lg-1 d-flex flex-column justify-content-center mt-5'
              data-aos='fade-up'
            >
              <div>
                <h1 className='mb-3'>
                  Navega hacia tu primer empleo en tecnología
                </h1>
                <h2 className='mb-3 text-lg'>
                  Te aceleramos el acceso al mundo laboral en TI para ti,
                  conectándolos con empresas en busca de talento junior y
                  primeros pasos en sus carreras.
                </h2>
                <a href='#about' className='btn-get-started scrollto'>
                  Contrata o se contratado
                </a>
              </div>
            </div>
            <div
              className='col-lg-6 order-1 order-lg-2 hero-img d-flex justify-content-center'
              data-aos='fade-left'
            >
              <img src='/img/hero-img.png' className='img-fluid w-75' alt='' />
            </div>
          </div>
        </div>
      </section>

      <main id='main'>
        {/* Section about */}
        <section id='about' className='about' data-aos='fade-up'>
          <div className='container'>
            <div className='row'>
              <div className='col-lg-6' data-aos='zoom-in'>
                <img src='/img/about.jpg' className='img-fluid' alt='' />
              </div>
              <div
                className='col-lg-6 d-flex flex-column justify-contents-center'
                data-aos='fade-left'
              >
                <div className='content pt-4 pt-lg-0'>
                  <h3>Aprende mas sobre nosotros</h3>
                  <p className='fst-italic'>
                    Nuestra plataforma busca servir como un puente entre
                    empresas que buscan talento junior y personas que están
                    comenzando sus carreras en el campo de TI.
                  </p>
                  <ul>
                    <li>
                      Creación de perfiles: Los talentos IT junior podrán crear
                      perfiles detallados, donde muestren sus habilidades
                      técnicas para atraer a posibles empleadores.
                    </li>
                    <li>
                      Búsqueda de empleo: Los usuarios podrán buscar empleos
                      adecuados a su perfil y experiencia utilizando filtros y
                      palabras clave específicas.
                    </li>
                    <li>
                      Publicación de ofertas de empleo: Las empresas y
                      empleadores podrán publicar anuncios de trabajo que
                      detallen las habilidades requeridas.
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* latest offers */}
      <section
        id='team'
        className='team section-bg mt-5 mb-5'
        data-aos='fade-up'
      >
        <div className='row d-flex justify-content-center gap-4 py-4'>
          {offers.map((offer, index) => (
            <JobOfferCard offer={offer} />
          ))}
        </div>

        {/* FAQS section */}
        <h1>Preguntas frecuentes</h1>
        <div
          className='accordion accordion-flush'
          id='accordionFlushExample'
          data-aos='fade-up'
        >
          <div className='accordion-item'>
            <h2 className='accordion-header' id='flush-headingOne'>
              <button
                className='accordion-button collapsed'
                type='button'
                data-bs-toggle='collapse'
                data-bs-target='#flush-collapseOne'
                aria-expanded='false'
                aria-controls='flush-collapseOne'
              >
                <strong>¿Cómo funciona su plataforma?</strong>
              </button>
            </h2>
            <div
              id='flush-collapseOne'
              className='accordion-collapse collapse'
              aria-labelledby='flush-headingOne'
              data-bs-parent='#accordionFlushExample'
            >
              <div className='accordion-body'>
                Nuestra plataforma busca servir como un puente entre empresas
                que buscan talento junior y personas que están comenzando sus
                carreras en el campo de TI.
              </div>
            </div>
          </div>
          <div className='accordion-item'>
            <h2 className='accordion-header' id='flush-headingTwo'>
              <button
                className='accordion-button collapsed'
                type='button'
                data-bs-toggle='collapse'
                data-bs-target='#flush-collapseTwo'
                aria-expanded='false'
                aria-controls='flush-collapseTwo'
              >
                <strong>
                  ¿Cómo se seleccionan y evalúan a los desarrolladores junior en
                  su plataforma?
                </strong>
              </button>
            </h2>
            <div
              id='flush-collapseTwo'
              className='accordion-collapse collapse'
              aria-labelledby='flush-headingTwo'
              data-bs-parent='#accordionFlushExample'
            >
              <div className='accordion-body'>
                Placeholder content for this accordion, which is intended to
                demonstrate the <code>.accordion-flush</code> class. This is the
                second item's accordion body. Let's imagine this being filled
                with some actual content.
              </div>
            </div>
          </div>
          <div className='accordion-item'>
            <h2 className='accordion-header' id='flush-headingThree'>
              <button
                className='accordion-button collapsed'
                type='button'
                data-bs-toggle='collapse'
                data-bs-target='#flush-collapseThree'
                aria-expanded='false'
                aria-controls='flush-collapseThree'
              >
                <strong>
                  ¿Puedo ver ejemplos de trabajos anteriores de los
                  desarrolladores junior?
                </strong>
              </button>
            </h2>
            <div
              id='flush-collapseThree'
              className='accordion-collapse collapse'
              aria-labelledby='flush-headingThree'
              data-bs-parent='#accordionFlushExample'
            >
              <div className='accordion-body'>
                Sí, podemos proporcionar ejemplos de proyectos previos para
                demostrar la capacidad de nuestros desarrolladores junior.
              </div>
            </div>
          </div>
          <div className='accordion-item'>
            <h2 className='accordion-header' id='flush-headingFour'>
              <button
                className='accordion-button collapsed'
                type='button'
                data-bs-toggle='collapse'
                data-bs-target='#flush-collapseFour'
                aria-expanded='false'
                aria-controls='flush-collapseFour'
              >
                <strong>
                  ¿Qué medidas de seguridad tienen en su plataforma?
                </strong>
              </button>
            </h2>
            <div
              id='flush-collapseFour'
              className='accordion-collapse collapse'
              aria-labelledby='flush-headingFour'
              data-bs-parent='#accordionFlushExample'
            >
              <div className='accordion-body'>
                Implementamos medidas de seguridad para proteger la información
                confidencial y garantizar la privacidad de los datos.
              </div>
            </div>
          </div>
          <div className='accordion-item'>
            <h2 className='accordion-header' id='flush-headingFive'>
              <button
                className='accordion-button collapsed'
                type='button'
                data-bs-toggle='collapse'
                data-bs-target='#flush-collapseFive'
                aria-expanded='false'
                aria-controls='flush-collapseFive'
              >
                <strong>
                  ¿Qué sucede si no estamos satisfechos con el trabajo de un
                  desarrollador junior?
                </strong>
              </button>
            </h2>
            <div
              id='flush-collapseFive'
              className='accordion-collapse collapse'
              aria-labelledby='flush-headingFive'
              data-bs-parent='#accordionFlushExample'
            >
              <div className='accordion-body'>
                Trabajaremos para resolver cualquier problema y, si es
                necesario, encontraremos soluciones alternativas para asegurar
                su satisfacción.
              </div>
            </div>
          </div>
          <div className='accordion-item'>
            <h2 className='accordion-header' id='flush-headingSix'>
              <button
                className='accordion-button collapsed'
                type='button'
                data-bs-toggle='collapse'
                data-bs-target='#flush-collapseSix'
                aria-expanded='false'
                aria-controls='flush-collapseSix'
              >
                <strong>
                  ¿Cómo nos ponemos en contacto con su equipo de soporte si
                  tenemos alguna pregunta o problema?
                </strong>
              </button>
            </h2>
            <div
              id='flush-collapseSix'
              className='accordion-collapse collapse'
              aria-labelledby='flush-headingSix'
              data-bs-parent='#accordionFlushExample'
            >
              <div className='accordion-body'>
                Pueden ponerse en contacto con nuestro equipo de soporte a
                través de chat en vivo, correo electrónico o teléfono.
              </div>
            </div>
          </div>
        </div>

        {/* Footer */}
      </section>

      {/* <!-- ======= Contact Section ======= --> */}
      <section id='contact' className='contact section-bg mt-5 mb-5'>
        <div className='container'>
          <div className='section-title' data-aos='fade-up'>
            <h2>Contacta con nosotros</h2>
          </div>

          <div className='row'>
            <div
              className='col-lg-5 d-flex align-items-stretch'
              data-aos='fade-right'
            >
              <div className='info'>
                <div className='address'>
                  <i className='bi bi-geo-alt'>
                    <HiOutlineLocationMarker />
                  </i>
                  <h4>Location:</h4>
                  <p>C/ D'en Llastics 2, 08003 Barcelona</p>
                </div>

                <div className='email'>
                  <i className='bi bi-envelope'>
                    <AiOutlineMail />
                  </i>
                  <h4>Email:</h4>
                  <p>talentojr@gmail.com</p>
                </div>

                <div className='phone'>
                  <i className='bi bi-phone'>
                    <AiOutlinePhone />
                  </i>
                  <h4>Call:</h4>
                  <p>+1 5589 55488 55s</p>
                </div>
                <iframe
                  src='https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d748.3370839395462!2d2.1795248!3d41.388241!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12a4a3b369fa8b5b%3A0x7a8065656d2cbe0!2sFundesplai%20-%20Centre%20de%20Formaci%C3%B3%20Ll%C3%A0stics!5e0!3m2!1sen!2ses!4v1692093487992!5m2!1sen!2ses'
                  allowFullScreen=''
                  className='iframe'
                  loading='lazy'
                  reFerrerPolicy='no-referrer-when-downgrade'
                ></iframe>
              </div>
            </div>

            <div
              className='col-lg-7 mt-5 mt-lg-0 d-flex align-items-stretch'
              data-aos='fade-left'
            >
              <form>
                <div className='row'>
                  <div className='form-group col-md-6'>
                    <label>Your Name</label>
                    <input
                      type='text'
                      name='name'
                      className='form-control'
                      id='name'
                      required
                    />
                  </div>
                  <div className='form-group col-md-6 mt-3 mt-md-0'>
                    <label>Your Email</label>
                    <input
                      type='email'
                      className='form-control'
                      name='email'
                      id='email'
                      required
                    />
                  </div>
                </div>
                <div className='form-group mt-3'>
                  <label>Subject</label>
                  <input
                    type='text'
                    className='form-control'
                    name='subject'
                    id='subject'
                    required
                  />
                </div>
                <div className='form-group mt-3'>
                  <label>Message</label>
                  <textarea
                    className='form-control'
                    name='message'
                    rows='10'
                    required
                  ></textarea>
                </div>
                <div className='text-center mt-3'>
                  <a href='#contact' className='btn-get-started'>
                    Send Message
                  </a>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
      {/* <!-- End Contact Section --> */}

      {/* Footer section */}
      <footer id='footer'>
        <div className='container'>
          <div className='copyright'>
            &copy; Copyright{' '}
            <strong>
              <span>TalentoJr</span>
            </strong>
            . All Rights Reserved
          </div>
        </div>
      </footer>
    </>
  )
}

export default HomePage
