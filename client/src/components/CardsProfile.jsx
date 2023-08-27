import axios from 'axios';
import React from 'react'
import { useNavigate } from 'react-router-dom'

const CardsProfile = ({ data, getUserProducts }) => {

  const navigate = useNavigate();

  const handleClickNavigate = () => {
    navigate(`/item-detail/${data.id}`);
  }

  const handleEdit = (event) => {
    event.stopPropagation();
    navigate(`/item-edit/${data.id}`);
  }

  const handleDelete = (event) => {
    event.stopPropagation();
    const deleteItem = async () => {
      const itemId = data.id;
      try {
        await axios.delete(`http://localhost:3001/publicaciones/${itemId}`)
      } catch (error) {
        console.log(error)
      }
    }
    deleteItem();
    
  }
  
  return (
    <div className='cardsHome' onClick={handleClickNavigate}>
      <img src={data.img} alt="" />
      <div>
        <h3>{data.titulo}</h3>
        <p>{data.descripcion}</p>
      </div>
      <div>
        <p>${data.precio}</p>
      </div>
      <div className='cardsHome-button-div'>
        <button className='btn btn-secondary btn-sm mb-2' onClick={handleEdit}>Editar</button>
        <button className='btn btn-warning btn-sm mb-2' onClick={handleDelete}>Eliminar</button>
      </div>
    </div>
  )
}

export default CardsProfile;
