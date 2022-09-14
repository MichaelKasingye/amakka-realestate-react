import React, { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
// import ProductsCss from "./Products.module.css";
// import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Autoplay, Pagination } from "swiper";
import Product from "./product";
SwiperCore.use([Autoplay, Pagination]);

function Products() {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);


  return (
    <div className="site-section site-section-sm bg-light">
      <div className="container">
        <div className="row mb-5  d-flex justify-content-center">

         <Product/>
         <Product/>
         <Product/>
         <Product/>
         <Product/>
         <Product/>
         <Product/>
         <Product/>
         <Product/>
         <Product/>
         <Product/>
         <Product/>
         <Product/>
         <Product/>
         

        </div>
      </div>
    </div>
  );
}

export default Products;
