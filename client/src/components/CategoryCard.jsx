import { Link } from "react-router-dom";

const Category = (Category) => {
  const { description, image, title } = Category;
  const encodedRole = encodeURIComponent(title);
  return (
    <Link to={`/doctors/${encodedRole}`}>
      <div className="flex flex-col py-4 rounded-xl items-start w-[350px]  hover:scale-[1.01] duration-500 transition cursor-pointer">
        <img
          className=" h-[220px] rounded-md object-cover"
          src={image}
          alt="doctor"
        />
        <h1 className="text-2xl font-bold text-slate-700 tracking-wide hover:text-opacity-80">
          {title}
        </h1>
        <p className="text-md">{description}</p>
      </div>
    </Link>
  );
};

export default Category;