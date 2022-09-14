import React, { useEffect } from 'react'
import Aos from 'aos'
import "aos/dist/aos.css"
function Partners() {

    useEffect(() => {
        Aos.init({duration: 800})
       }, [])

    return (
        <section id="partners" className="mt-5 py-5" data-aos="fade-left">
        <div className="container">
          <div className="main_title">
            <h2>Our Bank Partners</h2>
          </div>
          <div className="Partners  ">
            <div className="item">
              <img src="https://cdn.pixabay.com/photo/2015/09/14/04/19/google-939112__340.png" alt="dev" />
            </div>
            {/* <div className="item">
              <img src="https://cdn.pixabay.com/photo/2015/09/14/04/19/google-939112__340.png" alt="dev" />
            </div>
            <div className="item">
              <img src="https://cdn.pixabay.com/photo/2015/09/14/04/19/google-939112__340.png" alt="dev" />
            </div>
            <div className="item">
              <img src="https://cdn.pixabay.com/photo/2015/09/14/04/19/google-939112__340.png" alt="dev" />
            </div>
            <div className="item">
              <img src="https://cdn.pixabay.com/photo/2015/09/14/04/19/google-939112__340.png" alt="dev" />
            </div> */}
          </div>
        </div>

        <div className="container">
          <div className="main_title">
            <h2>Our Developer Partners</h2>
          </div>
          <div className="Partners  ">
            <div className="item">
              <img src="https://cdn.pixabay.com/photo/2015/09/14/04/19/google-939112__340.png" alt="dev" />
            </div>
            {/* <div className="item">
              <img src="https://cdn.pixabay.com/photo/2015/09/14/04/19/google-939112__340.png" alt="dev" />
            </div>
            <div className="item">
              <img src="https://cdn.pixabay.com/photo/2015/09/14/04/19/google-939112__340.png" alt="dev" />
            </div>
            <div className="item">
              <img src="https://cdn.pixabay.com/photo/2015/09/14/04/19/google-939112__340.png" alt="dev" />
            </div>
            <div className="item">
              <img src="https://cdn.pixabay.com/photo/2015/09/14/04/19/google-939112__340.png" alt="dev" />
            </div> */}
          </div>
        </div>

        <div className="container">
          <div className="main_title">
            <h2>Other Partners</h2>
          </div>
          <div className="Partners  ">
            <div className="item">
              <img src="https://cdn.pixabay.com/photo/2015/09/14/04/19/google-939112__340.png" alt="dev" />
            </div>
            {/* <div className="item">
              <img src="https://cdn.pixabay.com/photo/2015/09/14/04/19/google-939112__340.png" alt="dev" />
            </div>
            <div className="item">
              <img src="https://cdn.pixabay.com/photo/2015/09/14/04/19/google-939112__340.png" alt="dev" />
            </div>
            <div className="item">
              <img src="https://cdn.pixabay.com/photo/2015/09/14/04/19/google-939112__340.png" alt="dev" />
            </div>
            <div className="item">
              <img src="https://cdn.pixabay.com/photo/2015/09/14/04/19/google-939112__340.png" alt="dev" />
            </div> */}
          </div>
        </div>
      </section>
      
    )
}

export default Partners
