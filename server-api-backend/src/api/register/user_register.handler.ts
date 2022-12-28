import {Request,Response, NextFunction } from "express";
import { userRegisterDb } from "../../db";
import MessageResponse from "../../interfaces/MessageResponse";
import { bcryptHash } from "../../../ultis/user_register.hash";
import { userRegister, userRegisterWithId } from "./user_register.model";

// AfTER req get validated , check user existence and store your data in MongoDB, res with message
export async function createAccount(
    req:Request<{},userRegisterWithId, userRegister>,
    res:Response<userRegisterWithId, MessageResponse>,
    next:NextFunction
){
    try{
        const checkUserExist = await userRegisterDb.findOne({email:req.body.email});
        if(!checkUserExist ){
            req.body.password = await bcryptHash(req.body);
            const insertResult = await userRegisterDb.insertOne(req.body);
            if(!insertResult.acknowledged) throw new Error ("Error Creating your account!");
            res.status(201);
            res.json({
                _id: insertResult.insertedId,
                ...req.body,
            });
            
        }else{
            res.status(400);
            throw new Error ("This email address is already associated with another account.")
        }
    }
    catch(error){
        res.status(500);
        next(error);
    }
}