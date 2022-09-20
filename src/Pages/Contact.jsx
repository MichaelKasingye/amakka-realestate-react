import React, { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import BreadCrumbs from "../Components/BreadCrumbs/BreadCrumbs";
import TitleHeader from "../Components/TitleHeader";

function Contact() {
  useEffect(() => {
    Aos.init({ duration: 800 });
  }, []);

  return (
    <main>
      <TitleHeader title="Amakka-Homes-Search Results" />

      <BreadCrumbs page="Contact" />

      <section id="contact" className="contact">
        <div className="container" data-aos="fade-up">
          {/* <div>
            <iframe
            title="hq location"
              style={{ border: 0, width: "100%", height: 270 }}
              src="https://maps.google.com/maps?q=ntinda%20uganda%20capital%20shoppers&t=k&z=13&ie=UTF8&iwloc=&output=embed"
              frameBorder={0}
              allowFullScreen
            />
          </div> */}
           


           <div className="row mt-4 mb-2">
  {/* <div className="col-lg-4">
    <div className="info-item d-flex">
      <i className="bi bi-geo-alt flex-shrink-0" />
      <div>
        <h4>Location:</h4>
        <p>A108 Adam Street, New York, NY 535022</p>
      </div>
    </div>
    <div className="info-item d-flex">
      <i className="bi bi-envelope flex-shrink-0" />
      <div>
        <h4>Email:</h4>
        <p>info@example.com</p>
      </div>
    </div>
    <div className="info-item d-flex">
      <i className="bi bi-phone flex-shrink-0" />
      <div>
        <h4>Call:</h4>
        <p>+1 5589 55488 55</p>
      </div>
    </div>
  </div> */}
  <div className="col-lg-8">
    <form
      className="php-email-form"
    >
      <div className="row">
        <div className="col-md-6 form-group">
          <input
            type="text"
            name="name"
            className="form-control"
            id="name"
            placeholder="Your Name"
            required=""
          />
        </div>
        <div className="col-md-6 form-group mt-3 mt-md-0">
          <input
            type="email"
            className="form-control"
            name="email"
            id="email"
            placeholder="Your Email"
            required=""
          />
        </div>
      </div>
      <div className="form-group mt-3">
        <input
          type="text"
          className="form-control"
          name="subject"
          id="subject"
          placeholder="Subject"
          required=""
        />
      </div>
      <div className="form-group mt-3">
        <textarea
          className="form-control"
          name="message"
          rows={5}
          placeholder="Message"
          required=""
          defaultValue={""}
        />
        
      </div>
      <div className="text-center">
        <button type="submit">Send Message</button>
      </div>
    </form>
  </div>
  {/* End Contact Form */}
</div>






        </div>
      </section>
    </main>
  );
}

export default Contact;
