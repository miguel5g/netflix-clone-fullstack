import express, { type Express } from 'express';
import cors from 'cors';
import { routes } from './routes';

function appFactory(): Express {
  const app = express();

  app.use(cors({ origin: '*' }));
  app.use(express.json());
  app.use(routes);

  return app;
}

export { appFactory };
