import { Router } from 'express';
import { TopicController } from './controller/TopicController';

const topicRoutes = Router();

const topicController = new TopicController();

topicRoutes.post('/', topicController.create);
topicRoutes.get('/:topicId', topicController.show);
topicRoutes.put('/:topicId', topicController.update);
topicRoutes.get('/', topicController.index);
topicRoutes.delete('/:topicId', topicController.destroy);

export { topicRoutes };
