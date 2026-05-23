import express from "express";
import * as trpcExpress from "@trpc/server/adapters/express";

import { appRouter } from "../../packages/trpc/server";

const app = express();

app.use(
  "/trpc",
  trpcExpress.createExpressMiddleware({
    router: appRouter,
  })
);

app.listen(3000, () => {
  console.log("API running");
});