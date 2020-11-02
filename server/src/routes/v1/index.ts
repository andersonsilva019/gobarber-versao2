import { Router } from 'express';
import appointmentsRouter from './appointment.routes';

const v1 = Router();

v1.use('/appointments', appointmentsRouter);

export default v1;
