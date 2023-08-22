import React, { useContext } from 'react'
import { useNavigate } from 'react-router-dom'

const CardsProfile = ({data}) => {
  const navigate = useNavigate();

  const handleClickNavigate = () => {
    navigate(`/item-detail/${data.id}`);
  }

  const handleEdit = (event) => {
    event.stopPropagation();
    navigate(`/item-edit/${data.id}`);
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
      </div>
    </div>
  )
}

export default CardsProfile;
