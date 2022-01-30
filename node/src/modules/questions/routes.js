import { celebrate, Joi, Segments } from 'celebrate';
import { Router } from 'express';
import ensureAuthenticated from '../users/middleware/ensureAuthenticate';
import { QuestionController } from './controller/QuestionController';

const questionRoutes = Router();

const questionController = new QuestionController();

questionRoutes.use(ensureAuthenticated);

questionRoutes.post(
  '/',
  celebrate({
    [Segments.BODY]: {
      quiz_id: Joi.string().required().uuid(),
      question: Joi.string().required(),
      image_url: Joi.string().required(),
      answer: Joi.string().required(),
    },
  }),
  questionController.create
);

questionRoutes.put(
  '/:questionId',
  celebrate({
    [Segments.BODY]: {
      quiz_id: Joi.string().required().uuid(),
      question: Joi.string().required(),
      image_url: Joi.string().required(),
      answer: Joi.string().required(),
    },
    [Segments.PARAMS]: {
      questionId: Joi.string().required().uuid(),
    },
  }),
  questionController.update
);

questionRoutes.delete(
  '/:questionId',
  celebrate({
    [Segments.PARAMS]: {
      questionId: Joi.string().required().uuid(),
    },
  }),
  questionController.destroy
);

questionRoutes.get(
  '/:questionId',
  celebrate({
    [Segments.PARAMS]: {
      questionId: Joi.string().required().uuid(),
    },
  }),
  questionController.show
);

questionRoutes.get(
  '/quiz/:quizId',
  celebrate({
    [Segments.PARAMS]: {
      quizId: Joi.string().required().uuid(),
    },
  }),
  questionController.indexByQuiz
);

questionRoutes.get('/', questionController.index);

export { questionRoutes };
