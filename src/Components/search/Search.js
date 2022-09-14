import React, { useEffect, useState } from "react";
// import Link from 'next/link';
import { useRouter } from "next/router";

import Aos from "aos";
import "aos/dist/aos.css";
import { useDispatch, useSelector } from "react-redux";
import { fetchSearchTermAsync, fetchSearchTermSuccess, SearchTermSelector } from "../../redux/features/SearchTerm/searchTermSlice";
import { NavDropdown } from "react-bootstrap";

import PriceModal from '../../components/PriceModal'
import DistrictModal from '../../components/DistrictModal'
import { ApartmentsSelector } from "../../redux/features/Apartments/ApartmentsSlice";
import { districts } from "../../utilities/districts";
function Search() {
  const router = useRouter();

  const { Apartments, loading, hasErrors } = useSelector(ApartmentsSelector);

  const [name, setName] = useState("");
  const dispatch = useDispatch();

  
  const handleSubmit = (event) => {
    event.preventDefault();
    // dispatch(fetchSearchTermSuccess(name))
    dispatch(fetchSearchTermAsync(name.toLowerCase().replace(/[\n\r\s\t]+/g, '')))
    router.push('/results')
    // alert(`The name you entered was: ${name}`);
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
            className="form-search col-md-12"
            style={{ marginTop: "-90px" }}
          >
            <div className="row  align-items-end">
              <div className="col-md-8">
                {/* <label className="fs-4 text-light">Search</label> */}
                <div
                  className="select-wrap d-flex mt-2 rounded-3"
                  style={{ backgroundColor: "white" }}
                >
                  <i className="bi bi-search mx-2 text-dark d-flex align-items-center justify-content-center"></i>
               
                  <input
                    className="w-100"
                    type="text"
                    name="search"
                    placeholder="Kampala"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                  />
                </div>
              </div>
              {!name ?
              <div className="col-md-4">
               <input
               type="submit"
               className="btn btn-success text-white btn-danger rounded-3 w-100 mt-2 fs-4"
               disabled
             />
              </div>
              : (
                    
              <div className="col-md-4">
                <input
                  type="submit"
                  className="btn btn-success text-white btn-danger rounded-3 w-100 mt-2 fs-4"
                />
              </div>
                    )}
            </div>
          </form>
          <div className="d-flex justify-content-center">
          <NavDropdown title="Price" id="nav-dropdown" className="m-2 border border-secondary rounded-3 ">
              <NavDropdown.Item href="/#">
              <PriceModal data={Apartments} price = {[100000000,200000000]}/>
              </NavDropdown.Item>
              <NavDropdown.Item href="/#">
              <PriceModal data={Apartments} price = {[400000000,500000000]}/>
              </NavDropdown.Item>
              <NavDropdown.Item href="/#">
              <PriceModal data={Apartments} price = {[400000000,500000000]}/>              </NavDropdown.Item>
            </NavDropdown>

            <NavDropdown title="Locations" id="nav-dropdown" className="m-2 border border-secondary ">
              {districts.map((info, index) => (
              <NavDropdown.Item key={index} href="/#">
              <DistrictModal locations = {info} data={Apartments}/>
              </NavDropdown.Item>
                ))}
             
            </NavDropdown>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Search;
