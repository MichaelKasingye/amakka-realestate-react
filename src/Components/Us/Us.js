import React, { useEffect } from 'react'
import Aos from 'aos'
import "aos/dist/aos.css"

function Us() {

    useEffect(() => {
           Aos.init({duration: 800})
          }, [])

    return (
        <div id ="us" className="site-section" data-aos="fade-left">
  <div className="container">
    <div className="row">
      <div className="col-md-6 border" data-aos="fade-left" style={{maxHeight:"400px", overflow:"hidden"}}>
        <img src="assets/img/us.png" alt="visual about the company" className="img-fluid w-100" />
      </div>
      <div className="col-md-5 ml-auto" data-aos="fade-up" >
        <div className="site-section-title">
          <h2>Our Company</h2>
        </div>
        <p className="lead">
        Amakka is a real-estate platform that offers affordable apartments to own.
        </p>
        <p>
        Founded in Uganda Africa, this platform was was formed to offer online  purchase of apartments in Uganda from any where in the world. This is meant to provide a trusted source from whom to purchase an apartment unit.
        The selection is versatile:from a one bed room apartment to two, three and above.
        </p>
      </div>
    </div>
  </div>
</div>

    )
}

export default Us
