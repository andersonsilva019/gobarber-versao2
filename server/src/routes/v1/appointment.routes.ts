import { Router } from 'express';
import { startOfHour, parseISO } from 'date-fns';
import AppointmentRepository from '../../repositories/AppointmentRepository';

const appointmentsRouter = Router();
const appointmentsRepository = new AppointmentRepository();

appointmentsRouter.get('/', (request, response) => {
  const appointments = appointmentsRepository.all();
  return response.json(appointments);
});

appointmentsRouter.post('/', (request, response) => {
  const { provider, date } = request.body;

  const parseDate = startOfHour(parseISO(date));
  const existAppointment = appointmentsRepository.findByDate(parseDate);

  if (existAppointment) {
    return response.status(409).json({ message: 'Agendamento já existe' });
  }

  const appointment = appointmentsRepository.create({
    provider,
    date: parseDate,
  });
  return response.json(appointment);
});

export default appointmentsRouter;
