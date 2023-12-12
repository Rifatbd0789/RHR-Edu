import { useLoaderData } from "react-router-dom";
import Navbar from "./Navbar";

const MyClass = () => {
  const datas = useLoaderData();
  return (
    <div>
      <Navbar />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4  gap-8 my-10 mx-5">
        {datas.map((data) => (
          <>
            <div className="card w-64 bg-base-100 shadow-xl mx-auto border ">
              <figure>
                <img className="w-full h-44" src={data.image} alt="Shoes" />
              </figure>
              <div className="card-body gap-1 p-2 h-56">
                <h2 className="card-title font-bold">{data.name}</h2>

                <p>{data.shorts}</p>
                <p className=" font-medium">Price: {data.price}$</p>
                <hr />
                <div className="card-actions justify-center"></div>
              </div>
            </div>
          </>
        ))}
      </div>
    </div>
  );
};

export default MyClass;
