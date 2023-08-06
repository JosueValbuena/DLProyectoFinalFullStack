import React, { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { DataContext } from '../context/DataContext';

const CardsProfile = ({ data }) => {
  const navigate = useNavigate();

  const handleClickNavigate = () => {
    navigate(`/item-detail/${data.id}`);
  }

  const handleEdit = (event) => {
    event.stopPropagation();
    // Lógica para editar el producto
    // Por ejemplo, puedes abrir un modal de edición o navegar a una página de edición.
    console.log('Edit product with ID:', data.id);
  }

  return (
    <div className='cardsHome' onClick={handleClickNavigate}>
      <img src={data.url} alt="" />
      <div>
        <h3>{data.title}</h3>
        <p>{data.description}</p>
      </div>
      <div>
        <p>${data.price}</p>
      </div>
      <div className='cardsHome-button-div'>
        <button className='btn btn-secondary btn-sm mb-2' onClick={handleEdit}>Editar</button>
      </div>
    </div>
  )
}

export default CardsProfile;
