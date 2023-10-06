import { useLoaderData, useParams } from "react-router-dom";

const Details = () => {
  const { id } = useParams();
  const datas = useLoaderData();
  const dublicate = datas.find((data) => data.id === id);
  const { name, price, details, image } = dublicate;
  return (
    <div>
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col lg:flex-row mx-20 gap-5">
          <div>
            <img src={image} className="max-w-md rounded-lg shadow-2xl" />
          </div>
          <div className="w-full ">
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
