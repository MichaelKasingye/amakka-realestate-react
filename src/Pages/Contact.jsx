import React, { useEffect, useRef } from "react";
import emailjs from "@emailjs/browser";
import { useAlert } from "react-alert";
import TitleHeader from "../Components/TitleHeader";
import { useState } from "react";
// import { ContactUs } from '../Components/contactUs/ContactUs';

export default function Contact() {
  const alert = useAlert();
  const [message, setMessage] = useState(false);
  const [loading, setLoading] = useState(false);
  const form = useRef();

  const [inputs, setInputs] = useState({});
  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs((values) => ({ ...values, [name]: value }));
  };

  const sendEmail = (e) => {
    e.preventDefault();
    setLoading(true);
    emailjs
      .sendForm(
        "service_8tw1ban",
        "template_feea6jo",
        form.current,
        "neCreXso6Lz0VcfDS"
      )
      .then(
        (result) => {
          console.log(result.text);
          setLoading(false);
          setMessage(true);

          setInputs({
            user_email: " ",
            user_name: " ",
            message: " ",
            subject: " ",
          });
        },
        (error) => {
          console.log(error.text);
          setLoading(false);
        }
      );
  };
  console.log(inputs);
  console.log(message);

  useEffect(() => {
    if (message === true) {
      alert.show("Your message has been sent. Thank you!");
    }
  }, [alert, message]);

  return (
    <section
      id="body-wrapper"
      className="animate__animated animate__fadeIn mt-5"
    >
      <TitleHeader title="Solfix Africa-Contact" />

      <div id="main">
        {/* ======= Contact Section ======= */}
        <section id="contact" className="contact">
          <div className="container">
            <div className="section-title">
              <h2>Contact</h2>
              <p>Contact Us</p>
            </div>
            <div className="row" data-aos="fade-up" data-aos-delay={100}>
              {/* <div className="col-lg-5 d-flex align-items-stretch">
                <div className="info">
                  <div className="address">
                    <i className="bi bi-geo-alt" />
                    <h4>Location:</h4>
                    <p>Charm Towers level - 2, Plot 12, Kampala Road</p>
                  </div>
                  <div className="email">
                    <i className="bi bi-envelope" />
                    <h4>Email:</h4>
                    <p>info@solfixafrica.com</p>
                  </div>
                  <div className="phone">
                    <i className="bi bi-phone" />
                    <h4>Call:</h4>
                    <p>+256 414 699 575</p>
                  </div>
                  <iframe
                    src="https://maps.google.com/maps?q=Charm%20Towers%20Kampala%20Road&t=&z=13&ie=UTF8&iwloc=&output=embed"
                    title="Solfix location"
                    frameBorder={0}
                    style={{ border: 0, width: "100%", height: 290 }}
                    allowFullScreen
                  />
                </div>
              </div> */}
              <div className="col-lg-7 mt-5 mt-lg-0 d-flex align-items-stretch">
                <form
                  ref={form}
                  onSubmit={sendEmail}
                  className="php-email-form"
                >
                  <div className="row">
                    <div className="form-group col-md-6">
                      <label htmlFor="name">Your Name *</label>
                      <input
                        type="text"
                        name="user_name"
                        className="form-control"
                        id="name"
                        required
                        value={inputs.user_name || ""}
                        onChange={handleChange}
                      />
                    </div>
                    <div className="form-group col-md-6 mt-3 mt-md-0">
                      <label htmlFor="name">Your Email *</label>
                      <input
                        type="email"
                        className="form-control"
                        name="user_email"
                        id="email"
                        required
                        value={inputs.user_email || ""}
                        onChange={handleChange}
                      />
                    </div>
                  </div>
                  <div className="form-group mt-3">
                    <label htmlFor="name">Subject *</label>
                    <input
                      type="text"
                      className="form-control"
                      name="subject"
                      id="subject"
                      required
                      value={inputs.subject || ""}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="form-group mt-3">
                    <label htmlFor="name">Message *</label>
                    <textarea
                      className="form-control"
                      name="message"
                      rows={10}
                      required
                      value={inputs.message || ""}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="my-3">
                    <div className="">
                      {/* { setTimeout(() => message?"ddddd":"" , 2000)} */}
                    </div>
                  </div>
                  <div className="text-center">
                    {!inputs.user_email && !inputs.subject ? (
                      " "
                    ) : (
                      <button type="submit">
                        {!loading ? "Send Message" : "Sending..."}
                      </button>
                    )}
                  </div>
                </form>
              </div>
            </div>
          </div>
        </section>
      </div>

      {/* <ContactUs/> */}
    </section>
  );
}
