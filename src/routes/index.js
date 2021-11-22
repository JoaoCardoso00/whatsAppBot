import { Router } from 'express';
import ResponseRoutes from './response.js';

const routes = Router();

routes.use('/response', ResponseRoutes);

export default routes;