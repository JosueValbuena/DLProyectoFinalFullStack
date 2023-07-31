import React from 'react'
import { useNavigate } from 'react-router-dom'

const CardsHome = ({ data }) => {

    const navigate = useNavigate();

    const handleClickNavigate = () => {
        navigate(`/item-detail/${data.id}`)
    }

    const eventoZ = (event) => {
        event.stopPropagation();
        console.log("Todo bien en boton" + data.id)
    }

    return (
        <div className='cardsHome' onClick={handleClickNavigate}>
            <img src={data.url} alt="" />
            <div>
                <h3>{data.title}</h3>
                <p>{data.description}</p>
            </div>
            <div>
                <p>${data.price}</p>
            </div>
            <div className='cardsHome-button-div'>
                <button className='cardsHome-button' onClick={eventoZ}>Agregar al carrito</button>
            </div>
        </div>
    )
}

export default CardsHome