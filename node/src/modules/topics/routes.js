import { Router } from 'express';
import ensureAuthenticated from '../users/middleware/ensureAuthenticate';
import { TopicController } from './controller/TopicController';

const topicRoutes = Router();

const topicController = new TopicController();

topicRoutes.use(ensureAuthenticated);

topicRoutes.post('/', topicController.create);
topicRoutes.get('/:topicId', topicController.show);
topicRoutes.put('/:topicId', topicController.update);
topicRoutes.delete('/:topicId', topicController.destroy);
topicRoutes.get('/', topicController.index);

export { topicRoutes };
