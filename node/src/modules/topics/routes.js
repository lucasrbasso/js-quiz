import { Router } from 'express';
import ensureAuthenticated from '../users/middleware/ensureAuthenticate';
import { TopicController } from './controller/TopicController';
import { celebrate, Segments, Joi } from 'celebrate';

const topicRoutes = Router();

const topicController = new TopicController();

topicRoutes.use(ensureAuthenticated);

topicRoutes.post(
  '/',
  celebrate({
    [Segments.BODY]: {
      title: Joi.string().required(),
      description: Joi.string().required(),
      image_url: Joi.string().required(),
    },
  }),
  topicController.create
);

topicRoutes.get(
  '/:topicId',
  celebrate({
    [Segments.PARAMS]: {
      topicId: Joi.string().required().uuid(),
    },
  }),
  topicController.show
);

topicRoutes.put(
  '/:topicId',
  celebrate({
    [Segments.BODY]: {
      title: Joi.string().required(),
      description: Joi.string().required(),
      image_url: Joi.string().required(),
    },
    [Segments.PARAMS]: {
      topicId: Joi.string().required().uuid(),
    },
  }),
  topicController.update
);

topicRoutes.delete(
  '/:topicId',
  celebrate({
    [Segments.PARAMS]: {
      topicId: Joi.string().required().uuid(),
    },
  }),
  topicController.destroy
);

topicRoutes.get('/', topicController.index);

export { topicRoutes };
