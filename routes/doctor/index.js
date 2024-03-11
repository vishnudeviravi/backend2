import express from 'express';
import Doctor from '../../db/models/doctorSchema.js';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

const router = express.Router();

router.post('/signup', async (req, res) => {
  const body = { ...req.body };

  const doctor = await Doctor.findOne({ email: body.email });
  if (doctor) {
    return res.status(400).json({ error: 'Email already exist' });
  }
  if (body.password != body.confirmPassword) {
    return res.status(400).json({ error: 'Passwords dont match' });
  }

  const hashedPassword = await bcrypt.hash(body.password, 2);
  body.password = hashedPassword;

  const newDoctor = await Doctor.create(body);
  return res
    .status(201)
    .json({ message: 'Signup successfull', doctor: newDoctor });
});
router.post('/login', async (req, res) => {
  const body = { ...req.body };
  const doctor = await Doctor.findOne({ email: body.email });
  if (!doctor) {
    return res.status(403).json({ error: 'Email or Password incorrect' });
  }
  const isMatching = await bcrypt.compare(body.password, doctor.password);
  if (!isMatching) {
    return res.status(403).json({ error: 'Email or Password incorrect' });
  }
  const key = process.env.SECRET_KEY;
  const token = jwt.sign({ role: 'DOCTOR', id: doctor._id }, key, {
    expiresIn: '10d',
  });

  res.status(200).json({ message: 'Login successfull', token: token });
});

router.get('/department/:id', async (req, res) => {
  const { id } = req.params;
  const doctors = await Doctor.find({ department: id });
  res.status(200).json(doctors);
});

router.patch('/profile/:id', async (req, res) => {
  const { id } = req.params;
  const body = { ...req.body };
  const doctor = await Doctor.findByIdAndUpdate(id, body);
  res.status(200).json({ message: 'Doctor updated' });
});

export default router;
