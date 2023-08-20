import React, { useContext } from 'react'
import { DataContext } from '../context/DataContext';
import CardsHome from '../components/CardsHome';
import SliderHome from '../components/SliderHome';
import { useEffect } from 'react';

const Home = () => {
    const { data, getData } = useContext(DataContext);

    useEffect(() => {
      getData()
    }, [])
    

    return (
        <div>
            <SliderHome data={data}/>
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