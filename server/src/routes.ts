import express, { Request, Response } from 'express';

import PointsController from '../src/controllers/PointsController'

import ItensController from '../src/controllers/ItensController'

const routes = express.Router();

const pointsController = new PointsController();

const itensController = new ItensController();

routes.get('/itens', itensController.index);

routes.post('/points', pointsController.create);

routes.get('/points/:id', pointsController.show);

routes.get('/points', pointsController.index);

export default routes;