import express from "express";

const  server = express()

// Routing - Crea el servidor
server.get('/', (req, res) => {
    
    const datos = [
        { id: 1, nombre: 'Jhan'},
        { id: 2, nombre: 'Carlos'},

    ]
    res.json(datos)
})

export default server