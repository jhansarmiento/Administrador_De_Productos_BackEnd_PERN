import request from 'supertest'
import server from '../../server'

describe('POST /api/products', () => {
    it('Should display errors messages', async () => {
        const response = await request(server).post('/api/products').send({})

        expect(response.status).toBe(400)
        expect(response.body).toHaveProperty('errors')
        expect(response.body.errors).toHaveLength(4)
        
        expect(response.status).not.toBe(201)
        expect(response.body.errors).not.toHaveLength(2)
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