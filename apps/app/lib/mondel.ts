import { createClient } from "mondel"

const connect = createClient({
  serverless: true,
  schemas: [] as const,
  validation: "off",
})

export async function connectWithMondel() {
  const uri = process.env.MONGODB_URI

  if (!uri) {
    throw new Error("MONGODB_URI is not defined in environment variables")
  }

  return connect(uri, {
    maxPoolSize: 1,
    minPoolSize: 0,
    serverSelectionTimeoutMS: 5000,
  })
}

export async function pingMondel() {
  const client = await connectWithMondel()
  const result = await client.getDb().admin().ping()

  return {
    ok: result.ok === 1,
    result,
  }
}
