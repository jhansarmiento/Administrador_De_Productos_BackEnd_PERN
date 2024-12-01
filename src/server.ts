import express from "express";
import router from "./router";
import db from "./config/db";

// Connection to the Data Base
async function connectDB() {
    try {
        await db.authenticate()
        db.sync()
        console.log('Data Base connection successful')
    } catch (error) {
        console.log(error)
        console.log('There was an error when connecting to the DB')
    }
}

connectDB()
const  server = express()

// .use() es un método que engloba todos los verbos HTTP
server.use('/api/products', router)

export default server