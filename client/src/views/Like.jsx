import React, { useContext, useEffect } from 'react'
import { DataContext } from '../context/DataContext'
import CardsLiked from '../components/CardsLiked';

const Like = () => {

  const { favoritos, setFavoritos, user } = useContext(DataContext);

  const getFavoritos = async () => {
    const idUser = user[0].id;
    const data = await fetch("http://localhost:3001/favoritos/usuario/" + idUser);
    const res = await data.json();
    setFavoritos(res);
  }

  useEffect(() => {
    getFavoritos()
  }, [favoritos])


  return (
    <div>
      {favoritos.map((ele) => {
        return (
          <CardsLiked key={ele.id} data={ele} />
        )
      })}
    </div>
  )
}

export default Like