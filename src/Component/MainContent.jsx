import React from 'react'
import OfferShow from './OfferShow'
import data from '../data/data.json'
function MainContent() {
    return (
        <div className="container ">
            <div className='row'>
                <div className='col-md-6'>
                    <OfferShow img={data.starProduct[0].image} url={data.starProduct[0].url}></OfferShow>
                </div>
                <div className='col-md-6'>
                    <div className='h-50'>
                        <div className="row">
                            <div className='col-6'>
                                <OfferShow img={data.starProduct[1].image} url={data.starProduct[1].url}></OfferShow>
                            </div>
                            <div className='col-6'>
                                <OfferShow img={data.starProduct[2].image} url={data.starProduct[2].url}></OfferShow>
                            </div>

                        </div>
                    </div>
                    <div className='h-50'>
                    <OfferShow img={data.starProduct[3].image} url={data.starProduct[3].url}></OfferShow>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default MainContent
