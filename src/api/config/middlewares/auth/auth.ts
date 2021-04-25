import { Request, Response, NextFunction } from 'express';
import { notAuthorizedError } from '../../../helper/handleError';

export const auth = (req: Request, res: Response, next: NextFunction): void => {
  const secretKey = req.headers.secret_key;
  if (secretKey === process.env.SECRET_KEY) next();
  else {
    const { status, body } = notAuthorizedError();
    res.status(status).send(body);
  }
};
