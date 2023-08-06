import React, { useContext } from 'react';
import { DataContext } from '../context/DataContext';
import CardsProfile from '../components/CardsProfile';
import { Link } from "react-router-dom";

const ProfileGallery = () => {
    const { data } = useContext(DataContext);

    return (
        <div>
            <div className='p-5 text-center bg-light'>
                <h1 className='mb-3'>Tus publicaciones</h1>
                <h5 className='mb-3'>Encuentra y edita tu producto</h5>
                <Link to="/publicar-producto" className='btn btn-primary'>O publica uno nuevo!</Link>
            </div>
            <div className='home'>
                {data.map((ele) => {
                    return (
                        <CardsProfile key={ele.id} data={ele} />
                    )
                })}
            </div>
        </div>
    )
}

export default ProfileGallery;