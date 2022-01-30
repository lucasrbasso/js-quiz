import { Router } from 'express';
import { CreateTopicController } from './modules/topics/controllers/CreateTopicController';

const router = Router();

router.get('/', (request, response) => {
  return response.json({
    message: 'Hello world',
  });
});

router.post('/topic', new CreateTopicController().handle);

export { router };
