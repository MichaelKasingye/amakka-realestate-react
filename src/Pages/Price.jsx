import React from 'react'
import BodyTitle from '../Components/BodyTitle';
import PriceCards from '../Components/PriceCards'
import { pricingData } from '../utilities/pricing';
import TitleHeader from "../Components/TitleHeader/Index"

// import { useLocation } from "react-router-dom";

export default function Price() {

  return (
    <section id="pricing" className="pricing mt-5">
<TitleHeader title="Solfix Africa-Pricing"/>

  <div className="container">
  < BodyTitle title="Pricing"/>
<p className='fs-5'>Check out our affordable plans and pricing and choose what best suits your needs.</p>

        <PriceCards data={pricingData}/>
  </div>
</section>

  )
}
