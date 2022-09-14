import React from 'react'

function Collapse() {
    return (
      
<>

    <button
      className="btn btn-danger rounded-0 mt-2"
      type="button"
      data-bs-toggle="collapse"
      data-bs-target="#collapseExample"
      aria-expanded="false"
      aria-controls="collapseExample"
    >
      Acquire a Mortgage
    </button>
  
  <div className="collapse" id="collapseExample">
    <div className="card card-body border-0">
    <form  className="form-contact-agent">
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input type="text" id="name" className="form-control" />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input type="email" id="email" className="form-control" />
            </div>
            <div className="form-group">
              <label htmlFor="phone">Phone</label>
              <input type="text" id="phone" className="form-control" />
            </div>
            <div className="form-group">
              <label htmlFor="phone">Amount</label>
              <input type="number" id="phone" className="form-control" 
              defaultValue="200000000"/>
            </div>
            <div className="form-group">
              <label htmlFor="phone">Desired Period in years</label>
              <input type="number" id="phone" className="form-control" 
              defaultValue="2"/>
            </div>
            <div className="form-group">
              <label htmlFor="phone">Purpose</label>
                          <textarea
              className="form-control"
              style={{height: "100px"}}
              placeholder="Leave a comment here"
              id="floatingTextarea"
              defaultValue="I am interested in Kampala Pearl Kololo Hill 7th Mukasa street apartment worth 200000000"
            />
            </div>
            <div className="form-group">
              <input
                type="submit"
                id="phone"
                className="btn btn-danger rounded-0 mt-2"
                defaultValue="Send Message"
              />
            </div>
          </form>
    </div>
  </div>
</>

    )
}

export default Collapse
