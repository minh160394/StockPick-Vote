import { MongoClient } from 'mongodb';
import { config } from './../config/config';
export const client = new MongoClient(config.mongo.url);
export const db = client.db();
