import React, { useEffect } from 'react'


export function TabComponent({content}) {
          
    return (
        <div className="animate__animated animate__fadeInLeft">
           <p>{content}</p>
        </div>
    )
}

export function TabComponentSections({downPayment, booking}) {
 
        
    return (
        <div className="animate__animated animate__fadeInLeft" >
           <p className='fw-bolder text-secondary'>Booking: <span style={{color:"#2980B9"}}>{booking}</span></p>
           <p className='fw-bolder text-secondary'>DownPayment: <span style={{color:"#2980B9"}}>{downPayment}</span> </p>
           
        </div>
    )
}



export function TabComponentMap({map}) {
   
    console.log(map);
    return (
        <div>
           <div className="row animate__animated animate__fadeInLeft" >	
  <div className="col-md-12 d-flex justify-content-center   "> 
    <div className="video-iframe border w-100">
    <iframe
  src="https://maps.google.com/maps?width=600&amp;height=400&amp;hl=en&amp;q=kololo air strip&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
//   style={{ height: "200", width: "100% "}}
  className="  w-100"
  title="Iframe Example"
/>
    </div>
  </div>
</div>
        </div>
    )
}
export function TabComponentList({content1, content2}) {
    console.log(content2);
    return (
        <div className="d-flex justify-content-center flex-wrap animate__animated animate__fadeInLeft" >
            <div>
                <span className="h5" style={{color:"#2980B9"}}>Hospitals</span>
        <ul>
            {
              content1.map((info, index) => (
                <li className="bi bi-geo-alt-fill" style={{listStyle:"none"}}  key={index}>{info}</li>
              ))  
            }
        </ul>
        </div>

        <div>
        <span className="h5" style={{color:"#2980B9"}}>Schools</span>
        <ul>
            {
              content2.map((info, index) => (
                <li className="bi bi-geo-alt-fill" style={{listStyle:"none"}}  key={index}>{info}</li>
              ))  
            }
        </ul>
        </div>

        </div>
    )
}