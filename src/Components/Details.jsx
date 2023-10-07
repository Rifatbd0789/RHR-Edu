import { useLoaderData, useParams } from "react-router-dom";
import Navbar from "./Navbar";

const Details = () => {
  const { id } = useParams();
  const datas = useLoaderData();
  const dublicate = datas.find((data) => data.id === id);
  const { name, price, details, image } = dublicate;
  return (
    <div>
      <div className="sticky top-0 z-10">
        <Navbar></Navbar>
      </div>
      <div className="hero w-full md:py-20  md:bg-base-200">
        <div className="hero-content flex-col lg:flex-row md:mx-20 gap-5">
          <div>
            <img
              src={image}
              className="max-w-sm md:max-w-md lg:max-w-lg rounded-lg shadow-2xl"
            />
          </div>
          <div className="w-full text-center lg:text-left">
            <h1 className="text-5xl font-bold">{name}</h1>
            <p className="py-6">{details}</p>
            <p className="pb-6 font-bold">Price: {price} $</p>
            <button className="btn btn-primary">Join Now</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Details;
