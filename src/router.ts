import { Router } from 'express'
import { CreateProduct } from './handlers/product'

const router = Router()

// Routing - Crea el servidor
router.get('/', (req, res) => {
    
    res.json('Desde GET')
})
router.post('/', CreateProduct)

router.put('/', (req, res) => {
    
    res.json('Desde PUT')
})
router.patch('/', (req, res) => {
    
    res.json('Desde PATCH')
})
router.delete('/', (req, res) => {
    
    res.json('Desde DELETE')
})

export default router