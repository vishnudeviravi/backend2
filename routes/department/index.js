import express from 'express';

const router = express.Router();

router.get('/data', (req, res) => {
  try {
    res.status(200).json({ message: 'DATA PAGE' });
  } catch (e) {
    res.status(500).json(e);
  }
});

router.post('/data', (req, res) => {
  try {
    res.status(200).json({ message: 'POST PAGE' });
  } catch (e) {
    res.status(500).json(e);
  }
});

export default router;
