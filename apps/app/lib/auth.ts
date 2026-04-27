import { betterAuth } from "better-auth"
import { mongodbAdapter } from "better-auth/adapters/mongodb"
import { tanstackStartCookies } from "better-auth/tanstack-start"
import { connectWithMondel } from "./mondel"

function createAuth(mondel: Awaited<ReturnType<typeof connectWithMondel>>) {
  return betterAuth({
    database: mongodbAdapter(mondel.getDb()),
    emailAndPassword: {
      enabled: true,
    },
    plugins: [tanstackStartCookies()],
    experimental: { joins: true },
  })
}

let auth: ReturnType<typeof createAuth> | undefined

async function getAuth() {
  if (auth) {
    return auth
  }

  const mondel = await connectWithMondel()
  const authInstance = createAuth(mondel)
  auth = authInstance

  return authInstance
}

export const authHandler = {
  handler: async (request: Request) => {
    const auth = await getAuth()
    return auth.handler(request)
  },
}
