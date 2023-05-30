import React from 'react'

function ProductReview({ productreviewe}) {
  return (
    <div className="container my-4">
         <h1 className="text-center bg-secondary text-light ">PRODUCT REVIEWS</h1>
         <div className="row my-4">
                { 
                     productreviewe.map((element) => {
                        return <div className="col-md-6 h-50" key={element.image}>
                            <div class="card">
                                <img src={element.image} class="card-img-top" alt="..."/>
                                    <div class="card-body">
                                        <h5   class="card-title text-primary">{element.name}</h5>
                                        <p class="card-text text-success">{element.review}</p>
                                        <h3 class="card-text text-danger">{element.price}</h3>
                                    </div>
                            </div>
                        </div>
                    })
                }
                </div>
      
    </div>
  )
}

export default ProductReview
