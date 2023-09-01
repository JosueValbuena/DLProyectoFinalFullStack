import React, { useContext, useState } from 'react'
import { DataContext } from '../context/DataContext';
import CardsHome from '../components/CardsHome';
import SliderHome from '../components/SliderHome';
import { useEffect } from 'react';
import axios from 'axios';

const Home = () => {

    const [dataPromoted, setDataPromoted] = useState([]);

    const { data, getData } = useContext(DataContext);
    console.log(data);

    const getProdutcsPromoted = async () => {
        const data = await axios.get("https://bicimarketplace.onrender.com/publicacionesPromoted");
        setDataPromoted(data.data);
    }

    useEffect(() => {
        getData()
        getProdutcsPromoted();
    }, [])


    return (
        <div>
            <SliderHome data={dataPromoted} />
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
