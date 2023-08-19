const pool = require("./server");
const bcrypt = require("bcryptjs");

const getProducts = async () => {
    const query = "SELECT * FROM publicaciones";
    const { rows: products } = await pool.query(query);
    return products
}

const postProducts = async (id_usuario, titulo, descripcion, stock, precio, fecha_publicacion, img) => {
    try {
        const query = "INSERT INTO publicaciones(id_usuario, titulo, descripcion, stock, precio, fecha_publicacion, img) VALUES ( $1, $2, $3, $4, $5, $6, $7)";
        const values = [id_usuario, titulo, descripcion, stock, precio, fecha_publicacion, img];
        const { rows: products } = await pool.query(query, values);
        return products;
    } catch (error) {
        console.log({error: error, message:"ocurrio al ingresar los datos en la tabla PUBLICACIONES"});
    }
}

const getReviews = async (id) => {
    const query = "SELECT * FROM comentarios WHERE id_publicacion = $1";
    const values = [id];
    const { rows: comentarios } = await pool.query(query, values);
    return comentarios
}

const userLogin = async (email, password) => {
    const values = [email];
    const query = "SELECT * FROM usuarios WHERE email = $1";
    const { rows: [usuario], rowCount } = await pool.query(query, values);
    if (!usuario) {
        throw { code: 401, message: "email invalido" };
    } else {
        const { contrasena: passwordEcripted } = usuario;
        const passwordValided = bcrypt.compareSync(password, passwordEcripted);
        console.log(password)
        console.log(passwordEcripted)
        if (passwordValided) {
            return usuario
        } else {
            if (!passwordValided || !rowCount)
                throw { code: 401, message: "email o contrasenha incorrecta" };
        }
    }
}

const createUser = async (nombre, email, contrasena, direccion, ciudad, telefono, fecha_registro) => {
    const passwordEcripted = bcrypt.hashSync(contrasena, 10);
    contrasena = passwordEcripted;
    const query = "INSERT INTO usuarios (nombre, email, contrasena, direccion, ciudad, telefono, fecha_registro) VALUES ($1, $2, $3, $4, $5, $6, $7)";
    const values = [nombre, email, passwordEcripted, direccion, ciudad, telefono, fecha_registro];
    const { rows: userCreted } = await pool.query(query, values);
    return userCreted;
}

const getFavoritos = async (id_usuarios) => {
    const query = "SELECT publicaciones.img, publicaciones.titulo, publicaciones.precio, publicaciones.id FROM publicaciones INNER JOIN favoritos ON publicaciones.id = favoritos.id_publicaciones INNER JOIN usuarios ON usuarios.id = favoritos.id_usuarios WHERE id_usuarios = $1"
    const values = [id_usuarios];
    const { rows: favoritos } = await pool.query(query, values);
    return favoritos
}

const getUser = async (email) => {
    try {
        const query = "SELECT id, nombre, email, direccion, ciudad, telefono FROM usuarios WHERE email = $1";
        const values = [email];
        const { rows: user } = await pool.query(query, values)
        return user;
    } catch (error) {
        console.log("Error al obtener usuario")
    }
}

const setFavoritos = async (idUser, idProduct) => {
    try {
        const query = "INSERT INTO favoritos VALUES(DEFAULT, $1, $2)";
        const values = [idUser, idProduct];
        const { rowCount } = await pool.query(query, values);
    } catch (error) {
        console.log("No se pudo agregar datos a la tabla")
    }
}

const deleteFavoritos = async (idUser, idProduct) => {
    try {
        const query = "DELETE FROM favoritos WHERE id_usuarios = $1 AND id_publicaciones = $2";
        const values = [idUser, idProduct];
        const { rowCount } = await pool.query(query, values);
    } catch (error) {
        console.log("No se encontraron datos en la tabla")
    }
}

module.exports = {
    getProducts,
    getReviews,
    userLogin,
    createUser,
    getFavoritos,
    getUser,
    setFavoritos,
    deleteFavoritos,
    postProducts
}