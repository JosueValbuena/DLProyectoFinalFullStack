const express = require("express");
const router = express();
const cors = require("cors");
const jwt = require("jsonwebtoken");
const { getProducts, getReviews, createUser, userLogin, getFavoritos } = require("../consultas");
const checkCredentiaslMiddleware = require("../middlewares/middlewares");
require("dotenv").config();

// Middleware
router.use(express.json());
router.use(cors());
router.use(cors());

//Rutas
router.get("/publicaciones", async (req, res) => {
    try {
        const productos = await getProducts();
        res.json(productos);
    } catch (error) {
        res.send(error)
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

router.get("/profile", (req, res) => {
    const { email, correo, contraseña } = req.body;
    console.log(req.body);
    res.json({ mensaje: "Get Profile" });
});

router.get("/usuarios/:idUsuario/favoritos/:idPublicacion", async (req, res) => {
    const id_usuarios = req.params.idUsuario;
    const id_publicacion = req.params.idPublicacion;
    const favoritos = await getFavoritos(id_usuarios, id_publicacion);
    res.send(favoritos);
});

module.exports = router;