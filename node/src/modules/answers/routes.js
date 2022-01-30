import { celebrate, Joi, Segments } from 'celebrate';
import { Router } from 'express';
import ensureAuthenticated from '../users/middleware/ensureAuthenticate';
import { AnswerController } from './controller/AnswerController';

const answerRoutes = Router();

const answerController = new AnswerController();

answerRoutes.use(ensureAuthenticated);

answerRoutes.post(
  '/',
  celebrate({
    [Segments.BODY]: {
      question_id: Joi.string().required().uuid(),
      optionA: Joi.string().required(),
      optionB: Joi.string().required(),
      optionC: Joi.string().required(),
      optionD: Joi.string().required(),
    },
  }),
  answerController.create
);

answerRoutes.put(
  '/:answerId',
  celebrate({
    [Segments.BODY]: {
      question_id: Joi.string().required().uuid(),
      optionA: Joi.string().required(),
      optionB: Joi.string().required(),
      optionC: Joi.string().required(),
      optionD: Joi.string().required(),
    },
    [Segments.PARAMS]: {
      answerId: Joi.string().required().uuid(),
    },
  }),
  answerController.update
);

answerRoutes.delete(
  '/:answerId',
  celebrate({
    [Segments.PARAMS]: {
      answerId: Joi.string().required().uuid(),
    },
  }),
  answerController.destroy
);

answerRoutes.get(
  '/question/:questionId',
  celebrate({
    [Segments.PARAMS]: {
      questionId: Joi.string().required().uuid(),
    },
  }),
  answerController.indexByQuestion
);

answerRoutes.get(
  '/:answerId',
  celebrate({
    [Segments.PARAMS]: {
      answerId: Joi.string().required().uuid(),
    },
  }),
  answerController.show
);

answerRoutes.get('/', answerController.index);

export { answerRoutes };
