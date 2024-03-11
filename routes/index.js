import express from 'express';
import departmentRoutes from './department/index.js';
import imageRoutes from './image/index.js';
import prescriptionRoutes from './prescription/index.js';
import doctorRoutes from './doctor/index.js';
import appointmentRoutes from './appointment/index.js';
import slotRoutes from './slot/index.js';
import orderRoutes from './order/index.js';

const router = express.Router();

//authentication
router.use('/doctor', doctorRoutes);

router.use('/department', departmentRoutes);
router.use('/upload', imageRoutes);
router.use('/prescription', prescriptionRoutes);
router.use('/appointment', appointmentRoutes);
router.use('/slot', slotRoutes);
router.use('/order', orderRoutes);

export default router;
