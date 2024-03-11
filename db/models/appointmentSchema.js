import { Schema, model } from 'mongoose';

const schema = Schema(
  {
    slot: {
      type: Schema.Types.ObjectId,
      ref: 'Slot',
    },
    doctor: {
      type: Schema.Types.ObjectId,
      ref: 'Doctor',
    },
    user: {
      type: Schema.Types.ObjectId,
      ref: 'User',
    },
    status: {
      type: String,
      enum: ['BOOKED', 'DONE', 'CANCELLED'],
      default: 'BOOKED',
    },
  },
  { timestamps: true }
);
const Appointment = model('Appointment', schema);
export default Appointment;
