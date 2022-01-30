import { Router } from 'express';
import { QuestionController } from './controller/QuestionController';

const questionRoutes = Router();

const questionController = new QuestionController();

questionRoutes.post('/', questionController.create);
questionRoutes.put('/:questionId', questionController.update);
questionRoutes.get('/:questionId', questionController.show);
questionRoutes.get('/', questionController.index);
questionRoutes.delete('/:questionId', questionController.destroy);

export { questionRoutes };
