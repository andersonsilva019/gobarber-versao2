import { startOfHour } from 'date-fns';
import Appointment from '../models/Appointments';
import AppointmentRepository from '../repositories/AppointmentRepository';

interface Request {
  provider: string;
  date: Date;
}

class CreateAppointmentServices {
  private appointmentsRepository: AppointmentRepository;

  constructor(appointmentsRepository: AppointmentRepository) {
    this.appointmentsRepository = appointmentsRepository;
  }

  public execute(data: Request): Appointment {
    const { provider, date } = data;

    const appointmentDate = startOfHour(date);
    const existAppointment = this.appointmentsRepository.findByDate(
      appointmentDate,
    );

    if (existAppointment) {
      throw new Error('Agendamento já existe');
    }

    const appointment = this.appointmentsRepository.create({
      provider,
      date: appointmentDate,
    });

    return appointment;
  }
}

export default CreateAppointmentServices;
