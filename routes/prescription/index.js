import express from 'express';
import Prescription from '../../db/models/prescriptionSchema.js';

const router = express.Router();

// crud and by id

// list by appointment

router.get('/appointment/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const prescription = await Prescription.find({ appointment: id });
    res.status(200).json(prescription);
  } catch (e) {
    res.status(500).json(e);
  }
});

export default router;
