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

# user.service.ts
- write business logic here 

# creeate use.route.ts
- call the business logic insde the publicProcedure

# index.ts
- combine routes here 
- Ye file saare routers ko combine kar rahi hai.
- Aur frontend ke liye API types bana rahi hai.
- appRouter
   │
   └── user
         └── getUser

# Frontend ko backend APIs kaise pata chale?
- typeof appRouter
- TypeScript pura router ka TYPE bana raha hai.
- Frontend import karta hai: import type { AppRouter } from "..."

- createTRPCProxyClient<AppRouter>()

    - Ye frontend me ek trpc object banata hai.
    - Jisse frontend backend APIs call kar sakta hai.
    - Backend me:
        appRouter = {
           user: {
             getUser
           }
        }
    - Frontend me automatically milta:
        - trpc.user.getUser.query()
    - backend ka API structure read karo
    - aur frontend client object banao
    - internally frontend ko object milta:
       - trpc = {
          user: {
            getUser: {
              query()
            }
          }
        }
- trpc.user.getUser.query()

# create file inside apps/api/index.ts
- Express server + tRPC backend API  ye code bana raha hai

- tRPC is NOT a web server

👉 tRPC:

HTTP server nahi hai
port open nahi karta
requests receive nahi karta directly

👉 tRPC sirf:

API procedures define karta hai
types manage karta hai
request ko process karta hai

- tRPC Express Adapter
   - tRPC ko Express ke saath connect karta hai.
   
- Problem
   - Express ko nahi pata:
   - tRPC router kaise run kare

- Solution
   - createExpressMiddleware()
   - middleware is Request handle karne wala function.
   - appRouter => Saare APIs ka collection.

- express() → server create karta
- app.use() → middleware register karta
- createExpressMiddleware() → tRPC connect karta
- appRouter → API structure
- request → router → procedure → service
- app.listen() → server start करता


# apps/web/index.ts

- createTRPCProxyClient => Frontend API client banata hai.
- httpBatchLink => HTTP request backend ko bhejta hai.
- AppRouter => Backend ka pura API structure/type.

-- createTRPCProxyClient AppRouter types use karke ek type-safe API client object banata hai
-- us client object se frontend directly backend procedures call karta hai

- Frontend ko pata chal gaya:
   - user router exist karta
   - getUser procedure exist karta

- Frontend me ek trpc object ban raha.
  - Internally object kuch aisa lagta:
      - trpc = {
            user: {
               getUser: {
                  query()
               }
            }
         }
   - trpc.user.getUser.query()
   - httpBatchLink => Ye backend URL configuration hai. Backend Express server.


- createTRPCProxyClient() → frontend client
- AppRouter → backend API types
- httpBatchLink() → HTTP requests bhejta
- trpc.user.getUser.query()
- backend procedure call
- frontend ko typed response milta
- autocomplete automatic मिलता