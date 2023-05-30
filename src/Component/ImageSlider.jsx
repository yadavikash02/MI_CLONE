import React from 'react'
import data from '../data/data.json'
import { Carousel } from 'react-bootstrap'

function ImageSlider() {
    return (
        <div >
          <Carousel fade>
    
    {data.banner.start.map((element) => (
    
    <Carousel.Item key={element} id="banner" interval={1500} keyboard={true}>
        {/* <div style={{height:"100vh"}}> */}
        <img
          className="d-block w-100" 
          id="bannerImage"
          src={element}
          alt={` banner`}
        />
        
        {/* <Carousel.Caption>
          <h3>{element?._embedded?.show?.name?element?._embedded?.show?.name:""}</h3>
          <p>{element?._embedded?.show?.genres?element?._embedded?.show?.genres:""}</p>
          {/* <p>{item.url}</p> */}
          {/* <a href="#">Read more</a> */}
        {/* {/* </Carousel.Caption>  */}
        {/* </div> */}
      </Carousel.Item>
    
    ))}
    
    
    </Carousel>
        </div>
      )
}

export default ImageSlider
