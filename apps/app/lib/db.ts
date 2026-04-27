import { MongoClient } from "mongodb"

// Connection string from the MongoDB atlas dashboard
const uri = process.env.MONGODB_URI

let connected = false

if (!uri) {
  throw new Error("MONGODB_URI is not defined in environment variables")
}

export const client = new MongoClient(uri)
export const db = client.db()

export async function connectToDatabase() {
  if (!connected) {
    try {
      await client.connect()
      connected = true
    } catch (error) {
      throw new Error(
        `Failed to connect to database: ${error instanceof Error ? error.message : "Unknown error"}`
      )
    }
  }
  return db
}
