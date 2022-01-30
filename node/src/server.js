import express from 'express';
import 'express-async-errors';
import 'dotenv/config';
import AppError from './modules/shared/errors/AppError';
import { routes } from './modules/shared/http/routes';

const app = express();

app.use(express.json());
app.use(routes);

app.use((err, request, response, _) => {
  console.error(err);

  if (err instanceof AppError) {
    return response.status(err.statusCode).json({
      status: err.statusCode,
      message: err.message,
    });
  }

  return response.status(500).json({
    status: 'error',
    message: 'Internal Server Error',
  });
});

app.listen(3000, () => console.log('Server is running on port 3000'));
