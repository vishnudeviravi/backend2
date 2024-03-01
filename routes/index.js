import express from 'express';
import departmentRoutes from './department/index.js';
import imageRoutes from './image/index.js';

const router = express.Router();

router.use('/department', departmentRoutes);
router.use('/upload', imageRoutes);

export default router;
