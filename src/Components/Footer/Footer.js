import React from 'react'
import { Link } from 'react-router-dom'

function Footer() {
    return (
      <footer className="site-footer ">
      <div className="container">
        <div className="row pt-3">
          <div className="col-lg-4">
            <div className="mb-5">
              <h3 className="footer-heading mb-4">About Amakka</h3>
              <p>
                Amakka is a real-estate platform that offers affordable apartments to own.
              </p>
            </div>
          </div>
          <div className="col-lg-4 mb-5 mb-lg-0">
            <div className="row mb-5">
              <div className="col-md-12">
                <h3 className="footer-heading mb-4">Navigations</h3>
              </div>
              <div className="col-md-6 col-lg-6">
                <ul className="list-unstyled">
                  <li>
                    <Link to="/">Home</Link>
                  </li>
                  {/* <li>
                    <a href="#">Buy</a>
                  </li> */}
                  {/* <li>
                    <a href="#">Rent</a>
                  </li> */}
                  <li>
                    <Link to="/">Properties</Link>
                  </li>
                </ul>
              </div>
              <div className="col-md-6 col-lg-6">
                <ul className="list-unstyled">
                  <li>
                    <Link to="/">About Us</Link>
                  </li>
                  <li>
                    <Link to="/">Privacy Policy</Link>
                  </li>
                  {/* <li>
                    <a href="#">Contact Us</a>
                  </li>
                  <li>
                    <a href="#">Terms</a>
                  </li> */}
                </ul>
              </div>
            </div>
          </div>
          <div className="col-lg-4 mb-5 mb-lg-0">
            <h3 className="footer-heading mb-4">Follow Us</h3>
            <div>
              <a href="/" className="pl-0 pr-3 mx-2">
              <i className="bi bi-facebook"></i>
              </a>
              <a href="/" className="pl-3 pr-3 mx-2">
              <i className="bi bi-twitter"></i>
              </a>
              <a href="/" className="pl-3 pr-3 mx-2">
              <i className="bi bi-instagram"></i>
              </a>
              <a href="/" className="pl-3 pr-3 mx-2">
              <i className="bi bi-linkedin"></i>
              </a>
            </div>
          </div>
        </div>
        <div className="row pt-5 mt-5 text-center">
          {/* <div className="col-md-12">
            <p>
              Copyright © All rights reserved 
              <i className="icon-heart text-danger mx-1" aria-hidden="true" /> 
              <a href="https://colorlib.com" target="_blank">
                Amakka
              </a>
            </p>
          </div> */}
        </div>
      </div>
    </footer>
    
    )
}

export default Footer
