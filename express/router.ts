import {Router} from 'express';
import {Controller} from './controller';

let router = Router();
router.get('/',Controller.getAlo);
router.get('/:nome',Controller.getAloNome);
router.post('/',Controller.postAlo);

export {router};