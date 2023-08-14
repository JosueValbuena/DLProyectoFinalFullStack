import React from 'react'

const CardsLiked = ({ data }) => {
    return (
        <div className='cardSC'>
            <div className='cardSC-left'>
                <img className='cardSCImg' src={data.img} alt="" />
                <div>
                    <h5>{data.titulo}</h5>
                    <p>{data.precio}</p>
                </div>
                <div>
                    
                </div>
            </div>
        </div>
    )
}

export default CardsLiked