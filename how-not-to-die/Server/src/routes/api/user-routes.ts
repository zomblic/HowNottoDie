//Johnny's code - needs review
import express from 'express';
import User from '../../models/user.js'; // Correctly import the User model

const router = express.Router();

router.post('/users', async (req, res) => {
  try {
    const { username, email } = req.body; // Get user input from the request body
    const newUser = await User.create({ username, email }); // Save to the database
    res.status(201).json(newUser); // Respond with the created user
  } catch (error) {
    res.status(500).json({ error: 'Failed to create user', details: error.message });
  }
});

export default router;



// import express from 'express';
// import User from './user';
// import { verifyToken } from './auth';

// const router = express.Router();

// router.get('/', async (req, res) => {
//   const users = await User.findAll();
//   res.json(users);
// });

// router.get('/:id', async (req, res) => {
//   const user = await User.findByPk(req.params.id);
//   if (user) {
//     res.json(user);
//   } else {
//     res.status(404).json({ error: 'User not found' });
//   }
// });

// export default router;