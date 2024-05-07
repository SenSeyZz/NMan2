const express = require('express');
const bodyParser = require('body-parser');
const { Pool } = require('pg');
const cors = require('cors');
require('dotenv').config();

const app = express();
const port = process.env.PORT || 3001;

app.use(bodyParser.json());
app.use(cors());

const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
  ssl: {
    rejectUnauthorized: false
  }
})

pool.connect((err, client, release) => {
  console.log(process.env.DB_PASSWORD);
  console.log(process.env.DATABASE_URL); 
  if (err) {
    console.error('Error connecting to the database:', err.message);
  } else {
    console.log('Connected to the database');
    release(); // Release the client back to the pool
  }
});

// API endpoint to add a new row
app.post('/api/addRow', async (req, res) => {
  try {
    const dataArray = req.body;
    const insertQueries = dataArray.map(({ first_name, birth_year, nationality, boobs, ass, bj_quality, intelligence, where_you_met, quality_of_the_sex, complicity, special_physical_trait, global_grade, Creator }) => {
      return pool.query(`
        INSERT INTO man_table (first_name, birth_year, nationality, boobs, ass, bj_quality, intelligence, where_you_met, quality_of_the_sex, complicity, special_physical_trait, global_grade, creator)
        VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13)
      `, [first_name, birth_year, nationality, boobs, ass, bj_quality, intelligence, where_you_met, quality_of_the_sex, complicity, special_physical_trait, global_grade, Creator]);
    });

    await Promise.all(insertQueries);

    res.status(201).send('Rows added successfully');
  } catch (error) {
    console.error('Error adding rows:', error);
    res.status(500).send('Internal server error');
  }
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});

app.get('/api/maxData', async (req, res) => {
    try {
      // Fetch data from the database (example using pg library)
      const result = await pool.query('SELECT * FROM man_table WHERE creator = $1;', ['Max']);
      res.json(result.rows);
    } catch (error) {
      console.error('Error fetching Max data:', error);
      res.status(500).json({ message: 'Internal server error' });
    }
  });

app.get('/api/sashaData', async (req, res) => {
    try {
      // Fetch data from the database (example using pg library)
      const result = await pool.query('SELECT * FROM man_table WHERE creator = $1;', ['Sasha']);
      res.json(result.rows);
    } catch (error) {
      console.error('Error fetching Max data:', error);
      res.status(500).json({ message: 'Internal server error' });
    }
  });

app.get('/api/paulData', async (req, res) => {
    try {
      // Fetch data from the database (example using pg library)
      const result = await pool.query('SELECT * FROM man_table WHERE creator = $1;', ['Paul']);
      res.json(result.rows);
    } catch (error) {
      console.error('Error fetching Max data:', error);
      res.status(500).json({ message: 'Internal server error' });
    }
  });
