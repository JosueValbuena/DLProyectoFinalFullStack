const express = require("express");
const router = express();
const cors = require("cors");
const { getUsers, getProducts, getReviews } = require("../consultas");

require("dotenv").config();

router.use(express.json());
router.use(cors());

router.get("/usuarios", async (req, res) => {
    try {
        const users = await getUsers();
        res.json(users)
    } catch (error) {
        res.send(error)
    }
})

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

module.exports = router;