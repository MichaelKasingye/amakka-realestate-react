import React from "react";
export default function index({ data }) {
  console.log(data);
  return (
    <div className="row" >
      {data.map((info) => (
        <div key={info.id}
          className="col-lg-4 col-md-6 m-3"
          data-aos="zoom-in"
          data-aos-delay={150}
        >
          <div className="box"
          >
            <h3 >{info.title}</h3>
            {/* <hr/> */}

            <h4 className="border-bottom border-danger pb-4">
              <sup>UGX</sup>
              {info.priceMonthlyUGX}
              <span>or </span>
              <br/>
              <sup className="fs-6 m-0">USD</sup>
              <span className="fs-4 fw-bold">{info.priceMonthlyUSD}</span>
              <span>/month</span>
            </h4>
            {/* <hr/> */}
            <h4>
              <sup>UGX</sup>
              {info.priceAnnuallyUGX}
              <span>or </span>
              <br/>
              <sup className="fs-6 m-0">USD</sup>
              <span className="fs-4 fw-bold">{info.priceAnnuallyUSD}</span>
              <span>/Year</span>
            </h4>
            {/* <hr/> */}

            <ul>
                {
                    [...info.description].map((list, index) =>(
                        <li className="fs-6" key={index}>{list}</li>
                    ))
                }
            </ul>
            <div className="btn-wrap">
              <a href="https://dashboard.solfixafrica.com/register" className="btn-buy">
                Sign Up
              </a>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
