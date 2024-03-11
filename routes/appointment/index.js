import express from 'express';
import Appointment from '../../db/models/appointmentSchema.js';
import Slot from '../../db/models/slotSchema.js';
import checkToken from '../../middlewares/checkToken.js';

const router = express.Router();

//list appointment  by id
router.get('/detail/:id', checkToken(['DOCTOR', 'USER']), async (req, res) => {
  const { id } = req.params;
  const appointments = await Appointment.findById(id);
  res.status(200).json(appointments);
});

// list appointment by doctorid
router.get('/doctor/:id', checkToken(['DOCTOR']), async (req, res) => {
  const { id } = req.params;
  const appointments = await Appointment.find({ doctor: id });
  res.status(200).json(appointments);
});

// list appointment by userid
router.get('/user/:id', checkToken(['USER']), async (req, res) => {
  const { id } = req.params;
  const appointments = await Appointment.find({ user: id });
  res.status(200).json(appointments);
});

//take appointment
router.post('/', checkToken(['USER']), async (req, res) => {
  const body = { ...req.body };
  const slot = await Slot.findByIdAndUpdate(body.slot, { status: 'BOOKED' });
  const appointment = await Appointment.create(body);
  res.status(201).json({ message: 'Appointment has been taken' });
});

//cancel appointment
router.patch(
  '/cancel/:id',
  checkToken(['USER', 'DOCTOR']),
  async (req, res) => {
    const { id } = req.params;
    const body = { ...req.body };
    const slot = await Slot.findByIdAndUpdate(body.slot, { status: 'FREE' });
    const appointment = await Appointment.findByIdAndUpdate(id, {
      status: 'CANCELLED',
    });
    res.status(200).json({ message: 'Appointment has been cancelled' });
  }
);

export default router;
