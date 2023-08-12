import React from 'react'
import CardsHomePromoted from './CardsHomePromoted'
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';


const SliderHome = ({ data }) => {

    console.log(data);

    return (
            <div className='home-promoted'>
                <h3>LO MAS VENDIDO!!!</h3>
                <div className='home-promotedCards'>
                <Swiper
                spaceBetween={1}
                slidesPerView={1} 
            >
                    {data.map((ele) => {
                        return (
                            <SwiperSlide key={ele.id}><CardsHomePromoted key={ele.id} data={ele} /></SwiperSlide>
                        )
                    })}
                    </Swiper>
                </div>
            </div>
    )
}

export default SliderHome