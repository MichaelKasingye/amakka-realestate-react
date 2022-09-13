import React from 'react'

export default function index() {
  return (
    <section id="section-tabs" className="section-tabs">
  <div className="container" data-aos="fade-up">
    <ul className="nav nav-tabs row d-flex  ">
      <li className="nav-item col-4 ">
        <a className="nav-link active show " data-bs-toggle="tab" href="#tab-2">
          <h4 className="">Company Registration Benefits</h4>
        </a>
      </li>
      <li className="nav-item col-4 ">
        <a className="nav-link" data-bs-toggle="tab" href="#tab-3">
          <h4 className="">Reviews</h4>
        </a>
      </li>
      {/* <li className="nav-item col-4">
      <a className="nav-link" data-bs-toggle="tab" href="#tab-4">
          <h4 className=""> Pricing</h4>
        </a>
      </li> */}
    </ul>
    <div className="tab-content">
      <div className="tab-pane active show" id="tab-2">
        <div className="tab-lists">
          <div className=" order-2 order-lg-1 mt-3 mt-lg-0">
            <h3 className="my-5" style={{ color: "#15222B" }}>
              Why you should register a company?
            </h3>
            <ul>
              <li className="w-100">
                <h5>
                  <i className="ri-check-double-line" /> It gives you a unique
                  identity
                </h5>
                <article>
                  Registering a business is one step of get your brilliant idea
                  real image and legal existence. You first of all choose a name
                  that inspire you and also portray the good qualities of your
                  business.
                </article>
              </li>
              <li className="w-100">
                <h5>
                  <i className="ri-check-double-line" /> Protects you from
                  personal liability
                </h5>
                <article>
                  This may be the biggest reason why many people have to
                  register their business, without legal protection of limited
                  liability, you could lose your business and personal property
                  if something goes wrong. For example if someone sues your
                  business in court and you have to pay compensation if your
                  company is registered as a limited liability company, your
                  personal assets will not be intruded on in order to pay for
                  the company liability.
                </article>
              </li>
              <li className="w-100">
                <h5>
                  <i className="ri-check-double-line" /> Attract Clients
                </h5>
                <article>
                  In today’s world especially corporate customers prefer
                  associating or dealing with registered companies, and in
                  certain cases it’s against the law for regulatory and tax
                  reasons. Unless your plan for your business is to become and
                  remain a petty trading business that sells stuff off street
                  corners, you just to have to register it to attract more
                  discerning customers.
                </article>
              </li>
              <li className="w-100">
                <h5>
                  <i className="ri-check-double-line" />
                  Attract Investors
                </h5>
                <article>
                  If your goal is to get investors or funders on board, then
                  forming a company is the best thing to do, investors/ funders
                  prefer Corporations for their ability to offer shares and
                  formality. Investors want to know that your business is
                  organized, exists legally and is separate from your personal
                  life and affairs. And also investor will only give you funds
                  in exchange for shares in your business, and this can only
                  happen when the business is a Company Limited by shares.
                </article>
              </li>
              <li className="w-100">
                <h5>
                  <i className="ri-check-double-line" /> Enticing Employees
                </h5>
                <article>
                  Winning over and keeping top talent by giving them shares. In
                  order to build a multi-million Company you will need a skilled
                  team of employee, and since you’re just starting the business,
                  paying them an attractive salary may be impossible. Therefore
                  offering them shares in the Company if at all are registered
                  would be enough to keep them.
                </article>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="tab-pane" id="tab-3">
        <div className="tab-content">
          <div className=" order-2 order-lg-1 mt-3 mt-lg-0">
            <h3 className="my-5" style={{ color: "#15222B" }}>
              What our Clients say?
            </h3>
            <ul>
              <li className="w-100">
                <h5>
                  <i className="bi bi-person" /> Michael Kasingye
                </h5>{" "}
                <span>- CEO, Kamia Tech</span>
                <article>
                  I love the fast response and reliability they offer.
                </article>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="tab-pane" id="tab-4">
        <div className="tab-content">
          <div className=" order-2 order-lg-1 mt-3 mt-lg-0">
            <h3 className="my-5" style={{ color: "#15222B" }}>
              price
            </h3>
            <ul>
              <li className="w-100">
                <h5>
                  <i className="bi bi-person" /> Price
                </h5>{" "}
                <span>- CEO, Kamia Tech</span>
                <article>
                  I love the fast response and reliability they offer.
                </article>
              </li>
            </ul>
          </div>
        </div>
      </div>

    </div>
  </div>
</section>

  )
}
