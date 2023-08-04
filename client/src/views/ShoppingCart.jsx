import React, { useContext } from 'react'
import { DataContext } from '../context/DataContext'
import CardsShoppingCart from '../components/CardsShoppingCart';

const ShoppingCart = () => {

    const { shoppingCart } = useContext(DataContext);
    console.log(shoppingCart);
    return (
        <div className='shoppingCart'>
            <div className='shoppingCart-cardsContainer'>
                {shoppingCart.map((ele) => {
                    return (
                        <CardsShoppingCart key={ele.id} data={ele} />
                    )
                })}
            </div>
            <div>
                <h3>Resumen de tu compra</h3>
                <div>
                    <p>Cantidad de productos</p>
                    <p>Total a pagar</p>
                    <button>Pagar compra</button>
                </div>
            </div>
        </div>
    )
}

export default ShoppingCart