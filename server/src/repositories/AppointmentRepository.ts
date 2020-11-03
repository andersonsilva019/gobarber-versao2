import { EntityRepository, Repository } from 'typeorm';
import Appointment from '../models/Appointments';

@EntityRepository(Appointment)
class AppointmentRepository extends Repository<Appointment> {
  public async findByDate(date: Date): Promise<Appointment | null> {
    const foundAppointment = await this.findOne({ where: { date } });

    return foundAppointment || null;
  }

  public async exists(date: Date) {
    const howManyExists = await this.count({ where: { date } });
    return howManyExists > 0;
  }
}

export default AppointmentRepository;
