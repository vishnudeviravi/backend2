import express from 'express';
import multer from 'multer';

const router = express.Router();

router.post('/image', (req, res) => {
  res.status(201).json();
});

export default router;
