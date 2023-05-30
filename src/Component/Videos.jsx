import React from 'react'

function Videos({video}) {
  return (
    <div className='container my-3'>
        <h1 className="text-center bg-secondary text-light ">VIDEOS</h1>
       <div className="row my-5">
                {
                    video.map((element) => {
                        return <div className="col-md-4 h-50" key={element.image}>
                            <div class="card">
                                {/* <video src=""></video> */}
                                <img src={element.image} class="card-img-top" alt="..."/>
                                    <div class="card-body">
                                        <p class="card-title text-primary">{element.name}</p>
                                    </div>
                            </div>
                        </div>
                    })
                }
                </div>
    </div>
  )
}

export default Videos
