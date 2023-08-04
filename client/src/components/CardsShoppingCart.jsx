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
                <img className='cardSCImg' src={data.url} alt="" />
                <div>
                    <h5>{data.title}</h5>
                    <p>{data.description}</p>
                </div>
                <div>
                    <p>{data.price}</p>
                </div>
            </div>
            <div className='cardSC-right'>
                <button onClick={lessQty}>-</button>
                <p>{data.qty}</p>
                <button onClick={plusQty}>+</button>
            </div>
        </div>
    )
}

export default CardsShoppingCart