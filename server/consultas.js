const pool = require("./server");

const getUsers = async () => {
    const query = "SELECT * FROM usuarios";
    const { rows: user } = await pool.query(query);
    return user
};

const getProducts = async () => {
    const query = "SELECT * FROM publicaciones";
    const { rows: products } = await pool.query(query);
    return products
}

const getReviews = async (id) => {
    const query = "SELECT * FROM comentarios WHERE id_publicacion = $1";
    const values = [id];
    const { rows: comentarios } = await pool.query(query, values);
    return comentarios
}

module.exports = {
    getUsers,
    getProducts,
    getReviews
}