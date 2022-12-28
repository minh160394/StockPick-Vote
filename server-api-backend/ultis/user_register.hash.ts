import { config } from "../config/config";
import  bcrypt from "bcrypt";
import { userRegister } from "../src/api/register/user_register.model";


// Create seperate hashing PASSWORD 
export async function bcryptHash(request:userRegister ){
    let hashedPassword = await bcrypt.hash(request.password, config.salt.saltround);
    return hashedPassword
}