import { NextFunction, Request, Response } from 'express';
import { ZodError } from 'zod';
import ErrorResponse from './interfaces/ErrorResponse';
import { requestValidator } from './interfaces/RequestValidator';

export function validateRequest(validator: requestValidator) {
  return async (req: Request, res: Response, next: NextFunction) => {
    try {
      //validate req params before going hanlder fun
      if (validator.params) {
        req.params = await validator.params.parseAsync(req.params);
      }
      //validate body params before going hanlder fun
      if (validator.body) {
        req.body = await validator.body.parseAsync(req.body);
      }
      //validate query params before going hanlder fun
      if (validator.query) {
        req.query = await validator.query.parseAsync(req.query);
      }
      //pass validation and call next() to push req to Handler
      next();
    } catch (error) {
      //Check if error is in Zoderror and res with status code
      if (error instanceof ZodError) {
        res.status(422);
      }
      //Call and pass error message to MiddleWare fun.
      console.log(error)
      next(error);
    }
  };
}


export function notFound(req: Request, res: Response, next: NextFunction) {
  res.status(404);
  const error = new Error(`🔍 - Not Found - ${req.originalUrl}`);
  next(error);
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export function errorHandler(err: Error, req: Request, res: Response<ErrorResponse>, next: NextFunction) {
  const statusCode = res.statusCode !== 200 ? res.statusCode : 500;
  res.status(statusCode);
  res.json({
    message: err.message,
    stack: process.env.NODE_ENV === 'production' ? '🥞' : err.stack,
  });
}
