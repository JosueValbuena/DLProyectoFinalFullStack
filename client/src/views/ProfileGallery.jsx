import React, { useContext, useEffect, useState } from 'react';
import { DataContext } from '../context/DataContext';
import CardsProfile from '../components/CardsProfile';
import { Link } from "react-router-dom";
import axios from 'axios';

const ProfileGallery = () => {

    const [productsUser, setProductsuser] = useState([])

    const { user } = useContext(DataContext)

    const getUserProducts = async () => {
        try {
            const id_user = user[0].id;
            const data = await fetch("https://bicimarketplace.onrender.com/publicaciones/usuario/" + id_user);
            const res = await data.json();
            setProductsuser(res);
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        getUserProducts()
    }, [])


    return (
        <div>
            <div className='p-5 text-center bg-light'>
                <h1 className='mb-3'>Tus publicaciones</h1>
                <h5 className='mb-3'>Encuentra y edita tu producto</h5>
                <Link to="/post-product" className='btn btn-primary'>O publica uno nuevo!</Link>
            </div>
            <div className='home'>
                {productsUser.map((ele) => {
                    return (
                        <CardsProfile key={ele.id} data={ele} />
                    )
                })}
            </div>
        </div>
    )
}

export default ProfileGallery;
