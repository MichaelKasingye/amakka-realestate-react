import React, { useEffect }  from 'react'
import Aos from 'aos'
import "aos/dist/aos.css"
import motto from "./Motto.module.css";

function Motto() {
    useEffect(() => {
        Aos.init({duration: 2000})
       }, [])

    return (
        <div style={{height:"300px", overflow:"hidden", backgroundColor:"#ecf0f1"}}  data-aos="fade-right">
        <img src="https://images.pexels.com/photos/2883380/pexels-photo-2883380.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"  style={{width:"100%", objectFit:"cover", height:"18.5rem"}} className="img-fluid  " alt="African child"/> 

        <div className={motto.captionMotto}>
            <p className='text-light fs-1 ' >Our Capacity to create an <span style={{color:"#F39C12"}} >impact</span></p>
        </div>
        </div>
    )
}

export default Motto
