import React from 'react'
import { Link } from 'react-router-dom'

function Card({id, image, title, descriptions, price, alt}) {
  // console.log(descriptions )

  return (
    <div className="w-100" style={{width:"300px"}}>
    <Link to={"/features-description-page/"+id}>

    <div className="single-product" style={{width:"100%"}}>
    {/* <div className="product-image">
      <img src={image} alt={alt} />
      <div className="button">
        <span  className="btn">
           View Document
        </span>
      </div>
    </div> */}
    <div className="product-info">
        <span className="title">{title}</span>
      {/* <span className="category">{descriptions}...</span> */}
     
      {/* <div className="price">
        <span>UGX {price}</span>
      </div> */}
    </div>
  </div>
    </Link>

  </div>

  )
}

export default Card