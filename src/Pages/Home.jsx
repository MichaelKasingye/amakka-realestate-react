import React from "react";
import Hero from "../Components/Hero"
// import Features from "../Components/Features"
import AboutUs from "../Components/AboutUs";
import Services from "../Components/Services";
import Partners from "../Components/Partners";
import CallToAction from "../Components/CallToAction";
import TitleHeader from "../Components/TitleHeader/Index"
function Home() {
 
  return (
    <>
       <TitleHeader title="Solfix Africa-Home"/>
    <Hero/>
    {/* <Features/> */}
    <AboutUs/>
    <Services/>
    <CallToAction/>
    <Partners/>
     
    </>
  );
}

export default Home;
