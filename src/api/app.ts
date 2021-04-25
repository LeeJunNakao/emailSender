import express from 'express';
import { setupMiddleware } from './config/middlewares';
import { registerRoutes } from './routes/router';

const app = express();

setupMiddleware(app);
registerRoutes(app);

export default app;
