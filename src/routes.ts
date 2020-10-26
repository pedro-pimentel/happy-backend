import { Router } from 'express';
import multer from 'multer';
import cors from 'cors';

import OrphanagesController from './controllers/OrphanagesControllers';
import uploadConfig from './config/upload';

var corsOptions = {
    origin: 'https://happy-web-deploy.netlify.app/',
    optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
}

const routes = Router();
const upload = multer(uploadConfig);

routes.get('/orphanages', cors(corsOptions), OrphanagesController.index);
routes.get('/orphanages/:id', OrphanagesController.show);
routes.post('/orphanages', upload.array('images'),OrphanagesController.create);

export default routes;