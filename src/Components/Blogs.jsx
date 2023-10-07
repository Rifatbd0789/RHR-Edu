import { useLoaderData } from "react-router-dom";
import Navbar from "./Navbar";
import Blog from "./Blog";

const Blogs = () => {
  const datas = useLoaderData();
  console.log(datas);
  return (
    <div>
      <div>
        <Navbar></Navbar>
      </div>
      <div className="bg-base-200">
        <p className="text-5xl font-bold p-10 text-center underline text-[#135e8a]">
          Web Magazine
        </p>
        <div className="mx-5">
          {datas.map((data) => (
            <Blog key={data.id} data={data}></Blog>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Blogs;
