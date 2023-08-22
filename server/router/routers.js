const express = require("express");
const router = express();
const cors = require("cors");
const jwt = require("jsonwebtoken");
const { getProducts, postProducts, getReviews,
    createUser, userLogin, getFavoritos,
    setFavoritos, getUser, deleteFavoritos,
    getUserProducts } = require("../consultas");
const checkCredentiaslMiddleware = require("../middlewares/middlewares");
require("dotenv").config();

// Middleware
router.use(express.json());
router.use(cors());

//Routes
router.get("/publicaciones", async (req, res) => {
    try {
        const productos = await getProducts();
        res.json(productos);
    } catch (error) {
        res.send(error)
    }
})

router.post("/publicaciones", async (req, res) => {
    try {
        const data = req.body;
        console.log(data);
        
        const productos = await postProducts(id_usuario, titulo, descripcion, stock, precio, fecha_publicacion, img);
        res.json({ datos: productos, message: "datos agregados correctamente" });
    } catch (error) {
        console.log({ error: error, message: "no se pudo agregar datos a PUBLICACIONES" })
    }
})

router.get("/publicaciones/usuario/:id_user", async (req, res) => {
    try {
        const {id_user} = req.params;
        const userProducts = await getUserProducts(id_user);
        res.json(userProducts);
    } catch (error) {
        console.log(error)
    }
})

router.get("/comentarios/:id", async (req, res) => {
    try {
        const id = parseInt(req.params.id);
        const comentarios = await getReviews(id);
        res.send(comentarios)
    } catch (error) {
        res.send(error)
    }
})

router.post("/login", checkCredentiaslMiddleware, async (req, res) => {
    try {
        const user = req.body;
        const { email, password } = user;
        await userLogin(email, password);
        const token = jwt.sign({ email }, process.env.SECRET_KEY, { expiresIn: "1h" });
        res.send(token);
    } catch (error) {
        res.status(error.code || 500).send({ error });
    }
})

router.get("/user", async (req, res) => {
    try {
        const token = req.header("Authorization").split("Bearer ")[1];
        const { email } = jwt.decode(token);
        const usuario = await getUser(email);
        if (usuario) {
            res.json(usuario);
        } else {
            res.status(404).json({ error: "Usuario no encontrado" })
        }
    } catch (error) {
        res.status(500).send({ error: error.message });
    }
});

router.post("/register", async (req, res) => {
    try {
        const { nombre, email, contrasena, direccion, ciudad, telefono, fecha_registro } = req.body;
        console.log(req.body)
        await createUser(nombre, email, contrasena, direccion, ciudad, telefono, fecha_registro);
        res.json({ mensaje: "Usuario creado exitosamente" });
    } catch (error) {
        console.error("Error al crear el usuario:", error);
        res.status(500).json({ mensaje: "Error en el servidor" });
    }
});

router.get("/favoritos/usuario/:idUsuario", async (req, res) => {
    const id_usuarios = req.params.idUsuario;
    const favoritos = await getFavoritos(id_usuarios);
    res.send(favoritos);
});

router.post("/favoritos", async (req, res) => {
    try {
        const { idUser, idProduct } = req.body;
        await setFavoritos(idUser, idProduct);
        return res.send("Datos agregados correctamente")
    } catch (error) {
        console.log(error)
    }
});

router.delete("/usuario/:idUser/publicacion/:idProduct", async (req, res) => {
    try {
        const { idUser, idProduct } = req.params;
        console.log({
            idUser: idUser,
            idProduct: idProduct
        })
        await deleteFavoritos(idUser, idProduct);
        return res.send("Datos eliminados correctamente correctamente")
    } catch (error) {
        console.log(error)
    }
})

module.exports = router;