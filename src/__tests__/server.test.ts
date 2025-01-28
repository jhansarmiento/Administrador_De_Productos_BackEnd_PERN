import { connectDB } from '../server'
import db from '../config/db'

jest.mock('../config/db')

describe('ConnectDB', () => {
    it('Should handle database connection error', async () => {
        jest.spyOn(db, 'authenticate')
            .mockRejectedValueOnce(new Error('There was an error when connecting to the DB'))
        const consoleSpy = jest.spyOn(console, 'log')

        await connectDB()

        expect(consoleSpy).toHaveBeenCalledWith(
            expect.stringContaining('There was an error when connecting to the DB')
        )
    })
})