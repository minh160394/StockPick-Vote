import { z } from 'zod';
import { db } from '../../db';

export const userRegister = z.object({
  email: z.string().email({ message: 'Invalid email address' }).trim().min(5),
  password: z.string().min(5),
  confirmpassword:z.string().min(5),
  firstname: z.string().min(2, { message:'Firstname required' }),
  lastname: z.string().min(2, { message:'Lastname required' }),
  phone: z.number().min(10),
  activated: z.boolean().default(false),
});
export type userRegister = z.infer<typeof userRegister>;
export const userRegisterDb = db.collection<userRegister>('ACusers');

