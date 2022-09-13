import React from "react";
import BodyTitle, {PageTitle} from "../Components/BodyTitle";
// import Cards from "../Components/Card";
// import { productData } from "../utilities/data";
import CollapseComponents from "../Components/CollapseComponents"
import TitleHeader from "../Components/TitleHeader/Index";

function FeaturesPage() {
  // const registerCoDocuments = productData.filter(info => info.section ==="CompanyRegistration");
// console.log(registerCoDocuments);
  return(
    <div className="document-features" >
      <TitleHeader title="Solfix Africa-Company-Registration-page" />

    <div className="p-4" style={{background:"#15222B"}}>
    <PageTitle 
    CSS="text-light"
    title="Company Registration Documents" />
    <p className="text-light">
    Sofix provides on demand services for business prosperity.
    </p>
    {/* <ol className="text-light">
      <li className="list-unstyled"><i class="bi bi-check-all text-danger mx-2"></i> Find the document you need from our list</li>
      <li className="list-unstyled"><i class="bi bi-check-all text-danger mx-2"></i>Fill in the required relevant details</li>
      <li className="list-unstyled "><i class="bi bi-check-all text-danger mx-2"></i>Make your order and payment</li>
    </ol> */}
      </div>
    {/* <Cards data = {registerCoDocuments}/> */}
    <BodyTitle 
    title="Services"
    CSS="mt-3 container"/>

    <div className="container">
    <ol>
      <li className="my-4"><span className="fs-4 fw-bold " style={{color:"#263D4D"}}>Registration</span><br/>
      <p className="fs-5 mx-3">We handle all the paperwork and register your company in a matter of days.
         Thanks to our easy and simple process</p>
      </li>
      
      <li className="my-4"> <span className="fs-4 fw-bold" style={{color:"#263D4D"}}>Documents</span> <br/>
      <p className="fs-5 mx-3 mb-0">We organize for you a folder of documents that are essential for 
        a new company operating;</p>
      <span>
      <ol className="fs-5 m-0">
      <li className="list-unstyled"><i className="bi bi-dot  text-danger mx-2"></i> Find the document you need from our list</li>
      <li className="list-unstyled"><i className="bi bi-dot  text-danger mx-2"></i>Fill in the required relevant details</li>
      <li className="list-unstyled "><i className="bi bi-dot text-danger mx-2"></i>Make your order and payment</li>
    </ol>
        </span></li>

      <li className="my-4"><span className="fs-4 fw-bold" style={{color:"#263D4D"}}>Open a Bank Account </span>  <br/>
      <p className="fs-5 mx-3">We provide bank advisory services to our customers and get assisted 
        in opening up a bank account. </p></li>

      <li className="my-4"><span className="fs-4 fw-bold" style={{color:"#263D4D"}}>TIN registration </span> <br/>
      <p className="fs-5 mx-3">We prepare and file your application easy and fast.</p></li>
    </ol>
    </div>
    <CollapseComponents/>
</div>

  )
}


export default FeaturesPage;
