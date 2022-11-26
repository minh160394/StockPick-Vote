import { AnyZodObject } from "zod";

export interface requestValidator {
  params?: AnyZodObject;
  body?: AnyZodObject;
  query?: AnyZodObject;
}
