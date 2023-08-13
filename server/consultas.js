const pool = require("./server");
const bcrypt = require("bcryptjs");

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

const getFavoritos = async (id_usuarios, id_publicacion) => {
    const query = "SELECT publicaciones.img, publicaciones.titulo, publicaciones.precio FROM publicaciones INNER JOIN favoritos ON publicaciones.id = favoritos.id_publicaciones INNER JOIN usuarios ON usuarios.id = favoritos.id_usuarios WHERE id_publicaciones = $2 and id_usuarios = $1"
    const values = [id_usuarios, id_publicacion];
    const { rows: favoritos } = await pool.query(query, values);
    return favoritos
}


module.exports = {
    getProducts,
    getReviews,
    userLogin,
    createUser,
    getFavoritos
}