import React, { useEffect } from "react";
import Product from "../Products/product";
import Aos from "aos";
import "aos/dist/aos.css";

function ProductMiniDisplay({ data, title }) {
  // console.log(title);
  // console.log(data);
  const locationData = data.filter((info) => info.location === title);
  // console.log(locationData);

  useEffect(() => {
    Aos.init({ duration: 800 });
  }, []);
  return (
    <div
      className="row mb-2 mt-3 d-flex justify-content-center"
      data-aos="fade-up"
    >
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
        />
      ))}
    </div>
  );
}

export default ProductMiniDisplay;
