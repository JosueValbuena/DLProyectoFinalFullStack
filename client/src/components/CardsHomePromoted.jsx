import React from 'react'
import { useNavigate } from 'react-router-dom'

const CardsHomePromoted = ({data}) => {

    const navigate = useNavigate();

    const handleClickNavigate = () => {
        navigate(`/item-detail/${data.id}`)
    }

    return (
        <div className='cardsHomePromoted' onClick={handleClickNavigate}>
            <img className='cardsHomePromoted-img' src={data.img} alt="" />
            <h3>{data.titulo}</h3>
            <p>{data.precio}</p>
        </div>
    )
}

export default CardsHomePromoted