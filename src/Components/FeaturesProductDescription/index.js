import React from "react";
import ShortBodyTitle from "../BodyTitle/ShortBodyTitle";
import { useParams } from "react-router-dom";
import { productData } from "../../utilities/data";

export default function Index() {
  // const [data, setData] = useState('')
  const { id } = useParams();

  // eslint-disable-next-line
  const registrationCompanyData = productData.filter((info) => info.id == id);

  // useEffect(() => {
  //   setData(registrationCompanyData[0])
  // }, [registrationCompanyData])

  // console.log(registrationCompanyData);

  return (
    <div className="col-sm-12">
      <ShortBodyTitle title={registrationCompanyData[0].title} />
      <div className="row justify-content-between">
        <div className="col-md-5 col-lg-4">
          <div className="product-price d-flex justify-content-center foo">
            <img
              src="https://images.pexels.com/photos/327882/pexels-photo-327882.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt="document visual"
              className="img-fluid"
            />
          </div>
          <div className="my-4 fw-bold border-bottom border-secondary">
            <h3 className="fw-bold fs-2">
              {" "}
              UGX
              <span className="text-danger">
                {registrationCompanyData[0].price}
              </span>
            </h3>
          </div>
        </div>

        <div className="col-md-7 col-lg-7 section-md-t3">
          <div className="row">
            <div className="col-sm-12">
              <div className="title-box-d">
                <h3 className="title-d text-capitalize">
                  {registrationCompanyData[0].title}
                </h3>
              </div>
            </div>
          </div>
          <div className="product-description">
            <p className="description color-text-a no-margin">
              {registrationCompanyData[0].description}
            </p>
          </div>
          <div className="row section-t3 ">
            <div className="col-sm-12">
              <div className="title-box-d">
                <h3 className="title-d">Contents</h3>
              </div>
            </div>
          </div>
          <div className=" color-text-a">
            <ul className="no-margin">
              {[...registrationCompanyData[0].features].map((info, index) => (
                <li key={index}>{info}</li>
              ))}
            </ul>
          </div>
          <div>
            <a
              href="https://dashboard.solfixafrica.com/register"
              // href="#services"
              className="btn btn-danger rounded-3 fs-5"
              // data-bs-toggle="modal"
              // data-bs-target="#CompanyFormation"
            >
              <span className="fw-bold">Buy Document</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
