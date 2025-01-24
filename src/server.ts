import express from "express";
import router from "./router";
import db from "./config/db";
import colors from "colors";


// Connection to the Data Base
async function connectDB() {
    try {
        await db.authenticate()
        db.sync()
        //console.log(colors.magenta.bold('Data Base connection successful'))
    } catch (error) {
        console.log(error)
        console.log(colors.bgRed.bold('There was an error when connecting to the DB'))
    }
}

connectDB()

// Instancia de Express
const  server = express()

// Leer datos de formularios
server.use(express.json())

// .use() es un método que engloba todos los verbos HTTP
server.use('/api/products', router)

server.get('/api', (req, res) => {
    res.json({ msg : 'Desde API' })
})
export default server