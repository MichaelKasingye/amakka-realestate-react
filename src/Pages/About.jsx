import React from "react";
import TitleHeader from "../Components/TitleHeader/Index";

function About() {
  return (
    <>
      <TitleHeader title="Solfix Africa-About" />

      {/* ======= Body wrapper ======= */}
      <section
        id="body-wrapper"
        className="animate__animated animate__fadeIn mt-5"
      >
        <div id="main">
          {/* ======= About Section ======= */}
          <section id="about" className="features">
            <div className="container" data-aos="fade-up">
              <div className="section-title">
                <h2>About Us</h2>
                <p>About Solfix Africa</p>
              </div>
              <div className="tab-content">
                <div className="tab-pane active show" id="tab-1">
                  <div className="row">
                    <div className="col-lg-6 order-2 order-lg-1 mt-3 mt-lg-0 content">
                      {/* <h3 class="text-danger">About Us</h3> */}
                      {/* <span class=" border border-danger"></span> */}
                      <h5 style={{ color: "#3F5974" }}>
                        SOLFIX Limited is a consultancy firm equipped to provide
                        services such as Business Development, Intellectual
                        property and Tax consultancy to Small and Medium
                        Enterprises.
                      </h5>
                      <p className="fst-italic">
                        We are committed to enlightening and educate business
                        owners on the needs of their businesses and in the long
                        run provide solutions to such needs which are accessible
                        anywhere.
                      </p>
                      <h5 style={{ color: "#3F5974" }}>CORE VALUES</h5>
                      <ul style={{ listStyle: "none" }}>
                        <li>
                          <i className="bi bi-dot text-danger fs-5 mx-1" />
                          Integrity
                        </li>
                        <li>
                          <i className="bi bi-dot text-danger fs-5 mx-1" />
                          Transparency
                        </li>
                        <li>
                          <i className="bi bi-dot text-danger fs-5 mx-1" />
                          Prompt services
                        </li>
                      </ul>
                    </div>
                    <div className="col-lg-6 order-1 order-lg-2 text-center">
                      <img
                        src="assets/img/aboutus2.png"
                        alt="an svg"
                        className="img-fluid"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          {/* End Features Section */}
        </div>
        {/* End #main */}
      </section>
    </>
  );
}

export default About;
