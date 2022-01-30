import { celebrate, Joi, Segments } from 'celebrate';
import { Router } from 'express';
import ensureAuthenticated from '../users/middleware/ensureAuthenticate';
import { QuizController } from './controller/QuizController';

const quizRoutes = Router();

const quizController = new QuizController();

quizRoutes.use(ensureAuthenticated);

quizRoutes.post(
  '/',
  celebrate({
    [Segments.BODY]: {
      topic_id: Joi.string().required(),
      title: Joi.string().required(),
      level: Joi.number().required().positive().integer(),
    },
  }),
  quizController.create
);

quizRoutes.put(
  '/:quizId',
  celebrate({
    [Segments.BODY]: {
      topic_id: Joi.string().required(),
      title: Joi.string().required(),
      level: Joi.number().required().positive().integer(),
    },
    [Segments.PARAMS]: {
      quizId: Joi.string().required().uuid(),
    },
  }),
  quizController.update
);

quizRoutes.get(
  '/topic/:topic_id',
  celebrate({
    [Segments.PARAMS]: {
      topic_id: Joi.string().required().uuid(),
    },
  }),
  quizController.indexByTopic
);

quizRoutes.get(
  '/:quizId',
  celebrate({
    [Segments.PARAMS]: {
      quizId: Joi.string().required().uuid(),
    },
  }),
  quizController.show
);

quizRoutes.get('/', quizController.index);

quizRoutes.delete(
  '/:quizId',
  celebrate({
    [Segments.PARAMS]: {
      quizId: Joi.string().required().uuid(),
    },
  }),
  quizController.destroy
);

export { quizRoutes };
