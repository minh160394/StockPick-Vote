import {Router} from 'express';
import { validateRequest } from '../../middlewares';
import * as UserHandler from './user_register.handler';
import { userRegister } from './user_register.model';
const route = Router();
// Before http request goes in USERHANDLER , set up validateRq for body parm or query , then call function handler create account 
route.post("/",validateRequest({body: userRegister}) ,UserHandler.createAccount);

export default route;