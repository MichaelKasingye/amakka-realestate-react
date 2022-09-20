import React, { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import ImageGallery from "react-image-gallery";
import ContactAgentForm from "../../Components/Forms/ContactAgentForm";
import ContactMortgageForm from "../../Components/Forms/ContactMortgageForm";

export function PriceDescription({ unit }) {
  useEffect(() => {
    Aos.init({ duration: 800 });
  }, []);
  return (
    <div className="description-price" >
      <div className=" mb-5 ">
        <h2 className="property-title">
          <span
            className="fw-bold text-capitalize"
            style={{ color: "#3D8AB9" }}
          >
            {unit.title}
          </span>
          <span className="fs-6 text-secondary"> - {unit.developerName}</span>
        </h2>
        
        <div className="">
          <strong className="text-danger h1 mb-3">
            UGX{" "}
            {unit.price
              ?.toString()
              .replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",")}
          </strong>
        </div>

        <span className="mb-1 text-capitalize">
          <i className="bi bi-geo-alt-fill" /> {unit.address}
        </span>

        <div className="">
          <ul className="property-specs-wrap mb-3 mb-lg-0  float-lg-right">
            <li>
              <span>
                Beds{" "}
                <strong style={{ color: "#2980b9" }} className="fs-4 ">
                  {unit.bedrooms}
                </strong>{" "}
              </span>
            </li>
            <li>
              <span>
                Baths{" "}
                <strong style={{ color: "#2980b9" }} className="fs-4">
                  {unit.bathrooms}
                </strong>
              </span>
            </li>
            <li>
              <span>
                SQ-FT{" "}
                <strong style={{ color: "#2980b9" }} className="fs-4">
                  {" "}
                  {unit.size}
                </strong>
              </span>
            </li>
          </ul>
        </div>
        <p className="m-1 text-capitalize ">
          <i className="bi bi-bookmarks-fill" />{" "}Booking fee<span style={{ color: "#2980b9" }}> - Ugx {unit.booking?.toString()
              .replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",")}</span>
        </p>
        <p className="m-1 text-capitalize ">
          <i className="bi bi-piggy-bank-fill" />{" "}Installment <br/>
           Down payment<span style={{ color: "#2980b9" }}> - Ugx {unit.downPayment?.toString()
              .replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",")}</span>
        </p>
      </div>
    </div>
  );
}

export function VideoDescription({ unit }) {
  useEffect(() => {
    Aos.init({ duration: 800 });
  }, []);
  return (
    <div className="" style={{ backgroundColor: "#F9F9F9" }}>
      <div className=" mb-5 ">
        <div
          className=""
          // style={{maxWidth:"300px"}}
          id="pills-video"
          role="tabpanel"
          aria-labelledby="pills-video-tab"
        >

          <iframe
            src={unit.video}
            title="My Modern Condo Tour in 2022"
            width="100%"
            height="460"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            data-aos="fade-up"
          ></iframe>
        </div>

      </div>
    </div>
  );
}

export function MapDescription({ unit }) {
  return (
    <div className="map-pdt-unit-description ">
      {/* <h3
                className="title-d text-capitalize"
                style={{ color: "#3D8AB9" }}
                data-aos="fade-left"
              >
                {unit.address} -{" "}
                <span className="fs-5">
                  UGX{" "}
                  {unit.price
                    ?.toString()
                    .replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",")}
                </span>
              </h3> */}
      <div className="iframe-section">
        <iframe
        title={unit.title}
          data-aos="fade-right"
          style={{ border: 0, width: "100%", height: 270 }}
          src={unit.map}
          frameBorder={0}
          allowFullScreen
        />
      </div>
    </div>
  );
}

export function ProductDescription({ unit }) {
  return (
    <div
      className="map-pdt-unit-description description-box"
    >
      <h3 className="" style={{ color: "#3D8AB9" }} data-aos="fade-left">
        Property Description
      </h3>
      <p className="" style={{ color: "#333333" }} data-aos="fade-right">
        {unit.description}
      </p>
      <h3 className="" style={{ color: "#3D8AB9" }}>
        Amenities
      </h3>
      <ul className="list-a no-margin" >
        {unit.amenities?.map((amenity, idx) => (
          <li key={idx}>{amenity}</li>
        ))}
      </ul>
    </div>
  );
}

export function ImageGallerySlider({ imagesUrl }) {
  return (
    <div className="container border imageGallery" data-aos="fade-up" >
      <div className="imagery" >
      {imagesUrl && <ImageGallery items={imagesUrl} />}
      </div>
    </div>
  );
}

export function AgentForms({ unit }) {
  return (
    <div className="client-contact-forms">
      {/* <div className="">
    <img src="https://affordablehomes.ug/wp-content/uploads/2020/03/logo-1-1-2.png" alt="" className="img-fluid" />
  </div> */}
      <ContactAgentForm unit={unit} title={`Contact ${unit.developerName} Agent`}/>
    </div>
  );
}
export function MortgageForms({ unit }) {
  return (
    <div className="client-contact-forms">
      <ContactMortgageForm unit={unit} title="Contact Mortgagor and buy" />
    </div>
  );
}