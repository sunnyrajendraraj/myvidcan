import dotenv from 'dotenv'
import connectDB from './db/index.db.js';
dotenv.config({
    path: './env'
})

const port = process.env.PORT || 8000

connectDB()