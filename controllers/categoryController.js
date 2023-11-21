import Category from "../models/category.js";


const getCategory = async (req, res)=> {
  let category;
  try {
    category = await Category.find();
    res.status(200).json({ status: 200, category });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};


export { getCategory };