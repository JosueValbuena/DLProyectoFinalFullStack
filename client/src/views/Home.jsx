import React, { useContext } from 'react'
import { DataContext } from '../context/DataContext';
import CardsHome from '../components/CardsHome';

const Home = () => {
    const { data } = useContext(DataContext);

    return (
        <div className='home'>
            {data.map((ele)=>{
                return(
                    <CardsHome key={ele.id} data={ele} />
                )
            })}
        </div>
    )
}

export default Home