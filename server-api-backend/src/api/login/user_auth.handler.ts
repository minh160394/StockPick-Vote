import {Request,Response, NextFunction } from "express";
import { userRegisterDb } from "../../db";
import { userlogin } from "./user_auth.model";
import jwt from 'jsonwebtoken';
import {config} from '../../../config/config';
import  bcrypt from "bcrypt";
import { ObjectId } from "mongodb";
import * as cookie from 'cookie';
export async function login(
    req:Request<userlogin> ,
    res:Response,
    next: NextFunction) 
{
    try{
        const {email, password} = req.body;
        const user = await userRegisterDb.findOne({email: email});  
        if(!user){
            res.status(400); 
            throw new Error("User does not exist");
        };
        const IfisMatch = await bcrypt.compareSync(password , user.password);
        if(IfisMatch){
           const token =  jwt.sign({id: user._id},config.secertkey.secert,{expiresIn:"10m"});
           user.password = "";
           res.setHeader('Set-Cookie', cookie.serialize('stockpicker', token));
           res.json({token});
           res.end();
        }else{
            res.status(400);
            throw new Error("Password is not correct!");
           
        }
    }catch(error){
        res.send(error);
    }
}

export async function userProfile(
    req:Request,
    res:Response,
    next: NextFunction) 
{
    const {id} = req.body.user;
    const user = await userRegisterDb.findOne({_id: new ObjectId(id)});
    res.json(user)
}