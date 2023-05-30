import React from 'react'

function ShowMenuItem({ cover, item }) {
    return (
        <div className="container">
            
            <div className="row my-3">
                <div className="col-md-3">
                <img src={cover} class="card-img" alt="..."/>
                </div>
                <div className="col-md-9">
                    <div className="row">
                {
                    item.map((element) => {
                        return <div className="col-md-4 h-50" key={element.image}>
                            <div class="card">
                                <img src={element.image} class="card-img-top" alt="..."/>
                                    <div class="card-body">
                                        <p class="card-title text-primary">{element.name}</p>
                                        <h3 class="card-text text-danger">{element.price}</h3>
                                    </div>
                            </div>
                        </div>
                    })
                }
                </div>
                </div>
                
            </div>
        </div>
    )
}

export default ShowMenuItem
