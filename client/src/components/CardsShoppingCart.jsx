import React, { useContext } from 'react'
import { DataContext } from '../context/DataContext'

const CardsShoppingCart = ({ data }) => {

    const {shoppingCart, setShoppingCart} = useContext(DataContext);

    const plusQty = () => {
        const plusProduct = shoppingCart.map(ele => ele.id === data.id ? {...ele, qty: ele.qty + 1} : ele);
        setShoppingCart([...plusProduct]);
    }

    const lessQty = () => {
        const lessProduct = shoppingCart.map(ele => ele.id === data.id ? {...ele, qty: ele.qty -1} : ele);
        setShoppingCart([...lessProduct]);
    }

    return (
        <div className='cardSC'>
            <div className='cardSC-left'>
                <img className='cardSCImg' src={data.img} alt="" />
                <div>
                    <h5>{data.titulo}</h5>
                    <p>{data.descripcion}</p>
                </div>
                <div>
                    <p>{data.precio}</p>
                </div>
            </div>
            <div className='cardSC-right'>
                <button disabled={data.qty <= 1} onClick={lessQty}>-</button>
                <p>{data.qty}</p>
                <button disabled={data.qty >= data.stock} onClick={plusQty}>+</button>
            </div>
        </div>
    )
}

export default CardsShoppingCart