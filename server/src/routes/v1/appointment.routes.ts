import { Router } from 'express';
import { parseISO } from 'date-fns';
import AppointmentRepository from '../../repositories/AppointmentRepository';
import CreateAppointmentServices from '../../services/CreateAppointmentServices';

const appointmentsRouter = Router();
const appointmentsRepository = new AppointmentRepository();

appointmentsRouter.get('/', (request, response) => {
  const appointments = appointmentsRepository.all();
  return response.json(appointments);
});

appointmentsRouter.post('/', (request, response) => {
  try {
    const { provider, date } = request.body;

    const parseDate = parseISO(date);

    const createAppointmentServices = new CreateAppointmentServices(
      appointmentsRepository,
    );
    const appointment = createAppointmentServices.execute({
      provider,
      date: parseDate,
    });

    return response.json(appointment);
  } catch (error) {
    return response.status(400).json({ message: error.message });
  }
});

export default appointmentsRouter;
