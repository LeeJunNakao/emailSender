import { Express } from 'express';
import dotenv from 'dotenv';
import { bodyParser } from './body-parser/body-parser';
import { contentType } from './content-type/content-type';
import { cors } from './cors/cors';
import { auth } from './auth/auth';

export const setupMiddleware = (app: Express): void => {
  dotenv.config();
  app.use(bodyParser);
  app.use(contentType);
  app.use(cors);
  app.use(auth);
};
