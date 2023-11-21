import express from 'express';
import { getDoctors } from '../controllers/doctorController.js';

const doctorRouter = express.Router();

doctorRouter.get('/', getDoctors);
doctorRouter.get("/:role", getDoctorsbyRole);

export default doctorRouter;
