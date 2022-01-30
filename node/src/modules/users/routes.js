import { Router } from 'express';
import { CreateUserController } from './controllers/UserController';
import { AuthenticateUserController } from './controllers/AuthenticateUserController';
import ensureAuthenticated from './middleware/ensureAuthenticate';

const userRoutes = Router();

const createUserController =  new CreateUserController();
const authenticateUserController =  new AuthenticateUserController();

userRoutes.post('/', createUserController.create);
userRoutes.post('/authenticate', authenticateUserController.handle);

userRoutes.use(ensureAuthenticated);

userRoutes.delete('/', createUserController.destroy);
userRoutes.get('/', createUserController.show);
userRoutes.put('/', createUserController.update);


export { userRoutes };
