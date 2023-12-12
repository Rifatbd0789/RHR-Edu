import { useLoaderData } from "react-router-dom";
import Navbar from "./Navbar";
import { useContext } from "react";
import { context } from "../ContextProvider/Provider";

const MyClass = () => {
  const { user } = useContext(context);
  const LoadDatas = useLoaderData();
  const datas = LoadDatas.filter((data) => data.email === user.email);
  return (
    <div>
      <Navbar />
      {datas.length < 1 ? (
        <p className="text-center text-red-500 text-2xl md:text-4xl my-52">
          No Classes Available
        </p>
      ) : (
        datas.map((data) => (
          <div
            key={data._id}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4  gap-8 my-10 mx-5"
          >
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
          </div>
        ))
      )}
    </div>
  );
};

export default MyClass;
