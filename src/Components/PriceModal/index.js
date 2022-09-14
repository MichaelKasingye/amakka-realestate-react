/* eslint-disable no-unused-vars */

import React, { useState } from "react";
import { Button } from "react-bootstrap";
// import Button from 'react-bootstrap/Button';
import Modal from "react-bootstrap/Modal";
import Product from "../Products/product";

export default function Index({ price, data }) {
  const priceOne = price[0].toString().slice(0, 3);
  const priceTwo = price[1].toString().slice(0, 3);
  const unitsRange = data.filter(
    (range) => range.price >= price[0] && range.price <= price[1]
  );

  // console.log(unitsRange);
  // console.log(price[0].toString().slice(0,3));
  const values = [true, "xxl-down"];
  const [fullscreen, setFullscreen] = useState(true);
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);

  return (
    <>
      <p className=" m-2 fw-bold" onClick={() => setShow(true)}>
        Ugx: {priceOne}m - {priceTwo}m
        {/* {typeof v === "string" && `below ${v.split("-")[0]}`} */}
      </p>

      <Modal
        show={show}
        onHide={() => setShow(false)}
        fullscreen={fullscreen}
      >
        <Modal.Header>
          <Modal.Title id="example-custom-modal-styling-title">
            Price Ugx: {priceOne}m - {priceTwo}m
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {unitsRange.length === "0" ? (
            <p className="fs-3">
              {" "}
              Unfortunately, there are no Apartments in this range
            </p>
          ) : (
            <div className=" mb-2 mt-3 d-flex justify-content-center flex-wrap">
              {unitsRange.map((info) => (
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
