import { createFileRoute } from "@tanstack/react-router"
import { pingMondel } from "../../../lib/mondel"

export const Route = createFileRoute("/api/mondel-test")({
  server: {
    handlers: {
      GET: async () => {
        try {
          const data = await pingMondel()

          return Response.json(data)
        } catch (error) {
          return Response.json(
            {
              error:
                error instanceof Error ? error.message : "Unknown Mondel error",
            },
            { status: 500 }
          )
        }
      },
    },
  },
})
