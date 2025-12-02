require('dotenv').config();
const express = require('express');
const cors = require('cors');
const mysql = require('mysql2/promise');

const app = express();
app.use(cors());
app.use(express.json());

// Create a MySQL connection pool
const pool = mysql.createPool({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME
});

// Simple health check route
app.get('/', (req, res) => {
  res.send('API is running 🚀');
});

// GET /api/projects -> return all projects
app.get('/api/projects', async (req, res) => {
  try {
    const [rows] = await pool.query('SELECT * FROM projects ORDER BY created_at DESC');
    res.json(rows);
  } catch (error) {
    console.error('Error fetching projects:', error);
    res.status(500).json({ message: 'Error fetching projects' });
  }
});

// GET /api/profile -> return all profile
app.get('/api/certifications', async (req, res) => {
  try {
    const [rows] = await pool.query('SELECT * FROM certications');
    res.json(rows);
  } catch (error) {
    console.error('Error fetching profile:', error);
    res.status(500).json({ message: 'Error fetching profile' });
  }
});



const PORT = process.env.PORT || 5002;

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
