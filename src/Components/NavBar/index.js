/* eslint-disable no-unused-vars */

import React, { useEffect, useState } from "react";

import {Link} from "react-router-dom";

import PriceModal from "../PriceModal";
import DistrictModal from "../DistrictModal";
import SliderMenu from "./SliderMenu";
import { districts } from "../../utilities/districts";
import { apartment } from "../../utilities/data";
import NavDropdown from "react-bootstrap/NavDropdown";
import {
  ApartmentsSelector,
  fetchApartmentsAsync,
} from "../../redux/features/Apartments/ApartmentsSlice";
import { useSelector } from "react-redux";

function NavBar() {
  const { Apartments, loading, hasErrors } = useSelector(ApartmentsSelector);
  // console.log(Apartments);

  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  return (
<header id="header" className="d-flex align-items-center">
  <div className="container d-flex align-items-center justify-content-between">
    {/* <h1 className="logo">
      <a href="index.html">
        Amakka<span>.</span>
      </a>
    </h1> */}
    {/* Uncomment below if you prefer to use an image logo */}
    <a href="index.html" className="logo"><img src="/assets/img/AmaakaLogos/rsz_amakka_logo.png" alt="Amakka"/></a>

    <SliderMenu />
    <nav id="navbar" className="navbar display-nav">
      <ul>
        <li>
          <Link className="nav-link scrollto active" to="/">
            Home
          </Link>
        </li>
        <li>
          <Link className="nav-link scrollto" to="/">
            About
          </Link>
        </li>
        <li>
          <Link className="nav-link scrollto" to="/">
            Contact
          </Link>
        </li>
      </ul>
      <i className="bi bi-list mobile-nav-toggle" />
    </nav>
    {/* .navbar */}
  </div>
</header>


  );
}

export default NavBar;