import express from 'express';
import { Pool } from 'pg';

const app = express();
const pool = new Pool({
  user: 'your_db_user',
  host: 'localhost',
  database: 'planetary',
  password: 'your_db_password',
  port: 5432,
});

app.get('/api/planets', async (req, res) => {
  try {
    const result = await pool.query(`
      SELECT 
        planet.id AS planet_id, 
        planet.name AS planet_name, 
        planet.description AS planet_description, 
        planet.hostility, 
        planet.exploration,
        flora.name AS flora_name,
        fauna.name AS fauna_name
      FROM planet
      LEFT JOIN flora ON flora.planet_id = planet.id
      LEFT JOIN fauna ON fauna.planet_id = planet.id
    `);
    res.json(result.rows);
  } catch (err) {
    console.error(err);
    res.status(500).send('Server error');
  }
});

app.listen(3001, () => {
  console.log('Server running on http://localhost:3001');
});