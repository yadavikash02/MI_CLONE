import React from 'react'

function OfferShow({img,url}) {
  return (
    <div className="card h-100">
        <a href={url}><img src={img} className="card-img" alt="..." /></a>
    </div>          
  )
}

export default OfferShow
