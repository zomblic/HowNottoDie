import express from 'express';
import dotenv from 'dotenv';
import authRoutes from './auth-routes';
import userRoutes from './user-routes';
import sequelize from './connection';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use('/auth', authRoutes);
app.use('/users', userRoutes);

sequelize.sync().then(() => {
  app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
});