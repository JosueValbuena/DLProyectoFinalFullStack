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


module.exports = {
    getProducts,
    getReviews,
    userLogin,
    createUser
}