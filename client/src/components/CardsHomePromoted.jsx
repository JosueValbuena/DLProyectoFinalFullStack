import React from 'react'
import { useNavigate } from 'react-router-dom'

const CardsHomePromoted = ({data}) => {

    const navigate = useNavigate();

    const handleClickNavigate = () =>{
        navigate(`/item-detail/${data.id}`)
    }

    return (
    <div className='cardsHomePromoted' onClick={handleClickNavigate}>
        <img className='cardsHomePromoted-img' src={data.url} alt="" />
        <h3>{data.title}</h3>
        <p>{data.price}</p>
    </div>
  )
}

export default CardsHomePromoted