import { createFileRoute } from "@tanstack/react-router"
import { authHandler } from "../../../../lib/auth"

export const Route = createFileRoute("/api/auth/$")({
  server: {
    handlers: {
      GET: async ({ request }: { request: Request }) => {
        return await authHandler.handler(request)
      },
      POST: async ({ request }: { request: Request }) => {
        return await authHandler.handler(request)
      },
    },
  },
})
