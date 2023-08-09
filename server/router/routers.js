const express = require("express");
const router = express();
const cors = require("cors");
const { getUsers } = require("../consultas");

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

module.exports = router;