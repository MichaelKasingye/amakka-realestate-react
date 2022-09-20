import React from 'react'
import {Link} from 'react-router-dom'

function BreadCrumbs({page}) {
    return (
  <nav aria-label="breadcrumb" className="bg-light mt-2 p-2 pt-3  d-flex justify-content-between align-items-center ">
  <ol className="breadcrumb mx-5 ">
    <li className="breadcrumb-item fs-5">
            <Link to="/">
              <span className="text-primary">Home</span>
              </Link></li>
    <li className="breadcrumb-item active fs-5 text-capitalize" aria-current="page">{page}</li>
  </ol>
</nav>
   
    )
}

export default BreadCrumbs
