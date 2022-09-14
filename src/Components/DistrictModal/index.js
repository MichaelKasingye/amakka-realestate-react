/* eslint-disable no-unused-vars */

import React, { useState } from "react";
// import Button from 'react-bootstrap/Button';
import Modal from "react-bootstrap/Modal";
import Product from "../Products/product";
import { Button } from "react-bootstrap";

export default function Index({ locations, data }) {
  // const priceOne = price[0].toString().slice(0, 3);
  // const priceTwo = price[1].toString().slice(0, 3);
  const unitsLocationRange = data.filter(
    (range) => range.location === locations
  );

  // console.log(unitsLocationRange);
  // console.log(price[0].toString().slice(0,3));
  const values = [true, "xxl-down"];
  const [fullscreen, setFullscreen] = useState(true);
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  return (
    <>
      <p className=" m-2 fw-bold" onClick={() => setShow(true)}>
        {locations}
        {/* {typeof v === "string" && `below ${v.split("-")[0]}`} */}
      </p>

      <Modal
        show={show}
        onHide={() => setShow(false)}
        fullscreen={fullscreen}
        // dialogClassName="modal-100w"
        // aria-labelledby="example-custom-modal-styling-title"
      >
        <Modal.Header>
          <Modal.Title id="example-custom-modal-styling-title">
            {locations}
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className=" mb-2 mt-3 d-flex justify-content-center flex-wrap">
            {unitsLocationRange.map((info) => (
              <Product
                key={info.id}
                name={info.name}
                address={info.address}
                id={info.id}
                title={info.title}
                price={info.price}
                beds={info.bedrooms}
                baths={info.bathrooms}
                size={info.size}
                imageUrl={info?.img_url[0]}
              />
            ))}
          </div>
          {unitsLocationRange.length === "0" && (
            <p className="fs-3">
              {" "}
              Unfortunately, we do not  are no Apartments in this Area
            </p>
          )}
        </Modal.Body>
        <Modal.Footer>
          <Button variant="danger" className="mx-5" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}
