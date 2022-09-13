import React from "react";
import Card from "./Card";

function Index({data, Heading}) {
  return (
    <div
     className=" d-flex justify-content-center flex-column mt-2 p-3" 
    style={{margin:"auto auto", minWidth:"40%", background:"#F1F1F1"}} >
      <h4 className="fw-bold" style={{color:"#BB2D4D"}}>{Heading}</h4>

      <div style={{ minHeight:"500px"}}>
      {data.map((info) => (
        <Card 
        key={info.id}
        id={info.id}
        image={info.image}
        section={info.section}
        alt={info.alt}
         title={info.title}
         descriptions={info.description.slice(0,60)}
         price={info.price} />
      ))}
      </div>
    </div>
  );
}

export default Index;
