import {Request,Response, NextFunction } from "express";
import MessageResponse from "../../interfaces/MessageResponse";
import { bcryptHash } from "./user_register.hash";
import { userRegister, userRegisterDb, userRegisterWithId } from "./user_register.model";


// AfTER req get validated , check user existence and store your data in MongoDB, res with message
export async function createAccount(
    req:Request<{},userRegisterWithId, userRegister>,
    res:Response<MessageResponse>,
    next:NextFunction
){
    try{
        const checkUserExist = await userRegisterDb.findOne({email:req.body.email})
        if(!checkUserExist){
            req.body.password = await bcryptHash(req.body);
            const insertResult = await userRegisterDb.insertOne(req.body);
            if(!insertResult.acknowledged) throw new Error ("Error Creating your account!");
            res.status(201).send({message:"Successful Created"});
        }
    }
    catch(error){
        next(error);
    }
}