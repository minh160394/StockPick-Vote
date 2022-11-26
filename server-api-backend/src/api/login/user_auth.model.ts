import { z } from "zod";
import { W, WithId } from 'mongodb';

export const UserLogin = z.object({
    username: z.string().min(5,{message: "Please Enter Your Username"}),
    password: z.string().min(5,{message: "Please Enter Your Password"}),
});
export type UserLogin = z.infer<typeof UserLogin>;
export type UserLoginWithId = WithId<UserLogin>;