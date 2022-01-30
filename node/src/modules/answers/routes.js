import { Router } from 'express';
import { AnswerController } from './controller/AnswerController';

const answerRoutes = Router();

const answerController = new AnswerController();

answerRoutes.post('/', answerController.create);
answerRoutes.put('/:answerId', answerController.update);
answerRoutes.get('/:answerId', answerController.show);
answerRoutes.get('/', answerController.index);
answerRoutes.delete('/:answerId', answerController.destroy);

export { answerRoutes };
