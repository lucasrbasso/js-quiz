import { Router } from 'express';
import ensureAuthenticated from '../users/middleware/ensureAuthenticate';
import { QuestionController } from './controller/QuestionController';

const questionRoutes = Router();

const questionController = new QuestionController();

questionRoutes.use(ensureAuthenticated);

questionRoutes.post('/', questionController.create);
questionRoutes.put('/:questionId', questionController.update);
questionRoutes.delete('/:questionId', questionController.destroy);
questionRoutes.get('/:questionId', questionController.show);
questionRoutes.get('/quiz/:quizId', questionController.indexByQuiz);
questionRoutes.get('/', questionController.index);

export { questionRoutes };
