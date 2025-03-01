import express from "express";
import colors from "colors";
<<<<<<< HEAD
import cors, { CorsOptions } from 'cors'
=======
>>>>>>> bcdb3c7613191b893aa2056d3a4c66336c5775d2
import swaggerUi from "swagger-ui-express";
import swaggerSpec, {swaggerUiOptions} from "./config/swagger";
import router from "./router";
import db from "./config/db";
<<<<<<< HEAD
import morgan from "morgan";
=======
>>>>>>> bcdb3c7613191b893aa2056d3a4c66336c5775d2



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

<<<<<<< HEAD
// Permitir Conexiones
const corsOptions : CorsOptions = {
    origin: function(origin, callback) {
        if(origin === process.env.FRONTEND_URL) {
            callback(null, true)
        } else {
            callback(new Error('CORS Error'))
        }
    }
}

server.use(cors(corsOptions))

// Leer datos de formularios
server.use(express.json())

server.use(morgan('dev'))

=======
// Leer datos de formularios
server.use(express.json())

>>>>>>> bcdb3c7613191b893aa2056d3a4c66336c5775d2
// .use() es un método que engloba todos los verbos HTTP
server.use('/api/products', router)

//Docs
server.use('/docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec, swaggerUiOptions))

export default server