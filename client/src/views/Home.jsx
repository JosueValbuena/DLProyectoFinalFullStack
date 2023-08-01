import React, { useContext } from 'react'
import { DataContext } from '../context/DataContext';
import CardsHome from '../components/CardsHome';
import CardsHomePromoted from '../components/CardsHomePromoted';

const Home = () => {
    const { data } = useContext(DataContext);

    return (
        <div>
            <div className='home-promoted'>
                <h3>LO MAS VENDIDO!!!</h3>
                <div className='home-promotedCards'>
                    {data.map((ele) => {
                        return (
                            <CardsHomePromoted key={ele.id} data={ele} />
                        )
                    })}
                </div>
            </div>
            <div className='home'>
                {data.map((ele) => {
                    return (
                        <CardsHome key={ele.id} data={ele} />
                    )
                })}
            </div>
        </div>
    )
}

export default Home