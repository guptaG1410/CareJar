import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import categoryRouter from './routes/categoryRoute.js';
import doctorRouter from './routes/doctorRoute.js';
// import Category from './models/category.js';
import Doctor from './models/doctor.js';
// import { categories } from './data/index.js';
import { doctors } from './data/index.js';
import dotenv from 'dotenv';
dotenv.config()

const app = express();
const PORT = process.env.PORT || 9000;

app.use(cors());
app.use(express.json());

app.use('/doctors', doctorRouter);
app.use('/category', categoryRouter);

// MONGODB SETUP
mongoose
  .connect(process.env.MONGODB_URI)
  .then(
    app.listen(PORT, () => {
      console.log(`Server is running at port ${PORT}`);

       // ADD ONLY ONE TIME WHILE FEEDING MONGODB DATA //
        // Category.insertMany(categories);
        Doctor.insertMany(doctors);
    })
  )
  .catch((err) => {
    console.log(`Server didn't connect ! Err:${err}`);
  });
