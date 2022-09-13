import React from "react";

export function ServiceBodyOrdinary({
  title,
  description,
  collapseContent,
  path,
  image,
}) {
  // console.log(collapseContent);
  return (
    <section id="DocumentSection1" className="DocumentSection1">
      <div className="container  " data-aos="fade-up">
        <div className="tab-content">
          <div className="tab-pane active show" id="tab-1">
            <div className="row row-size">
              <div className="col-lg-6 order-2 order-lg-1 mt-0 mt-lg-0  d-flex align-items-center justify-content-evenly container-body-wrapper">
                <div className="container-body">
                  <h3>{title}</h3>
                  <p className="fst-italic">{description}</p>
                  {/* Modal button */}
                  <a
                    className="btn btn-danger rounded-4"
                    data-bs-toggle="collapse"
                    href="#collapseExample"
                    role="button"
                    aria-expanded="false"
                    aria-controls="collapseExample"
                  >
                    Get Started
                  </a>
                  {/* Collapse body */}
                  <div
                    className="collapse collapser-close show-card"
                    id="collapseExample"
                  >
                    <div className="card card-body card-info border  mt-2 ">
                      <div className="card-body-info-section">
                        {collapseContent.map((info, index) => (
                          <div key={index}>
                            <h5>{info.title}</h5>
                            <p className="fst-italic">{info.description}</p>
                            <ul style={{ listStyle: "none" }}>
                              {[...info.list].map((data, index) => (
                                <li key={index}>
                                  <i className="bi bi-check-all text-danger fs-5 mx-1" />
                                  {data}
                                </li>
                              ))}
                            </ul>
                          </div>
                        ))}
                      </div>
                      <span>
                        {/* Calls the CompanyFormation form modal */}
                        <a
                          href={path}
                          className="btn btn-danger btn-sm rounded-5 "
                          //   data-bs-toggle="modal"
                          //   data-bs-target="#CompanyFormation"
                        >
                          Request for this service
                        </a>
                      </span>
                    </div>{" "}
                    {/* End of Collapse body */}
                  </div>
                </div>
              </div>
              <div className="col-lg-6 order-1 order-lg-2 image-align-sect-1 ">
                <div className=" ">
                  <img
                    src={image}
                    alt="lady showing a chart"
                    className="img-fluid document-images"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export function ServiceBodyReverse({
  title,
  description,
  collapseContent,
  path,
  image,
}) {
  return (
    <section id="DocumentSection2" className="DocumentSection2">
      <div className="container">
        <div className="tab-content">
          <div className="tab-pane active show" id="tab-1">
            <div className="row row-size">
              <div className="col-lg-6 order-2 order-lg-2 mt-3 mt-lg-0  d-flex align-items-center container-body-wrapper">
                <div className="container-body">
                  <h3 className="">{title}</h3>
                  <p className="fst-italic">{description}</p>
                  {/* Modal button */}
                  <div className="w-100 ">
                    <span
                      className="btn btn-danger  rounded-5"
                      data-bs-toggle="collapse"
                      href="#WebsiteMarketing"
                      role="button"
                      aria-expanded="false"
                      aria-controls="collapseExample"
                    >
                      Get Started
                    </span>
                  </div>
                  {/* Collapse body */}
                  <div
                    className="collapse WebsiteMarketing-collapser-close show-card"
                    id="WebsiteMarketing"
                  >
                    <div className="card card-body card-info border  mt-2 ">
                      <span>
                        {/* Calls the WebsiteMarketingModal form modal */}
                        <a
                          href={path}
                          className="btn btn-danger btn-sm rounded-4 "
                          // data-bs-toggle="modal"
                          // data-bs-target="#WebsiteMarketingModal"
                        >
                          Request for this service
                        </a>
                      </span>
                    </div>{" "}
                    {/* End of Collapse body */}
                  </div>
                </div>
              </div>
              <div className="col-lg-6 order-1 order-lg-1 image-align-sect-2">
                <img
                  src={image}
                  alt="lady showing a chart"
                  className="img-fluid document-images"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
