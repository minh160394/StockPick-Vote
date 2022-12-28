import { z } from "zod";


export const user_login = z.object({
    email: z.string().email({ message: 'Invalid email address' }).trim().min(5),
    password: z.string().min(5,{ message: 'Please enter your password'}),
})
export type userlogin = z.infer<typeof user_login>;

