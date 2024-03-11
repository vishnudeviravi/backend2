import express from 'express';
import cors from 'cors';
import mongoose from './db/dbConnection.js';
import routes from './routes/index.js';
import dotenv from 'dotenv';

dotenv.config();

const app = express();

// middlewares
app.use(cors());
app.use(express.json());
app.use(express.static('uploads'));

// routes
app.use(routes);

app.use('*', (req, res) => {
  res.status(404).json({ message: 'No Route Found' });
});

app.listen(process.env.PORT, () => {
  console.log('App is Running @ http://localhost:4444/');
});
