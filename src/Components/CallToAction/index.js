import React from 'react'

function index() {
  return (
    <section id="features" className="features">
    <div className="container" data-aos="fade-up">
      <div className="tab-content">
        <div className="tab-pane active show" id="tab-1">
          <div className="row">
            <div
              style={{ height: 300 }}
              className="col-lg-6 order-2 order-lg-1 mt-3 mt-lg-0  d-flex align-items-center features-content"
            >
              <div>
                <h3>
                  We understand that every business has different needs in Uganda.
                </h3>
                <p className="fst-italic">
                  Our experts will guide you to what your business needs, to help
                  set you up for success.
                </p>
                <a href="/#services" className="btn btn-danger rounded-3 mx-1" >
                  <span>Our Services</span>
                </a>
              </div>
            </div>
            <div className="col-lg-6 order-1 order-lg-2 text-center">
              <img
                src="assets/img/features-1.png"
                width={300}
                alt="lady showing a chart"
                className="img-fluid"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  
  )
}

export default index