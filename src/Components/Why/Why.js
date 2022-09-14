import React, { useEffect } from 'react'
import Aos from 'aos'
import "aos/dist/aos.css"
function Why() {
    useEffect(() => {
        Aos.init({duration: 500})
       }, [])
    return (
        <div className="site-section fs-3" data-aos="fade-right">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-md-7 text-center">
              <div className="site-section-title">
                <h2>Why Choose Us?</h2>
              </div>
              <p>
              Amakka is a real-estate platform that offers affordable apartments to own.
              </p>
            </div>
          </div>
          <div className="row">
            <div className="col-md-6 col-lg-4">
              <div href="#" className="service text-center">
                <span className="" />
                <i className="bi bi-building fs-1 text-danger"></i>
                <h2 className="service-heading fs-4">Titled Unit</h2>
                <p>
                 You will get a titled unit to your name once you purchase a unit or units of your choice.
                </p>
                
              </div>
            </div>

            <div className="col-md-6 col-lg-4">
              {/* <div href="#" className="service text-center">
                <span className="" />
                <i className="bi bi-bank2 fs-1 text-danger"></i>
                <h2 className="service-heading fs-4">Mortgage</h2>
                <p>
                  Get mortgage advice from a our partner banks on which apartment unit you would like.
                </p>
              </div> */}

              <div href="#" className="service text-center">
                <span className="" />
                <i className="bi bi-bank2 fs-1 text-danger"></i>
                <h2 className="service-heading fs-4">Location</h2>
                <p>
                  The Apartments here are appropriately located at good vantage points to easily move.
                </p>
              </div>

            </div>
            <div className="col-md-6 col-lg-4">
              <div href="#" className="service text-center">
                <span className="" />
                <i className="bi bi-basket fs-1 text-danger"></i>
                <h2 className="service-heading fs-4">Variety</h2>
                <p>
                  Select from a variety of apartment units that you would choose to own.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      
    )
}

export default Why
