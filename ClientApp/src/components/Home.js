import React from "react";

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
        <section id="about" className="about">
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

      {/* team section */}
      <section id="team" className="team section-bg">
        <div className="container mb-5 mt-5">
          <div className="section-title">
            <h2>Nuestro Equipo</h2>
          </div>
          <div className="row">
            <div className="col-md-6 col-lg-3 d-flex align-items-stretch mb-5 mb-lg-0">
              <div className="icon-box icon-box-pink">
                <div className="icon">
                  <i className="bx bxl-dribbble"></i>
                </div>
                <h4 className="title">Lorem Ipsum</h4>
                <p className="description">
                  Voluptatum deleniti atque corrupti quos dolores et quas
                  molestias excepturi sint occaecati cupiditate
                </p>
              </div>
            </div>

            <div className="col-md-6 col-lg-3 d-flex align-items-stretch mb-5 mb-lg-0">
              <div className="icon-box icon-box-cyan">
                <div className="icon">
                  <i className="bx bx-file"></i>
                </div>
                <h4 className="title">Sed ut perspiciatis</h4>
                <p className="description">
                  Duis aute irure dolor in reprehenderit in voluptate velit esse
                  cillum dolore eu fugiat nulla
                </p>
              </div>
            </div>

            <div className="col-md-6 col-lg-3 d-flex align-items-stretch mb-5 mb-lg-0">
              <div className="icon-box icon-box-green">
                <div className="icon">
                  <i className="bx bx-tachometer"></i>
                </div>
                <h4 className="title">Magni Dolores</h4>
                <p className="description">
                  Excepteur sint occaecat cupidatat non proident, sunt in culpa
                  qui officia deserunt mollit anim
                </p>
              </div>
            </div>

            <div className="col-md-6 col-lg-3 d-flex align-items-stretch mb-5 mb-lg-0">
              <div className="icon-box icon-box-blue">
                <div className="icon">
                  <i className="bx bx-world"></i>
                </div>
                <h4 className="title">Nemo Enim</h4>
                <p className="description">
                  At vero eos et accusamus et iusto odio dignissimos ducimus qui
                  blanditiis praesentium voluptatum
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* FAQS section */}
        <h1>Preguntas frecuentes</h1>
        <div className="accordion accordion-flush" id="accordionFlushExample">
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
