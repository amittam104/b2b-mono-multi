import { Link, createFileRoute, useNavigate } from "@tanstack/react-router"
import { Button, buttonVariants } from "@workspace/ui/components/button"
// import { authClient } from "../../lib/auth-client"

export const Route = createFileRoute("/")({ component: App })

function App() {
  const navigate = useNavigate()
  // const { data: session } = authClient.useSession()

  // async function signOut() {
  //   await authClient.signOut({})
  //   navigate({ to: "/" })
  // }

  // async function signInUser() {
  //   await authClient.signIn.email(
  //     {
  //       email: "amittambulkar104@gmail.com",
  //       password: "At12345678?",
  //     },
  //     {
  //       // onRequest: (ctx) => {},
  //       onSuccess: () => {
  //         navigate({ to: "/dashboard" })
  //       },
  //       onError: (ctx) => {
  //         alert(ctx.error.message)
  //       },
  //     }
  //   )
  // }

  // async function signUpUser() {
  //   await authClient.signUp.email(
  //     {
  //       name: "Amit T",
  //       email: "amittambulkar104@gmail.com",
  //       password: "At12345678?",
  //     },
  //     {
  //       // onRequest: (ctx) => {},
  //       onSuccess: () => {
  //         navigate({ to: "/dashboard" })
  //       },
  //       onError: (ctx) => {
  //         alert(ctx.error.message)
  //       },
  //     }
  //   )
  // }
  return (
    <main className="min-h-screen bg-background text-foreground">
      <header className="mx-auto flex h-16 w-full max-w-6xl items-center justify-between border-b px-5 sm:px-8">
        <div className="flex items-center gap-3">
          <div className="flex size-8 items-center justify-center rounded-md border bg-card text-sm font-semibold text-card-foreground">
            B2B
          </div>
          <span className="text-sm font-semibold">Workspace OS</span>
        </div>

        <nav className="hidden items-center gap-6 text-sm text-muted-foreground md:flex">
          <a
            className="transition-colors hover:text-foreground"
            href="#workflow"
          >
            Workflow
          </a>
          <a className="transition-colors hover:text-foreground" href="#teams">
            Teams
          </a>
          <a
            className="transition-colors hover:text-foreground"
            href="#security"
          >
            Security
          </a>
        </nav>
        {/* 
        {session?.user ? (
          <div className="flex flex-wrap items-center gap-3">
            <Button variant="destructive" onClick={signOut}>
              Sign Out
            </Button>
            <Link className={buttonVariants()} to="/dashboard">
              Dashboard
            </Link>
          </div>
        ) : (
          <div className="flex items-center gap-2">
            <Button
              // className="h-9 px-3 text-sm"
              onClick={signInUser}
              variant="outline"
            >
              Sign In
            </Button>
            <Button onClick={signUpUser}>Sign Up</Button>
          </div>
        )} */}
      </header>

      <section className="mx-auto grid min-h-[calc(100vh-4rem)] w-full max-w-6xl items-center gap-10 px-5 py-10 sm:px-8 lg:grid-cols-[1.05fr_0.95fr]">
        <div className="max-w-2xl">
          <p className="mb-5 text-sm font-medium text-primary">
            Multi-tenant sales workspace
          </p>
          <h1 className="max-w-3xl text-5xl leading-[0.95] font-semibold tracking-tight sm:text-6xl lg:text-7xl">
            Run every B2B account from one quiet workspace.
          </h1>
          <p className="mt-6 max-w-xl text-lg leading-8 text-muted-foreground">
            Give each customer, team, and workspace a focused place to manage
            pipeline, activity, and handoffs without mixing tenant data.
          </p>

          {/* {session?.user ? (
            <div className="mt-4 flex flex-wrap items-center gap-3">
              <Button variant="destructive" onClick={signOut}>
                Sign Out
              </Button>
              <Link className={buttonVariants()} to="/dashboard">
                Dashboard
              </Link>
            </div>
          ) : (
            <div className="mt-8 flex flex-wrap items-center gap-3">
              <Button className="h-10 px-4 text-sm" onClick={signUpUser}>
                Sign Up
              </Button>
              <Button
                className="h-10 px-4 text-sm"
                onClick={signInUser}
                variant="outline"
              >
                Sign In
              </Button>
            </div>
          )} */}
        </div>

        <div className="rounded-lg border bg-card p-4 text-card-foreground">
          <div className="flex items-center justify-between border-b pb-4">
            <div>
              <p className="text-sm font-semibold">Acme Manufacturing</p>
              <p className="text-xs text-muted-foreground">
                Enterprise workspace
              </p>
            </div>
            <div className="rounded-md border bg-muted px-2 py-1 text-xs text-muted-foreground">
              Tenant A
            </div>
          </div>

          <div className="grid gap-3 py-4 sm:grid-cols-3">
            <div className="rounded-md border bg-muted/50 p-3">
              <p className="text-xs text-muted-foreground">Open deals</p>
              <p className="mt-2 text-2xl font-semibold">42</p>
            </div>
            <div className="rounded-md border bg-muted/50 p-3">
              <p className="text-xs text-muted-foreground">Active users</p>
              <p className="mt-2 text-2xl font-semibold">18</p>
            </div>
            <div className="rounded-md border bg-muted/50 p-3">
              <p className="text-xs text-muted-foreground">Tasks due</p>
              <p className="mt-2 text-2xl font-semibold">7</p>
            </div>
          </div>

          <div className="space-y-2">
            {[
              ["Northwind renewal", "$48,000", "Proposal"],
              ["Vertex onboarding", "$21,500", "Setup"],
              ["Atlas expansion", "$89,200", "Review"],
            ].map(([name, value, stage]) => (
              <div
                className="flex items-center justify-between rounded-md border bg-background px-3 py-3"
                key={name}
              >
                <div>
                  <p className="text-sm font-medium">{name}</p>
                  <p className="text-xs text-muted-foreground">{stage}</p>
                </div>
                <p className="text-sm font-semibold">{value}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}
