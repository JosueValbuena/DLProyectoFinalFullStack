import React from 'react'
import CardsHomePromoted from './CardsHomePromoted'
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';


const SliderHome = ({ data }) => {
    return (
            <div className='home-promoted'>
                <h3>LO MAS VENDIDO!!!</h3>
                <div className='home-promotedCards'>
                <Swiper
                spaceBetween={1}
                slidesPerView={4} 
            >
                    {data.map((ele) => {
                        return (
                            <SwiperSlide><CardsHomePromoted key={ele.id} data={ele} /></SwiperSlide>
                        )
                    })}
                    </Swiper>
                </div>
            </div>
    )
}

export default SliderHome