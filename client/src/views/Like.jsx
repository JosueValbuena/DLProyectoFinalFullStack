import React, { useContext, useEffect } from 'react'
import { DataContext } from '../context/DataContext'
import CardsLiked from '../components/CardsLiked';

const Like = () => {

  const { favoritos, getFavoritos } = useContext(DataContext);

  

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