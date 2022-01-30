import express from 'express';
import { routes } from './modules/shared/http/routes';
import AppError from './modules/shared/errors/appError';

const app = express();

app.use(express.json());

app.use(routes);

app.use((err, request, response, _) => {
  console.error('aaa', err);
  if (err instanceof AppError) {
    return response.status(err.statusCode).json({
      status: 'error',
      message: err.message,
    });
  }

  return response.status(500).json({
    status: 'error',
    message: 'Internal Server Error',
  });
});

app.listen(3000, () => console.log('Server is running'));
