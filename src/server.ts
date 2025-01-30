import express from "express";
import colors from "colors";
import swaggerUi from "swagger-ui-express";
import swaggerSpec, {swaggerUiOptions} from "./config/swagger";
import router from "./router";
import db from "./config/db";



// Connection to the Data Base
export async function connectDB() {
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

//Docs
server.use('/docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec, swaggerUiOptions))

export default server