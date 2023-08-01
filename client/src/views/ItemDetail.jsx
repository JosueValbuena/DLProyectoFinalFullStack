import React, { useContext } from 'react'
import { useParams } from 'react-router-dom'
import { DataContext } from '../context/DataContext';

const ItemDetail = () => {

    const id = useParams();
    const { data } = useContext(DataContext);
    const product = data.find(ele => ele.id == id.id)

    return (
        <div className='itemDetail'>
            <img className='itemDetail-img' src={product.url} alt="" />
            <div>
                <h3>{product.title}</h3>
                <p>{product.description}</p>
                <p>{product.price}</p>
                <button className='itemDetail-button'>Agregar al carrito</button>
            </div>
        </div>
    )
}

export default ItemDetail