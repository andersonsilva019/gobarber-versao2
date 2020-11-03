import { startOfHour } from 'date-fns';
import { getCustomRepository } from 'typeorm';
import AppointmentRepository from '../repositories/AppointmentRepository';

interface Request {
  provider: string;
  date: Date;
}

class CreateAppointmentServices {
  public async execute(data: Request) {
    const { provider, date } = data;
    const appointmentsRepository = getCustomRepository(AppointmentRepository);

    const appointmentDate = startOfHour(date);
    const existAppointment = await appointmentsRepository.exists(
      appointmentDate,
    );

    if (existAppointment) {
      throw new Error('Agendamento já existe');
    }

    const appointment = appointmentsRepository.create({
      provider,
      date: appointmentDate,
    });

    await appointmentsRepository.save(appointment);

    return appointment;
  }
}

export default CreateAppointmentServices;
