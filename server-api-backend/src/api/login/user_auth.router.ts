import {Router} from 'express';
import {verifyToken } from '../../middlewares';
import * as userHander from './user_auth.handler';

const route_login = Router();
// Before http request goes in USERHANDLER , set up validateRq for body parm or query , then call function handler create account 
route_login.post("/", userHander.login );
route_login.get("/profile",verifyToken,userHander.userProfile );

export default route_login;