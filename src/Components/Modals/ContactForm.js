import React from 'react'

export default function ContactForm() {
  return (
    <div>
            <div
    className="modal fade "
    id="ContactForm"
    tabIndex={-1}
    aria-labelledby="exampleModalLabel"
    aria-hidden="true"

  >
    <div className="modal-dialog">
      <div className="modal-content">
        <div className="modal-header">
          <h5 className="modal-title" id="exampleModalLabel">
           Contact Us
          </h5>
          <button
            type="button"
            className="btn-close"
            data-bs-dismiss="modal"
            aria-label="Close"
          />
        </div>
        <div className="modal-body">
        <form
            // action="mail/contact"
            // method="post"
            // role="form"
            className="php-email-form"
          >
            <div className="row">
              <div className="form-group col-md-6">
                <label htmlFor="name">Your Name *</label>
                <input
                  type="text"
                  name="name"
                  className="form-control"
                  id="name"
                  required=""
                />
              </div>
              <div className="form-group col-md-6 mt-3 mt-md-0">
                <label htmlFor="name">Your Email *</label>
                <input
                  type="email"
                  className="form-control"
                  name="email"
                  id="email"
                  required=""
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
                required=""
              />
            </div>
            <div className="form-group mt-3">
              <label htmlFor="name">Message *</label>
              <textarea
                className="form-control"
                name="message"
                rows={10}
                required=""
                defaultValue={""}
              />
            </div>
            <div className="my-3">
              <div className="loading">Loading</div>
              <div className="error-message" />
              <div className="sent-message">
                Your message has been sent. Thank you!
              </div>
            </div>
            <div className="text-center">
              <button type="submit">Send Message</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
    </div>
  )
}
