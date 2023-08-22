import React, { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { DataContext } from '../context/DataContext';
import axios from 'axios';

const EditItem = () => {

    const { id:itemId } = useParams();

    const { user } = useContext(DataContext);

    const [productEdit, setProductEdit] = useState([])
    const [titulo, setTitulo] = useState("")
    const [descripcion, setDescripcion] = useState("")
    const [stock, setStock] = useState("")
    const [precio, setPrecio] = useState("")
    const [url, setUrl] = useState("")

    const getProduct = async () => {
        const userId = user[0].id;
        const data = await fetch(`http://localhost:3001/usuario/${userId}/publicacion/${itemId}`);
        const res = await data.json();
        setProductEdit(res);
    }

    const updateProduct = async () => {
        const userId = user[0].id;
        await axios.put(`http://localhost:3001/usuario/${userId}/publicacion/${itemId}`, 
        {titulo: titulo, descripcion: descripcion, stock: stock, precio: precio, url: url});
    }

    useEffect(() => {
      getProduct()
    }, [])
    
    const handleSubmint = (e) => {
        e.preventDefault();
        updateProduct();
    }

    return (
        <div className='editItem-form'>
            <form onSubmit={handleSubmint}>
                <label>Titulo:
                    <input type='text' value={titulo} onChange={(e) => setTitulo(e.target.value)}/>
                </label>
                <br />
                <label>Descripcion:
                    <input type='text' value={descripcion} onChange={(e) => setDescripcion(e.target.value)}/>
                </label>
                <br />
                <label>Stock:
                    <input type='number' min="1" value={stock} onChange={(e) => setStock(e.target.value)}/>
                </label>
                <br />
                <label>Precio:
                    <input type='number' min="1" value={precio} onChange={(e) => setPrecio(e.target.value)}/>
                </label>
                <br />
                <label>Imagen URL:
                    <input type='text' value={url} onChange={(e) => setUrl(e.target.value)}/>
                </label>
                <br />
                <button>Editar</button>
            </form>
        </div>
    )
}

export default EditItem