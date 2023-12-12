import { useLoaderData, useParams } from "react-router-dom";
import Navbar from "./Navbar";
// import { toast } from "react-toastify";
import { context } from "../ContextProvider/Provider";
import { useContext } from "react";
import { toast } from "react-toastify";

const Details = () => {
  const { num } = useParams();
  const datas = useLoaderData();

  const { user } = useContext(context);
  const dublicate = datas.find((data) => data.num === num);

  const handleJoin = (joinDatas) => {
    const JoinedData = {
      name: joinDatas.name,
      price: joinDatas.price,
      details: joinDatas.details,
      image: joinDatas.image,
      shorts: joinDatas.shorts,
      email: user?.email,
    };
    console.log(JoinedData);
    fetch("https://rhr-edu-backend.vercel.app/addServices", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(JoinedData),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.insertedId) {
          toast("Your blog added successfully");
        }
      });
  };
  return (
    <div>
      <div className="sticky top-0 z-10">
        <Navbar></Navbar>
      </div>
      <div className="hero w-full py-10 md:py-20  bg-base-200">
        <div className="flex flex-col lg:flex-row mx-5 lg:mx-20 gap-5">
          <div>
            <img
              src={dublicate?.image}
              className="lg:max-w-lg rounded-lg shadow-2xl"
            />
          </div>
          <div className="w-full text-center lg:text-left">
            <h1 className="text-3xl md:text-5xl font-bold">
              {dublicate?.name}
            </h1>
            <p className="py-6">{dublicate?.details}</p>
            <p className="pb-6 font-medium">Price: {dublicate?.price} $</p>
            <button
              onClick={() => handleJoin(dublicate)}
              className="btn btn-primary bg-[#013E62] border-none text-white hover:bg-slate-400 hover:text-black"
            >
              Join Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Details;
