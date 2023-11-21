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

const getDoctorsbyRole = async (req, res
) => {
  let doctorsbyrole;
  const role = req.params.role;
  const decodedRole = decodeURIComponent(role);
  try {
    doctorsbyrole = await Doctor.find({ role: decodedRole }).collation({
      locale: "en",
      strength: 2,
    });

    res.status(200).json({ status: 200, doctorsbyrole });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export { getDoctors, getDoctorsbyRole };
