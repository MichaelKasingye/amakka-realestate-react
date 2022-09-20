import React, { useEffect, useState } from "react";
// import Link from 'next/link';
// import "bootstrap/dist/css/bootstrap.min.css";

import { useNavigate } from "react-router-dom";

import Aos from "aos";
import "aos/dist/aos.css";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchSearchTermAsync,
  //  fetchSearchTermSuccess, SearchTermSelector
} from "../../redux/features/SearchTerm/searchTermSlice";
import { NavDropdown } from "react-bootstrap";
import { Dropdown } from "react-bootstrap";

import PriceModal from "../PriceModal";
import DistrictModal from "../DistrictModal";
import { ApartmentsSelector } from "../../redux/features/Apartments/ApartmentsSlice";
// import { districts } from "../../utilities/districts";
import { nonRepeat } from "../../services/functions";
function Search() {
  const navigate = useNavigate();
  const {
    Apartments,
    //  loading, hasErrors
  } = useSelector(ApartmentsSelector);

  const apartmentLocations = nonRepeat(
    Apartments.map((locations) => locations.location)
  );

  const [name, setName] = useState("");
  const dispatch = useDispatch();

  const handleSubmit = (event) => {
    event.preventDefault();
    // The Regex eliminates space in the search word
    dispatch(
      fetchSearchTermAsync(name.toLowerCase().replace(/[\n\r\s\t]+/g, ""))
    );
    navigate("/results");
  };

  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);

  return (
    <div className="site-section site-section-sm pb-0 ">
      <div className="container ">
        <div className="row">
          <form
            onSubmit={handleSubmit}
            className="form-search col-md-12 py-3 px-3"
            style={{ marginTop: "-90px" }}
          >
            <div className="row  align-items-end">
              <div className="col-md-8">
                <div
                  className="select-wrap d-flex mt-2 rounded-3"
                  style={{ backgroundColor: "white" }}
                >
                  <i className="bi bi-search mx-2 text-dark d-flex align-items-center justify-content-center"></i>

                  <input
                    className="w-100 "
                    type="text"
                    name="search"
                    placeholder="Kampala"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                  />
                </div>
              </div>
              {!name ? (
                <div className="col-md-4">
                  <input
                    type="submit"
                    className="btn btn-success text-white btn-danger rounded-3 w-100 mt-2 fs-4"
                    disabled
                  />
                </div>
              ) : (
                <div className="col-md-4">
                  <input
                    type="submit"
                    className="btn btn-success text-white btn-danger rounded-3 w-100 mt-2 fs-4"
                  />
                </div>
              )}
            </div>
          </form>
          <div className="d-flex justify-content-center mt-1">
            <Dropdown>
              <Dropdown.Toggle
                id="dropdown-button-dark-example1"
                variant="secondary"
                className="mx-2 fw-bold "
              >
                Price
              </Dropdown.Toggle>

              <Dropdown.Menu variant="dark">
                <PriceModal data={Apartments} price={[100000000, 200000000]} />
                <PriceModal data={Apartments} price={[400000000, 500000000]} />
                <PriceModal data={Apartments} price={[400000000, 500000000]} />
              </Dropdown.Menu>
            </Dropdown>

            <Dropdown>
              <Dropdown.Toggle
                id="dropdown-button-dark-example1"
                variant="secondary"
                className=" fw-bold"
              >
                Locations
              </Dropdown.Toggle>

              <Dropdown.Menu variant="dark">
                {apartmentLocations.map((info, index) => (
                  <NavDropdown.Item key={index}>
                    <DistrictModal locations={info} data={Apartments} />
                  </NavDropdown.Item>
                ))}
              </Dropdown.Menu>
            </Dropdown>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Search;
