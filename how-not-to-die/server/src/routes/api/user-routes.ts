//file path: HowNotToDieDemo/how-not-to-die/server/src/routes/api/user-routes.ts
import { Request, Response } from 'express';
import express from 'express';
import User from '../../models/user.js';
import { verifyToken } from '../../middleware/auth.js';

const router = express.Router();

router.get('/', verifyToken, async (_req: Request, res: Response) => {
  const users = await User.findAll();
  res.json(users);
});


router.get('/:id', verifyToken, async (req: Request, res: Response) => {
  const user = await User.findByPk(req.params.id);
  if (user) {
    res.json(user);
  } else {
    res.status(404).json({ error: 'User not found' });
  }
});

export default router;
