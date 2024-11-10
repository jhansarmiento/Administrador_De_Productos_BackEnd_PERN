import express from "express";
import router from "./router";

const  server = express()

// .use() es un método que engloba todos los verbos HTTP
server.use('/api/products', router)

export default server