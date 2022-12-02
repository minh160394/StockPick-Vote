import { WithId } from 'mongodb';
import { z } from 'zod';
import { db } from '../../db';


// Create schema using zod 
export const userRegister = z.object({
  email: z.string().email({ message: 'Invalid email address' }).trim().min(5),
  password: z.string().min(5),
  confirmpassword:z.string().optional(),
  firstname: z.string().min(2, { message:'Firstname required' }),
  lastname: z.string().min(2, { message:'Lastname required' }),
  phone: z.number().min(10),
  activated: z.boolean().default(false),
});
// extract the infered type
export type userRegister = z.infer<typeof userRegister>;
// Add _id into Objects using mongo WithId
export type userRegisterWithId = WithId<userRegister>;
export const userRegisterDb = db.collection<userRegister>('ACusers');

