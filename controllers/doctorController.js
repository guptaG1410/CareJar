import Doctor from '../models/doctor.js';

const getDoctors = async (req, res) => {
  let doctors;
  try {
    doctors = await Doctor.find();
    res.status(200).json({ status: 200, doctors });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export { getDoctors };
