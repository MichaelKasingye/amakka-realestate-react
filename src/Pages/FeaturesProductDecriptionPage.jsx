import React from 'react'
import { useParams } from "react-router-dom";
import FeaturesProductDescription from "../Components/FeaturesProductDescription"
import TitleHeader from "../Components/TitleHeader/Index";


export default function FeaturesProductDecriptionPage() {
  const { id } = useParams();
  console.log(id);

  return (
    <>
      <TitleHeader title="Solfix Africa-Features-Description-page" />

  <section className="product-single nav-arrow-b " style={{margin:"50px 0 20px 0"}} >
    <div className="container">
      <div className="row">
      <FeaturesProductDescription/>
      </div>
    </div>
  </section>
</>

  )
}
