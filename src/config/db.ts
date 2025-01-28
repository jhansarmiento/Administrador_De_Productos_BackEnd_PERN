import { Sequelize } from 'sequelize-typescript'
import dotenv from 'dotenv'

dotenv.config()

// Connects the app with the database
const db = new Sequelize(process.env.DATABASE_URL!, {
    models: [__dirname + '/../models/**/*.ts'],
    logging: false
})

export default db
