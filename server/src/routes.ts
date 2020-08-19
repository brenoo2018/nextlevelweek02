import {Router} from 'express';

import * as ClassesController from './controllers/ClassesController';
import * as ConnectionsController from './controllers/ConnecttionsController';


const routes = Router();

routes.post('/classes', ClassesController.create);  
routes.get('/classes', ClassesController.index);

routes.post('/connections', ConnectionsController.create);
routes.get('/connections', ConnectionsController.index);

export default routes;