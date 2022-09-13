import React from "react";
import {PageTitle} from "../Components/BodyTitle";
import Cards from "../Components/Card";
import { productData } from "../utilities/data";
import TitleHeader from "../Components/TitleHeader/Index";

// console.log(productData);
export default function LegalDocumentsPage() {
  const EmploymentDocuments = productData.filter(info => info.section ==="Employment Documents");
  const BusinessDocuments = productData.filter(info => info.section ==="Business Documents");


  return (
    <div className="document-features" >
      <TitleHeader title="Solfix Africa-Legal-Documents-page" />

    <div className="p-4" style={{background:"#15222B"}}>
    <PageTitle 
    CSS="text-light"
    title="Legal Documents" />
    <p className="text-light">
    You can get affordable legal documents at your convenience
    </p>
    <ul className="text-light">
      <li className="list-unstyled"><i className="bi bi-check-all text-danger mx-2"></i> Find the document you need from our list</li>
      <li className="list-unstyled"><i className="bi bi-check-all text-danger mx-2"></i>Fill in the required relevant details</li>
      <li className="list-unstyled "><i className="bi bi-check-all text-danger mx-2"></i>Make your order and payment</li>
    </ul>
      </div>

    <div 
    className="d-flex justify-content-center align-items-center flex-wrap">
   
    <Cards 
    Heading ="Business Documents"
     data = {BusinessDocuments}/>

    <Cards 
    Heading ="Employment Documents"
    data = {EmploymentDocuments}/>
    
    </div>
</div>
  )
}

