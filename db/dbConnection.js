import mongoose from 'mongoose';

mongoose
  .connect('mongodb://localhost:27017/DoctorDB2')
  .then(() => {
    console.log('DB Connected');
  })
  .catch(e => {
    console.log(e);
  });

export default mongoose;
