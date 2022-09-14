import Carousel from 'react-bootstrap/Carousel';

function Hero() {
  const heroData = [
    {
      title:"Convince",
      details:"Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis",
      image:"https://images.unsplash.com/photo-1622866306950-81d17097d458?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80",
      alt:"first interior image"
    },
    {
      title:"Comfort",
      details:"Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis",
      image:"https://images.pexels.com/photos/6032425/pexels-photo-6032425.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      alt:"second interior image"
    },
    {
      title:"Peace of Mind",
      details:"Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis",
      image:"https://images.unsplash.com/photo-1540518614846-7eded433c457?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=857&q=80",
      alt:"third interior image"
    },
  ]
  return (
    <Carousel fade>
      {heroData.map((info, index) =>(
        <Carousel.Item key={index} className="hero">
          <div className='hero-image'>
        <img
          className="d-block w-100 "
          src={info.image}
          alt="First slide" 
        />
        </div>
        <h4 className='hero-heading' >{info.title}</h4>
        <Carousel.Caption>
          <div className='hero-caption'>
          <h3>{info.title}</h3>
          {/* <p >{info.details}</p> */}
          </div>
        </Carousel.Caption>
      </Carousel.Item>
      ))}
    </Carousel>
  );
}

export default Hero;