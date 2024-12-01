import { Sequelize } from 'sequelize'
import dotenv from 'dotenv'
dotenv.config()

console.log()

// Connects the app with the database
const db = new Sequelize(process.env.DATABASE_URL)

export default db
