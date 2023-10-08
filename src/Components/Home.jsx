import { useLoaderData } from "react-router-dom";
import Navbar from "./Navbar";
import Card from "./Card";
import Banner from "./Banner";
import Footer from "./Footer";
import Experts from "./Experts";
import Whychoose from "./Whychoose";

const Home = () => {
  const datas = useLoaderData();
  return (
    <div>
      <div>
        <Navbar></Navbar>
      </div>
      <Banner></Banner>
      {/* Card Section */}
      <div data-aos="fade-up" data-aos-duration="2000">
        <p className="font-bold text-5xl mt-10 mx-20 text-center">
          Our Services
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4  gap-10 my-10 mx-5">
        {datas.map((data) => (
          <Card key={data.id} data={data}></Card>
        ))}
      </div>
      <hr />
      <div>
        <Experts></Experts>
      </div>
      <div>
        <Whychoose></Whychoose>
      </div>
      {/* Footer Section */}
      <Footer></Footer>
    </div>
  );
};

export default Home;
