import React from "react";

import {Link} from "react-router-dom";

function Product(
  { id,title, address, price, beds, baths, size, imageUrl, alt }
  ) {
  // const {bedrooms} = info
  // console.log(title);

  return (
    <>
      {/* <Meta/> */}
      <div className="property-Card ">
        <Link to={`/apartment-description/${id}`}>
          <div style={{ textDecoration: "none" }} className="text-secondary ">
            <div className="property-Card-container">
              <div className="property-image-container">
                <img
                  src={imageUrl}
                  alt={`visual of ${alt}`}
                  className="img-fluid "
                />
              </div>
              <div className="p-4 property-body">
                <h2 className="property-title">
                  <span>{title}</span>
                </h2>
                <span className="property-location d-block mb-1 fs-5">
                  <span className="bi bi-geo-alt-fill" /> {address}
                </span>
                <strong className="property-price text-danger mb-1 d-block text-success fs-4">
                  UGX:{" "}
                  {price
                    ?.toString()
                    .replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",")}
                </strong>
                <ul className="property-specs-wrap mb-1 mb-lg-0 fs-5">
                  <li>
                    <span>
                      Beds{" "}
                      <strong style={{ color: "#2980b9" }} className="fs-5 ">
                        {beds}
                      </strong>{" "}
                    </span>
                  </li>
                  <li>
                    <span>
                      Baths{" "}
                      <strong style={{ color: "#2980b9" }} className="fs-5">
                        {baths}
                      </strong>
                    </span>
                  </li>
                  <li>
                    <span>
                      SQ FT{" "}
                      <strong style={{ color: "#2980b9" }} className="fs-5">
                        {" "}
                        {size}
                      </strong>
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </Link>
      </div>
    </>
  );
}

export default Product;
