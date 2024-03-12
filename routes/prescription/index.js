import express from 'express';
import Prescription from '../../db/models/prescriptionSchema.js';
const router = express.Router();
//crud and by id
router.get('/', async (req, res) => {
  try {
    const prescriptions = await Prescription.find();
    res.status(200).json(prescriptions);
  } catch (e) {
    res.status(500).json(e);
  }
});
router.post('/', async (req, res) => {
  try {
    const prescription = await Prescription.create(req.body);
    res.status(200).json({ message: 'Prescription added', prescription });
  } catch (e) {
    res.status(500).json(e);
  }
});
router.get('/:id', async (req, res) => {
  const { id } = req.params;
  try {
    const prescription = await Prescription.findById(id);
    res.status(200).json(prescription);
  } catch (e) {
    res.status(500).json(e);
  }
});
router.patch('/:id', async (req, res) => {
  const { id } = req.params;
  try {
    const prescription = await Prescription.findByIdAndUpdate(id);
    res.status(200).json({ message: 'Prescription updated', prescription });
  } catch (e) {
    res.status(500).json(e);
  }
});
router.delete('/:id', async (req, res) => {
  const { id } = req.params;
  try {
    const prescription = await Prescription.findByIdAndDelete(id);
    res.status(200).json({ message: 'Prescription deleted', prescription });
  } catch (e) {
    res.status(500).json(e);
  }
});
//list by appointment
router.get('/appointment/:id', async (req, res) => {
  const { id } = req.params;
  try {
    const prescriptions = await Prescription.find({ appointment: id });
    res.status(200).json(prescriptions);
  } catch (e) {
    res.status(500).json(e);
  }
});
export default router;
