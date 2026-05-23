import { router, publicProcedure } from "./trpc";
import { userService } from "./user.service";

export const userRouter = router({
  getUser: publicProcedure.query(() => {
    return userService.getUser();
  }),
});