import request from 'supertest'
import server from '../../server'

describe('POST /api/products', () => {
    it('Should display validation errors', async () => {
        const response = await request(server).post('/api/products').send({})

        expect(response.status).toBe(400)
        expect(response.body).toHaveProperty('errors')
        expect(response.body.errors).toHaveLength(4)
        
        expect(response.status).not.toBe(201)
        expect(response.body.errors).not.toHaveLength(2)
    })
    
    it('Should validate that the price is greater than 0', async () => {
        const response = await request(server).post('/api/products').send({
            name : "Office Chair",
            price : 0
        })

        expect(response.status).toBe(400)
        expect(response.body).toHaveProperty('errors')
        expect(response.body.errors).toHaveLength(1)
        
        expect(response.status).not.toBe(201)
        expect(response.body.errors).not.toHaveLength(2)
    })

    it('Should validate that the price is greater than 0', async () => {
        const response = await request(server).post('/api/products').send({
            name : "Office Chair",
            price : "Hola"
        })

        expect(response.status).toBe(400)
        expect(response.body).toHaveProperty('errors')
        expect(response.body.errors).toHaveLength(2)
        
        expect(response.status).not.toBe(201)
        expect(response.body.errors).not.toHaveLength(1)
    })

    it('Should create a new product', async () => {
        const response = await request(server).post('/api/products').send({
            name : "Monitor Lamp",
            price : 40
        })

        expect(response.status).toBe(201)
        expect(response.body).toHaveProperty('data')

        expect(response.status).not.toBe(400)
        expect(response.body).not.toHaveProperty('errors')
    })
})