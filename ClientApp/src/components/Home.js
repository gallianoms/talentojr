/* eslint-disable jsx-a11y/iframe-has-title */
import React from "react";
import { HiOutlineLocationMarker } from "react-icons/hi";
import { AiOutlineMail } from "react-icons/ai";
import { AiOutlinePhone } from "react-icons/ai";

const Home = () => {
  return (
    <>
      {/* Hero section */}
      <section id="hero">
        <div className="container">
          <div className="row">
            <div
              className="col-lg-6 pt-5 pt-lg-0 order-2 order-lg-1 d-flex flex-column justify-content-center mt-5"
              data-aos="fade-up"
            >
              <div>
                <h1 className="mb-3">
                  Navega hacia tu primer empleo en tecnología
                </h1>
                <h2 className="mb-3 text-lg">
                  Te aceleramos el acceso al mundo laboral en TI para ti,
                  conectándolos con empresas en busca de talento junior y
                  primeros pasos en sus carreras.
                </h2>
                <a href="#about" className="btn-get-started scrollto">
                  Contrata o se contratado
                </a>
              </div>
            </div>
            <div
              className="col-lg-6 order-1 order-lg-2 hero-img"
              data-aos="fade-left"
            >
              <img src="/img/hero-img.png" className="img-fluid w-75" alt="" />
            </div>
          </div>
        </div>
      </section>

      <main id="main">
        {/* Section about */}
        <section id="about" className="about" data-aos="fade-up">
          <div className="container">
            <div className="row">
              <div className="col-lg-6" data-aos="zoom-in">
                <img src="/img/about.jpg" className="img-fluid" alt="" />
              </div>
              <div
                className="col-lg-6 d-flex flex-column justify-contents-center"
                data-aos="fade-left"
              >
                <div className="content pt-4 pt-lg-0">
                  <h3>Aprende mas sobre nosotros</h3>
                  <p className="fst-italic">
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
      <section id="team" className="team section-bg" data-aos="fade-up">
        <div className="container mb-5 mt-5">
          <div className="section-title">
            <h2>Ofertas recientes</h2>
          </div>
          <div className="row">
            <div className="col-md-6 col-lg-4 d-flex align-items-stretch mb-5 mb-lg-0">
              <div className="icon-box icon-box-pink">
                <div className="icon">
                  <i className="bx bxl-dribbble"></i>
                </div>
                <h4 className="title">Lorem Ipsum</h4>
                <p className="description">
                  Voluptatum deleniti atque corrupti quos dolores et quas
                  molestias excepturi sint occaecati cupiditate
                </p>
                <a href="#offers" className="link-offers">
                  Ver ofertas
                </a>
              </div>
            </div>

            <div className="col-md-6 col-lg-4 d-flex align-items-stretch mb-5 mb-lg-0">
              <div className="icon-box icon-box-cyan">
                <div className="icon">
                  <i className="bx bx-file"></i>
                </div>
                <h4 className="title">Sed ut perspiciatis</h4>
                <p className="description">
                  Duis aute irure dolor in reprehenderit in voluptate velit esse
                  cillum dolore eu fugiat nulla
                </p>
                <a href="#offers" className="link-offers">
                  Ver ofertas
                </a>
              </div>
            </div>

            <div className="col-md-6 col-lg-4 d-flex align-items-stretch mb-5 mb-lg-0">
              <div className="icon-box icon-box-green">
                <div className="icon">
                  <i className="bx bx-tachometer"></i>
                </div>
                <h4 className="title">Magni Dolores</h4>
                <p className="description">
                  Excepteur sint occaecat cupidatat non proident, sunt in culpa
                  qui officia deserunt mollit anim
                </p>
                <a href="#offers" className="link-offers">
                  Ver ofertas
                </a>
              </div>
            </div>

            <div className="col-md-6 col-lg-4 d-flex align-items-stretch mb-5 mt-3 mb-lg-0">
              <div className="icon-box icon-box-blue">
                <div className="icon">
                  <i className="bx bx-world"></i>
                </div>
                <h4 className="title">Nemo Enim</h4>
                <p className="description">
                  At vero eos et accusamus et iusto odio dignissimos ducimus qui
                  blanditiis praesentium voluptatum
                </p>
                <a href="#offers" className="link-offers">
                  Ver ofertas
                </a>
              </div>
            </div>

            <div className="col-md-6 col-lg-4 d-flex align-items-stretch mb-5 mt-3 mb-lg-0">
              <div className="icon-box icon-box-green">
                <div className="icon">
                  <i className="bx bx-tachometer"></i>
                </div>
                <h4 className="title">Magni Dolores</h4>
                <p className="description">
                  Excepteur sint occaecat cupidatat non proident, sunt in culpa
                  qui officia deserunt mollit anim
                </p>
                <a href="#offers" className="link-offers">
                  Ver ofertas
                </a>
              </div>
            </div>

            <div className="col-md-6 col-lg-4 d-flex align-items-stretch mb-5 mt-3 mb-lg-0">
              <div className="icon-box icon-box-green">
                <div className="icon">
                  <i className="bx bx-tachometer"></i>
                </div>
                <h4 className="title">Magni Dolores</h4>
                <p className="description">
                  Excepteur sint occaecat cupidatat non proident, sunt in culpa
                  qui officia deserunt mollit anim
                </p>
                <a href="#offers" className="link-offers">
                  Ver ofertas
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* FAQS section */}
        <h1>Preguntas frecuentes</h1>
        <div
          className="accordion accordion-flush"
          id="accordionFlushExample"
          data-aos="fade-up"
        >
          <div className="accordion-item">
            <h2 className="accordion-header" id="flush-headingOne">
              <button
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#flush-collapseOne"
                aria-expanded="false"
                aria-controls="flush-collapseOne"
              >
                Accordion Item #1
              </button>
            </h2>
            <div
              id="flush-collapseOne"
              className="accordion-collapse collapse"
              aria-labelledby="flush-headingOne"
              data-bs-parent="#accordionFlushExample"
            >
              <div className="accordion-body">
                Placeholder content for this accordion, which is intended to
                demonstrate the <code>.accordion-flush</code> class. This is the
                first item's accordion body.
              </div>
            </div>
          </div>
          <div className="accordion-item">
            <h2 className="accordion-header" id="flush-headingTwo">
              <button
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#flush-collapseTwo"
                aria-expanded="false"
                aria-controls="flush-collapseTwo"
              >
                Accordion Item #2
              </button>
            </h2>
            <div
              id="flush-collapseTwo"
              className="accordion-collapse collapse"
              aria-labelledby="flush-headingTwo"
              data-bs-parent="#accordionFlushExample"
            >
              <div className="accordion-body">
                Placeholder content for this accordion, which is intended to
                demonstrate the <code>.accordion-flush</code> class. This is the
                second item's accordion body. Let's imagine this being filled
                with some actual content.
              </div>
            </div>
          </div>
          <div className="accordion-item">
            <h2 className="accordion-header" id="flush-headingThree">
              <button
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#flush-collapseThree"
                aria-expanded="false"
                aria-controls="flush-collapseThree"
              >
                Accordion Item #3
              </button>
            </h2>
            <div
              id="flush-collapseThree"
              className="accordion-collapse collapse"
              aria-labelledby="flush-headingThree"
              data-bs-parent="#accordionFlushExample"
            >
              <div className="accordion-body">
                Placeholder content for this accordion, which is intended to
                demonstrate the <code>.accordion-flush</code> class. This is the
                third item's accordion body. Nothing more exciting happening
                here in terms of content, but just filling up the space to make
                it look, at least at first glance, a bit more representative of
                how this would look in a real-world application.
              </div>
            </div>
          </div>
        </div>

        {/* Footer */}
      </section>

      {/* <!-- ======= Contact Section ======= --> */}
      <section id="contact" className="contact section-bg mt-5 mb-5">
        <div className="container">
          <div className="section-title" data-aos="fade-up">
            <h2>Contacta con nosotros</h2>
          </div>

          <div className="row">
            <div
              className="col-lg-5 d-flex align-items-stretch"
              data-aos="fade-right"
            >
              <div className="info">
                <div className="address">
                  <i className="bi bi-geo-alt">
                    <HiOutlineLocationMarker />
                  </i>
                  <h4>Location:</h4>
                  <p>C/ D'en Llastics 2, 08003 Barcelona</p>
                </div>

                <div className="email">
                  <i className="bi bi-envelope">
                    <AiOutlineMail />
                  </i>
                  <h4>Email:</h4>
                  <p>talentojr@gmail.com</p>
                </div>

                <div className="phone">
                  <i className="bi bi-phone">
                    <AiOutlinePhone />
                  </i>
                  <h4>Call:</h4>
                  <p>+1 5589 55488 55s</p>
                </div>
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d748.3370839395462!2d2.1795248!3d41.388241!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12a4a3b369fa8b5b%3A0x7a8065656d2cbe0!2sFundesplai%20-%20Centre%20de%20Formaci%C3%B3%20Ll%C3%A0stics!5e0!3m2!1sen!2ses!4v1692093487992!5m2!1sen!2ses"
                  allowFullScreen=""
                  className="iframe"
                  loading="lazy"
                  reFerrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
            </div>

            <div
              className="col-lg-7 mt-5 mt-lg-0 d-flex align-items-stretch"
              data-aos="fade-left"
            >
              <form>
                <div className="row">
                  <div className="form-group col-md-6">
                    <label>Your Name</label>
                    <input
                      type="text"
                      name="name"
                      className="form-control"
                      id="name"
                      required
                    />
                  </div>
                  <div className="form-group col-md-6 mt-3 mt-md-0">
                    <label>Your Email</label>
                    <input
                      type="email"
                      className="form-control"
                      name="email"
                      id="email"
                      required
                    />
                  </div>
                </div>
                <div className="form-group mt-3">
                  <label>Subject</label>
                  <input
                    type="text"
                    className="form-control"
                    name="subject"
                    id="subject"
                    required
                  />
                </div>
                <div className="form-group mt-3">
                  <label>Message</label>
                  <textarea
                    className="form-control"
                    name="message"
                    rows="10"
                    required
                  ></textarea>
                </div>
                <div className="text-center mt-3">
                  <a href="#contact" className="btn-get-started">
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
      <footer id="footer">
        <div className="container">
          <div className="copyright">
            &copy; Copyright{" "}
            <strong>
              <span>TalentoJr</span>
            </strong>
            . All Rights Reserved
          </div>
        </div>
      </footer>
    </>
  );
};

export default Home;
