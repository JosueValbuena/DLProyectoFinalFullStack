const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const pool = require("./db");
const app = express();
const puerto = 3001;

// Middleware
app.use(bodyParser.json());
app.use(cors());

// rutas
app.post("/login", async (req, res) => {
  try {
    const { email, contrasena } = req.body;
    const query = "SELECT * FROM usuarios WHERE email = $1";
    const { rows } = await pool.query(query, [email]);
    if (rows.length === 0) {
      res.json({ mensaje: "No se encontró ningún usuario con ese correo" });
    } else {
      console.log(rows[0].contrasena);
      if (contrasena === rows[0].contrasena) {
        res.json(rows);
      } else {
        res.json({ mensaje: "bad" });
      }
    }
    pool.end;
  } catch (error) {
    console.error("Error al loguearte:", error);
    res.status(500).json({ mensaje: "Error en el servidor" });
  }
});

app.post("/register", async (req, res) => {
  // console.log(req.body);
  try {
    const { nombre, email, contrasena, direccion, ciudad, telefono } = req.body;
    const query =
      "INSERT INTO usuarios (nombre, email, contrasena, direccion, ciudad, telefono) VALUES ($1, $2, $3, $4, $5, $6)";
    await pool.query(query, [
      nombre,
      email,
      contrasena,
      direccion,
      ciudad,
      telefono,
    ]);
    res.json({ mensaje: "Usuario creado exitosamente" });
  } catch (error) {
    console.error("Error al crear el usuario:", error);
    res.status(500).json({ mensaje: "Error en el servidor" });
  }
  res.json({ mensaje: "Registro exitoso" });
});

app.get("/profile", (req, res) => {
  const { email, correo, contraseña } = req.body;
  console.log(req.body);
  res.json({ mensaje: "Get Profile" });
});

app.listen(puerto, () => {
  console.log(`Servidor corriendo en el puerto ${puerto}`);
});
