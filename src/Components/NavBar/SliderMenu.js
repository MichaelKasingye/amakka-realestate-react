import React, { useState } from 'react';
import Offcanvas from 'react-bootstrap/Offcanvas';
import { SidebarData } from './SidebarData';
import { Link } from 'react-router-dom'

export default function OnActiveSideMenu() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <nav className=" navbar navbar-expand-lg navbar-light slide-bar">
      {/* <span>Amaakka-Partner</span> */}
      <span className="navbar-toggler-icon mx-2" onClick={handleShow}/>

      <Offcanvas show={show} onHide={handleClose}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title><img src="/assets/img/AmaakaLogos/rsz_amakka_logo.png" alt="Amakka"width={100}/></Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <ul className="sidebar-nav" id="sidebar-nav">
    {/* <li className="nav-item">
      <Link className="nav-link " to="/">
        <i className="bi bi-grid" />
        <span>Overview</span>
      </Link>
    </li> */}
    {/* End Dashboard Overview */}
    
    {/* <li className="nav-heading">Pages</li> */}
    {SidebarData.map((info, idx) => (
    <li className="nav-link" key={idx} onClick={handleClose}>
      <Link className="nav-link collapsed" to={info.path} >
         <span className='mx-2 fs-4 text-danger '>{info.icon}</span>
        <span className='fw-bold'>{info.title}</span>
      </Link>
    </li>
    ))}
  </ul>
        </Offcanvas.Body>
      </Offcanvas>
    </nav>
  );
}