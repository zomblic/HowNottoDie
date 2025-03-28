//Johnnie's code - needs review
import { Router } from 'express';
import userRouter from './user-routes.js'; // Use default import for userRouter

const router = Router();

router.use('/users', userRouter);

export default router;


// import { Router } from 'express';
// import { userRouter } from './user-routes.js';

// const router = Router();

// router.use('/users', userRouter);

// export default router;
