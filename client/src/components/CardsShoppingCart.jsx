import React from 'react'

const CardsShoppingCart = ({ data }) => {

    

    return (
        <div className='cardSC'>
            <div className='cardSC-left'>
                <img className='cardSCImg' src={data.url} alt="" />
                <div>
                    <h5>{data.title}</h5>
                    <p>{data.description}</p>
                </div>
                <div>
                    <p>{data.price}</p>
                </div>
            </div>
            <div>
                <button></button>
                <p>{data.qty}</p>
                <button></button>
            </div>
        </div>
    )
}

export default CardsShoppingCart