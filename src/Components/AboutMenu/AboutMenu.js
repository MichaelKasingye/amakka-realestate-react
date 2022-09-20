import React from 'react'
import {Link} from "react-router-dom"

function AboutMenu() {
    return (
        <ul className=" m-0 p-1   w-100 fw-normal bg-light p-4 mt-2 d-flex justify-content-end flex-wrap" style={{listStyle: "none", color:"#2980B9" }}>
    <li className="mx-1 px-1 " >
    <Link to="/about/#us">
      <span>Us</span>
    </Link>
    </li>
    <li className="mx-1 px-1 " >
    <Link to="/about/#partners">
      <span>Partners</span>
    </Link>
    </li>
    <li className="mx-1 px-1 " >
    <Link to="/about">
      <span>Values</span>
    </Link>
    </li>
    <li className="mx-1 px-1 " >
    <Link to="/about">
      <span>CSR</span>
    </Link>
    </li>
    <li className="mx-1 px-1 " >
    <Link to="/about">
      <span>Team</span>
    </Link>
    </li>
    <li className="mx-1 px-1 " >
    <Link to="/about">
      <span>FAQ</span>
    </Link>
    </li>
    </ul>
    )
}

export default AboutMenu
