import { useEffect, useState } from "react";
import Category from "../components/CategoryCard";
import axios from "axios";

const CategoryPage = () => {
  const [category, setCategory] = useState([]);
  const [loading, setLoading] = useState(true);
  const [blank, setBlank] = useState(false);
  const fetchCategory = async () => {
    try {
      const { data } = await axios.get(
        "/category"
      );
      if (data.category.length > 0) {
        setCategory(data.category);
        setBlank(false);
        setLoading(false);
      } else {
        console.log("No Category found");
        setLoading(false);
        setBlank(true);
      }
    } catch (err) {
      setLoading(false);
      console.log(err);
    }
  };
  useEffect(() => {
    fetchCategory();
  }, []);

  return (
    <div className="flex flex-col px-2 2xl:mt-[250px] justify-center items-center">
      <div className="flex flex-col items-start">
        <h1 className="font-bold tracking-wider  mb-1 text-3xl">
          Book an appointment for an in-clinic Consultation
        </h1>
        <h1 className="font-medium text-lg mb-3">
          Find experienced doctors across all the specialities
        </h1>

        {loading ? (
          <div className="mt-10 w-full flex flex-col items-center justify-center">
            <h1 className="text-xl font-semibold text-blue-500">Loading...</h1>
          </div>
        ) : (
          <div className="flex flex-row flex-wrap items-center justify-center gap-10 mb-10">
            {category.map((category, index) => {
              return <Category key={index} category={category} />;
            })}
          </div>
        )}
        {blank ? (
          <div className="h-screen flex items-center justify-center">
            <h1 className="font-bold text-2xl tracking-widest">
              No Categories found
            </h1>
          </div>
        ) : null}
      </div>
    </div>
  );
};

export default CategoryPage;