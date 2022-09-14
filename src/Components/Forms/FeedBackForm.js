import React from 'react'

export default function FeedBackForm() {
  return (
    <>
    <h1 style={{color:"#333333"}}>How was our service</h1>
    <form className="form-a">
          <div className="row">
            <div className="col-md-12 mb-1">
              <div className="form-group">
                <input
                  type="text"
                  className="form-control form-control-lg form-control-a"
                  id="inputName"
                  placeholder="Name *"
                  required=""
                />
              </div>
            </div>
            <div className="col-md-12 mb-1">
              <div className="form-group">
                <input
                  type="email"
                  className="form-control form-control-lg form-control-a"
                  id="inputEmail1"
                  placeholder="Email *"
                  required=""
                />
              </div>
            </div>
            <div className="col-md-12 mb-1">
              <div className="form-group">
                <textarea
                  id="textMessage"
                  className="form-control"
                  placeholder="comment"
                  name="message"
                  cols={45}
                  rows={8}
                  required=""
                  defaultValue=""
                />
              </div>
            </div>
            <div className="col-md-12 mt-3">
              <button type="submit" className="btn btn-danger">
              Contact
              </button>
            </div>
          </div>
        </form>
        </>
  )
}
