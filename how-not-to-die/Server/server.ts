import express from 'express';
import { Sequelize, DataTypes, Model } from 'sequelize';
//import cors from 'cors';

const app = express();
const PORT = 3001;

//app.use(cors());
app.use(express.json());

// Initialize Sequelize with PostgreSQL
const sequelize = new Sequelize('process.env.DB_NAME', 'process.env.DB_USER', 'process.env.DB_PASSWORD', {
  host: 'localhost',
  dialect: 'postgres',
});

// Define Planet model
class Planet extends Model {}
Planet.init(
  {
    planet_id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    planet_name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    flora_name: {
      type: DataTypes.STRING,
    },
    fauna_name: {
      type: DataTypes.STRING,
    },
    planet_description: {
      type: DataTypes.TEXT,
    },
    hostility: {
      type: DataTypes.STRING,
    },
    exploration: {
      type: DataTypes.STRING,
    },
  },
  {
    sequelize,
    modelName: 'Planet',
    tableName: 'planets',
    timestamps: false,
  }
);

// Test database connection
sequelize.authenticate()
  .then(() => console.log('Connected to PostgreSQL via Sequelize'))
  .catch((err) => console.error('Unable to connect to database:', err));

// API route to fetch planets
app.get('/api/planets', async (req, res) => {
  try {
    const planets = await Planet.findAll();
    res.json(planets);
  } catch (error) {
    console.error('Error fetching planets:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
