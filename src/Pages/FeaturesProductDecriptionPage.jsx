/* eslint-disable import/no-anonymous-default-export */
/* eslint-disable no-unused-vars */

import React, { useEffect, useState } from 'react'
import { useParams } from "react-router-dom";
import TitleHeader from "../Components/TitleHeader";
import {
  PriceDescription,
  MapDescription,
  ProductDescription,
  ImageGallerySlider,
  UnitForms,
  VideoDescription,
  AgentForms,
  MortgageForms,
} from "../Components/UnitDescription/UnitDescription";
import BreadCrumbs from "../Components/BreadCrumbs/BreadCrumbs";
import Aos from "aos";
import "aos/dist/aos.css";
import { useSelector } from 'react-redux';
import { ApartmentsSelector } from '../redux/features/Apartments/ApartmentsSlice';

export default function FeaturesProductDecriptionPage() {
  const { id } = useParams();
  // console.log(id);

  const [imagesUrl, setImagesUrl] = useState("");
  const { Apartments,
    loading,
   //  hasErrors 
   } = useSelector(ApartmentsSelector);
   
   const unit = Apartments.filter(filterById => filterById.id === id )[0]
  //  console.log([...imagesUrl]);

  useEffect(() => {
    if (unit.img_url) {
      setImagesUrl(
        unit.img_url.map((url) => ({
          original: `${url}`,
          thumbnail: `${url}=w100`,
        }))
      );
    }
    Aos.init({ duration: 600 });
  }, [unit.img_url]);

  return (
    <main>
      <TitleHeader title="Amakka-Homes-Apartment-Description" />
      <BreadCrumbs page={unit.title} />

<ImageGallerySlider imagesUrl={imagesUrl} />
<div className="grid-container">
  <div className="grids">
    <VideoDescription unit={unit} />
  </div>
  <div className="grids">
    <PriceDescription unit={unit} />
  </div>
  <div className="grids">
    <MapDescription unit={unit} />
  </div>
  <div className="grids">
    <ProductDescription unit={unit} />
  </div>
  
  <div className="grids">
    <AgentForms unit={unit} />
  </div>

  <div className="grids">
    <MortgageForms unit={unit} />
  </div>
</div>

<div className="descriptions-unit shadow-sm w-100 ">

</div>
</main>

  )
}
