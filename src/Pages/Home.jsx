import React from "react";
import Hero from "../Components/Hero"
import Search from "../Components/search";
import Heading from "../Components/Heading/Heading";
import ProductMiniDisplay from "../Components/ProductMiniDisplay/ProductMiniDisplay";
import Why from "../Components/Why/Why";
import TitleHeader from "../Components/TitleHeader/Index"
import { useSelector } from "react-redux";
import { ApartmentsSelector } from "../redux/features/Apartments/ApartmentsSlice";
function Home() {

const { Apartments,
   loading,
  //  hasErrors 
  } = useSelector(ApartmentsSelector);
// console.log(Apartments);

  return (
    <main>
       <TitleHeader title="Amakka-Home"/>
     <Hero/>
    <Search/>
    <Heading title="Kampala" />
    <ProductMiniDisplay title="Kampala" data={Apartments} loading={loading}/>
    <Heading title="Buziga" />
    <ProductMiniDisplay title="Buziga" data={Apartments} loading={loading}/>
    <Why/> 
     
    </main>
  );
}

export default Home;
