/* eslint-disable import/no-anonymous-default-export */
/* eslint-disable no-unused-vars */
import React from 'react'
import AboutMenu from '../Components/AboutMenu/AboutMenu'
import BreadCrumbs from '../Components/BreadCrumbs/BreadCrumbs'
import TitleHeader from "../Components/TitleHeader";

import Partners from '../Components/Partners/Partners'
import Us from '../Components/Us/Us'
import CSR from '../Components/CSR/CSR'

function about() {
 
  return (
    <main>
           <TitleHeader title="Amakka-Homes-Search Results" />

      <BreadCrumbs page="about "/>
      {/* <AboutMenu/> */}
      <Us/>
      <CSR/>
      {/* <Partners/> */}
    </main>
  )
}

export default about
