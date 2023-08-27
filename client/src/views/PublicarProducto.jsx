import React, { useState, useContext, useEffect } from "react";
import { DataContext } from "../context/DataContext";
import axios from "axios";


const PublicarProducto = () => {
    const { user, getData } = useContext(DataContext);

    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [stock, setStock] = useState("");
    const [price, setPrice] = useState(0);
    const [imageUrl, setImageUrl] = useState("");
    const [product, setProduct] = useState({});

    const postProduct = async () => {
        try {
            const res = await axios.post("http://localhost:3001/publicaciones", {data: product});
            console.log(res);
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        if (Object.keys(product).length !== 0) {
            postProduct();
            setTitle("");
            setDescription("");
            setStock("");
            setPrice(0);
            setImageUrl("");
        }
    }, [product]);

    const handleSubmit = async (e) => {
        e.preventDefault();
        const idUser = user[0].id;

        const today = new Date();
        const formattedDate = today.toISOString().split('T')[0]; // Formato YYYY-MM-DD

        const newProduct = {
            id_usuario: idUser,
            titulo: title,
            descripcion: description,
            stock: stock,
            precio: parseFloat(price),
            fecha_publicacion: formattedDate,
            img: imageUrl,
        };

        setProduct(newProduct);

        await getData();
    };

    return (
        <div className="container mt-5">
            <div className='p-5 text-center'>
                <h1 className='mb-3'>Publica tu producto</h1>
                <h5 className='mb-3'>Pueden ser bicicletas, herramientas, accesorios, y más!</h5>
            </div>
            <div className="row justify-content-center">
                <div className="col-md-6">
                    <form onSubmit={handleSubmit}>
                        <div className="form-group">
                            <label htmlFor="title">Título</label>
                            <input
                                type="text"
                                className="form-control"
                                id="title"
                                value={title}
                                onChange={(e) => setTitle(e.target.value)}
                                required
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="description">Descripción</label>
                            <textarea
                                className="form-control"
                                id="description"
                                rows="3"
                                value={description}
                                onChange={(e) => setDescription(e.target.value)}
                                required
                            ></textarea>
                        </div>
                        <div className="form-group">
                            <label htmlFor="categories">Stock</label>
                            <input
                                type="number"
                                className="form-control"
                                id="stock"
                                value={stock}
                                onChange={(e) => setStock(e.target.value)}
                                required
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="price">Precio</label>
                            <input
                                type="number"
                                className="form-control"
                                id="price"
                                value={price}
                                onChange={(e) => setPrice(e.target.value)}
                                min="1"
                                required
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="imageUrl">URL de la Imagen</label>
                            <input
                                type="text"
                                className="form-control"
                                id="imageUrl"
                                value={imageUrl}
                                onChange={(e) => setImageUrl(e.target.value)}
                                required
                            />
                        </div>
                        <button type="submit" className="btn btn-primary m-3">
                            Publicar Producto
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default PublicarProducto;
