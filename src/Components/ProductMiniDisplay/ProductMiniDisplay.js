import React, { useEffect } from "react";
import Product from "../Products/product";
import PlaceHolders from "../PlaceHolders/cards"
import Aos from "aos";
import "aos/dist/aos.css";

function ProductMiniDisplay({ data, title, loading }) {
  // console.log(title);
  console.log(loading);
  const locationData =data? data.filter((info) => info.location === title): null;
  // console.log(locationData);

  useEffect(() => {
    Aos.init({ duration: 800 });
  }, []);
  return (
    <>
    {loading && (
      <PlaceHolders/>
    )}
    <div
      className="row mb-2 mt-3 d-flex justify-content-center product-container"
      data-aos="fade-up"
      >
        {locationData !== null ?(
          <> 
          {locationData.map((info) => (
        <Product
          key={info.id}
          address={info.address}
          id={info.id}
          title={info.title}
          price={info.price}
          beds={info.bedrooms}
          baths={info.bathrooms}
          size={info.size}
          imageUrl={info.img_url[0]}
          alt={info.title}
        />
      ))}
          </>
        ):
        "Loading..."
        }
     
    </div>
    </>
  );
}

export default ProductMiniDisplay;
