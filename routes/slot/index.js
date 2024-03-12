import express from 'express';
import Slot from '../../db/models/slotSchema.js';
import checkToken from '../../middlewares/checkToken.js';

const router = express.Router();

//list slot by doctor
router.get('/doctor/:id', async (req, res) => {
  const { id } = req.params;
  const slots = await Slot.find({ doctor: id });
  res.status(200).json(slots);
});

//add slot by doctor
router.post('/doctor', async (req, res) => {
  const body = { ...req.body };
  const slot = await Slot.create(body);
  res.status(200).json(slot);
});

// edit slot by doctor
router.patch('/doctor/:slot_id', checkToken(['DOCTOR']), async (req, res) => {
  const { slot_id } = req.params;
  const body = { ...req.body };
  const slot = await Slot.findByIdAndUpdate(slot_id, { ...body });
  res.status(200).json({ message: 'Slot updated' });
});

export default router;
