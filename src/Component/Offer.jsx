import React from 'react'

import OfferShow from './OfferShow'
function Offer({data}) {
    return (
        <div className="container">
        <div className="row">
            {
                data.offer.map((element) => {
                    return <div className="col-md-4 my-5 mx-0.5 " key={element.url}>
                        <OfferShow img={element.image} url={element.url}/>
                    </div>
                })
            }
            </div>
        </div>
    )
}

export default Offer
