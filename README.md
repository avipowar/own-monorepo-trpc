# pnpm-workspaces.yml
- Features / Key Points
- fast package manager
- less storage
- monorepo support
- workspace linking
- local package sharing
- better performance

# trpc monorepo setup
- Features / Key Points
- typescript → type safety
- tsx → run TS files
- @trpc/server → backend API
- @trpc/client → frontend API calls
- zod → validation
- express → HTTP server
- cors → frontend-backend connection

# packages/trpc/server/trpc.ts file create 

- tRPC initialize karte hai
- router banane ka function nikalte hai
- procedure banane ka function nikalte hai
- Procedure = API endpoint.
- Router = procedures ka group.

initTRPC.create()
        │
        ▼
creates:
   │
   ├── router
   └── procedure
        │
        ▼
used to create APIs




// import { router, publicProcedure } from "./trpc";

// export const userRouter = router({
//   getUser: publicProcedure.query(() => {
//     return {
//       name: "Avinash",
//     };
//   }),
// })

Router Kya Hai?
Router = procedures ka group/folder.

userRouter
   ├── getUser
   ├── createUser
   └── deleteUser

publicProcedure.query()
READ API endpoint

STEP 3 — Procedure Ka Signature

- Input/output define karna hai.
- .input() aur .output() use karte hai.
