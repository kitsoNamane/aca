import { MongoClient } from 'mongodb'
import { config } from 'dotenv'

config()

export const client = new MongoClient(process.env.DB_URL) 
export const db = client.db(process.env.DB_NAME)
