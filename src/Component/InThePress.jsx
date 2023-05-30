import React from 'react'
import { Carousel } from 'react-bootstrap'
function InThePress({data}) {
    return (
        <div className="my-4">
            <Carousel fade>

                {data.banner.end.map((element) => (

                    <Carousel.Item key={element.image} id="banner" interval={1500} keyboard={true}>
                        {/* <div style={{height:"100vh"}}> */}
                        <img
                            className="d-block w-100"
                            id="bannerImage"
                            src={element.image}
                            alt={`banner`}
                        />

                        <Carousel.Caption>
                            <h3>{element.name}</h3>
                            <p>{element.description}</p>
                            <p>{element.source}</p>
                            {/* <a href="#">Read more</a> */}
                        </Carousel.Caption>
      </Carousel.Item>
    
    ))}


        </Carousel>
        </div >
      )
}

export default InThePress
