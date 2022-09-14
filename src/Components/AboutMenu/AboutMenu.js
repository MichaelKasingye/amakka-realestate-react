import React from 'react'
import Link from 'next/link'

function AboutMenu() {
    return (
        <ul className=" m-0 p-1   w-100 fw-normal bg-light p-4 mt-2 d-flex justify-content-end flex-wrap" style={{listStyle: "none", color:"#2980B9" }}>
    <li className="mx-1 px-1 " >
    <Link href="/about/#us">
      <a>Us</a>
    </Link>
    </li>
    <li className="mx-1 px-1 " >
    <Link href="/about/#partners">
      <a>Partners</a>
    </Link>
    </li>
    <li className="mx-1 px-1 " >
    <Link href="/about">
      <a>Values</a>
    </Link>
    </li>
    <li className="mx-1 px-1 " >
    <Link href="/about">
      <a>CSR</a>
    </Link>
    </li>
    <li className="mx-1 px-1 " >
    <Link href="/about">
      <a>Team</a>
    </Link>
    </li>
    <li className="mx-1 px-1 " >
    <Link href="/about">
      <a>FAQ</a>
    </Link>
    </li>
    </ul>
    )
}

export default AboutMenu
