import React from 'react'

export default function ServiceHero({title,description,image,list}) {
  return (
    <section id="heroPages" className="d-flex align-items-center ">
    <div className="container ">
      <div className="row">
        <div className="col-lg-6 pt-5  pt-lg-0 pt-sm-0 pt-md-0 order-1 order-lg-1 d-flex flex-column justify-content-center">
          <h1>{title}</h1>
          <h2>{description}</h2>
          <div className="d-flex">
           
            <ul style={{ listStyle: "none", color: "#858EA1" }}>
            {list.map((info, index) => (

              <li key={index}>
                <i className="bi bi-dot text-danger fs-5 mx-1" />
                {info}
              </li>
            ))}
            </ul>
          </div>
        </div>
        <div className="col-lg-6 order-1 order-lg-2 pt-4 hero-img">
          <img
            src={image}
            className="img-fluid animated"
            alt="a visual of a man holding a pie chart next to a phone"
          />
        </div>
      </div>
    </div>
  </section>
  
  )
}
