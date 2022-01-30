import { Router } from 'express';

import { topicRoutes } from '../../topics/routes';
import { quizRoutes } from '../../quizzes/routes';
import { questionRoutes } from '../../questions/routes';
import { answerRoutes } from '../../answers/routes';

const routes = Router();

routes.use('/topics', topicRoutes);
routes.use('/quizzes', quizRoutes);
routes.use('/questions', questionRoutes);
routes.use('/answers', answerRoutes);

export { routes };
