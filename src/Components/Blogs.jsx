import { useLoaderData } from "react-router-dom";
import Navbar from "./Navbar";
import Blog from "./Blog";
import Footer from "./Footer";

const Blogs = () => {
  const datas = useLoaderData();
  return (
    <div>
      <div>
        <Navbar></Navbar>
      </div>
      <div className="bg-base-200">
        <div data-aos="fade-down" data-aos-duration="2000">
          <p className="text-4xl md:text-5xl font-bold p-10 text-center underline text-[#135e8a]">
            Web Magazine
          </p>
        </div>
        <div className="mx-5">
          {datas.map((data) => (
            <Blog key={data._id} data={data}></Blog>
          ))}
        </div>
        <Footer></Footer>
      </div>
    </div>
  );
};

export default Blogs;
