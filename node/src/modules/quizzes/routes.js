import { Router } from 'express';
import ensureAuthenticated from '../users/middleware/ensureAuthenticate';
import { QuizController } from './controller/QuizController';

const quizRoutes = Router();

const quizController = new QuizController();

quizRoutes.use(ensureAuthenticated);

quizRoutes.post('/', quizController.create);
quizRoutes.put('/:quizId', quizController.update);
quizRoutes.get('/topic/:topic_id', quizController.indexByTopic);
quizRoutes.get('/:quizId', quizController.show);
quizRoutes.get('/', quizController.index);
quizRoutes.delete('/:quizId', quizController.destroy);

export { quizRoutes };
