import { Router } from 'express';
import { categoriesRouter } from './categories.routes';
import { home } from './home.routes';
import { specificationsRouter } from './specification.route';

const router = Router();

router.use('/categories', categoriesRouter);
router.use('/specifications', specificationsRouter);
router.use('/', home);

export { router };