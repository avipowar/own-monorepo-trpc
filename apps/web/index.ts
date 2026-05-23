import { createTRPCProxyClient, httpBatchLink } from "@trpc/client";

import type { AppRouter } from "../../packages/trpc/server";

const trpc = createTRPCProxyClient<AppRouter>({
  links: [
    httpBatchLink({
      url: "http://localhost:3000/trpc",
    }),
  ],
});

async function main() {
  const user = await trpc.user.getUser.query();

  console.log(user);
}

main();