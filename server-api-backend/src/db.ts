import { MongoClient } from 'mongodb';
import { config } from './../config/config';
import { userRegister } from './api/register/user_register.model';
export const client = new MongoClient(config.mongo.url);
export const db = client.db();
export const userRegisterDb = db.collection<userRegister>('ACusers');
