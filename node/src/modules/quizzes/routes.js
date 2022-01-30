import { Router } from 'express';
import { QuizController } from './controller/QuizController';

const quizRoutes = Router();

const quizController = new QuizController();

quizRoutes.post('/', quizController.create);
quizRoutes.put('/:quizId', quizController.update);
quizRoutes.get('/:quizId', quizController.show);
quizRoutes.get('/', quizController.index);
quizRoutes.delete('/:quizId', quizController.destroy);

export { quizRoutes };
