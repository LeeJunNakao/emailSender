import { Express } from 'express';
import { routeAdapter } from './adapter';
import EmailManagerController from '../controllers/EmailManagerController';
import { Sender } from '../utils/Sender';

export const registerRoutes = (app: Express): void => {
  app.post('/', routeAdapter(new EmailManagerController(new Sender())));
};
