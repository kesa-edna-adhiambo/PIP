class AppointmentScheduler {
    constructor() {
      this.appointments = [];
    }
    addAppointment(doctorAvailability, patientPreference) {
      const availableTime = doctorAvailability.find(time => patientPreference.includes(time));
      if (availableTime) {
        const appointment = {
          doctor: 'Doctor',
          patient: 'Patient',
          time: availableTime
        };
        this.appointments.push(appointment);
        this.sendReminder(appointment);
        console.log(`Appointment scheduled for ${availableTime}.`);
      } else {
        console.log('No matching availability found.');
      }
    }
    sendReminder(appointment) {
      console.log(`Reminder sent for appointment at ${appointment.time}.`);
    }
  }
  const scheduler = new AppointmentScheduler();
  const doctorAvailability = ['10:00', '11:00', '14:00'];
  const patientPreference = ['11:00', '15:00'];
  scheduler.addAppointment(doctorAvailability, patientPreference);

// class AppointmentScheduler {
//     constructor() {
//       this.appointments = [];
//     }
//     addAppointment(doctorAvailability, patientPreference) {
//       const availableTime = doctorAvailability.find(time => patientPreference.includes(time));
//       if (availableTime) {
//         const appointment = {
//           doctor: 'Doctor',
//           patient: 'Patient',
//           time: availableTime
//         };
//         this.appointments.push(appointment);
//         this.sendReminder(appointment);
//         console.log(`Appointment scheduled for ${availableTime}.`);
//       } else {
//         console.log('No matching availability found.');
//       }
//     }
//     sendReminder(appointment) {
//       console.log(`Reminder sent for appointment at ${appointment.time}.`);
//     }
//   }
//   const scheduler = new AppointmentScheduler();
//   const doctorAvailability = ['10:00', '11:00', '14:00'];
//   const patientPreference = ['11:00', '15:00'];
//   scheduler.addAppointment(doctorAvailability, patientPreference);


//   class Doctor {
//     constructor(name, availability) {
//         this.name = name;
//         this.availability = availability; // This could be an array of time slots
//     }
// }
// class Patient {
//     constructor(name, preferredDoctors) {
//         this.name = name;
//         this.preferredDoctors = preferredDoctors; // This could be an array of doctor names
//     }
// }
// class Appointment {
//     constructor(doctor, patient, time) {
//         this.doctor = doctor;
//         this.patient = patient;
//         this.time = time;
//     }
//     sendReminder() {
//         console.log(`Reminder: Appointment for ${this.patient.name} with ${this.doctor.name} at ${this.time}`);
//     }
// }


// class Scheduler {
//     constructor() {
//         this.doctors = [];
//         this.patients = [];
//         this.appointments = [];
//     }
//     addDoctor(doctor) {
//         this.doctors.push(doctor);
//     }
//     addPatient(patient) {
//         this.patients.push(patient);
//     }
//     scheduleAppointment(doctorName, patientName, time) {
//         let doctor = this.doctors.find(doctor => doctor.name === doctorName);
//         let patient = this.patients.find(patient => patient.name === patientName);
//         if (doctor && patient && doctor.availability.includes(time)) {
//             let appointment = new Appointment(doctor, patient, time);
//             this.appointments.push(appointment);
//             console.log(`Appointment scheduled for ${patientName} with ${doctorName} at ${time}`);
//         } else {
//             console.log('Unable to schedule appointment');
//         }
//     }
//     sendReminders() {
//         this.appointments.forEach(appointment => appointment.sendReminder());
//     }
// }

