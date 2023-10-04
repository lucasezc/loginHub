const express = require("express");
const path = require("path");
const cors = require("cors");
const mongoose = require("mongoose");
const app = express();




const navegationController = require("../server/controllers/navegationController");



//middlewares
app.use(express.static(path.join(__dirname, '../client')));
app.use(cors());
app.use(express.json());



// navegationController Rutas
app.get("/", navegationController.goIndex);





app.listen(3000, () => {
    console.log("Servidor corriendo en el puerto 3000"); // tuvimos un error, como anteriormente utilizamos el puerto 8080, este no se cargaba de forma correcta los archivos css. Tomaba los archivos del servidor que habiamos creado anteriormente.
})