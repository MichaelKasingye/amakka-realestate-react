import React, { useEffect } from 'react'
import Aos from 'aos'
import "aos/dist/aos.css"
function csr() {

    useEffect(() => {
        Aos.init({duration: 500})
       }, [])

    return (
        <div className="site-section fs-5 m-0" data-aos="fade-right">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-md-7 text-center">
              <div className="site-section-title">
                <h2>Corporate social Responsibility</h2>
              </div>
              <p>
              Sharing is caring
              </p>
            </div>
          </div>
          <div className="">
            <div className=" mx-3 ">
              <div href="#" className="service text-center">
                <span className="" />
                <i class="bi bi-person fs-1 text-danger"></i>
                <h2 className="service-heading">Child Care</h2>
                <p>
                 For every Unit purchased a child in need is aided in support.
                </p>
                
              </div>
            </div>

            <div className="">
              <div href="#" className="service text-center">
                <span className="" />
                <i class="bi bi-tree-fill fs-1 text-danger"></i>
                <h2 className="service-heading">Envirnmental support</h2>
                <p>
                A tree is planted for every unit purchased
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
}

export default csr
