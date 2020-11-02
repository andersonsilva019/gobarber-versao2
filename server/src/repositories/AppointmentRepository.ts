import { isEqual } from 'date-fns';
import Appointment from '../models/Appointments';

interface CreateAppointmentDTO {
  provider: string;
  date: Date;
}

class AppointmentRepository {
  private appointments: Array<Appointment>;

  constructor() {
    this.appointments = [];
  }

  public create(data: CreateAppointmentDTO) {
    const appointment = new Appointment(data);

    this.appointments.push(appointment);

    return appointment;
  }

  public findByDate(date: Date): Appointment | null {
    const foundAppointment = this.appointments.find((appointment) =>
      isEqual(date, appointment.date),
    );

    return foundAppointment || null;
  }

  public all() {
    return this.appointments;
  }
}

export default AppointmentRepository;
