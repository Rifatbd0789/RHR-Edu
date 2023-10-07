import { useLoaderData } from "react-router-dom";
import Navbar from "./Navbar";
import Card from "./Card";
import Banner from "./Banner";
import Foother from "./Foother";
import Experts from "./Experts";
import Whychoose from "./Whychoose";

const Home = () => {
  const datas = useLoaderData();
  return (
    <div>
      <Navbar></Navbar>
      <Banner></Banner>
      {/* Card Section */}
      <p className="font-bold text-5xl mt-10 mx-20 text-center">Our Services</p>
      <div className="grid grid-cols-4  gap-10 my-10 mx-5">
        {datas.map((data) => (
          <Card key={data.id} data={data}></Card>
        ))}
      </div>
      <div>
        <Experts></Experts>
      </div>
      <div>
        <Whychoose></Whychoose>
      </div>
      {/* Footer Section */}
      <Foother></Foother>
    </div>
  );
};

export default Home;
