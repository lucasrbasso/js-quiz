import { Router } from 'express';
import ensureAuthenticated from '../users/middleware/ensureAuthenticate';
import { AnswerController } from './controller/AnswerController';

const answerRoutes = Router();

const answerController = new AnswerController();

answerRoutes.use(ensureAuthenticated);

answerRoutes.post('/', answerController.create);
answerRoutes.put('/:answerId', answerController.update);
answerRoutes.delete('/:answerId', answerController.destroy);
answerRoutes.get('/question/:questionId', answerController.indexByQuestion);
answerRoutes.get('/:answerId', answerController.show);
answerRoutes.get('/', answerController.index);

export { answerRoutes };
