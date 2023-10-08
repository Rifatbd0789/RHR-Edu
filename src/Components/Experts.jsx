import Marquee from "react-fast-marquee";
import pic1 from "../assets/7074311_3554557.svg";
import pic2 from "../assets/image-from-rawpixel-id-44457-jpeg.jpg";
import pic3 from "../assets/image-from-rawpixel-id-2023808-png.png";
import pic4 from "../assets/image-from-rawpixel-id-44439-svg.svg";

const Experts = () => {
  return (
    <div>
      <div className="mb-8 mt-10" data-aos="fade-up" data-aos-duration="2000">
        <h1 className="text-center font-bold text-4xl md:text-5xl ">
          Our Experts
        </h1>
      </div>
      <div className="mx-5">
        <Marquee className="w-100%" speed={100} pauseOnHover>
          <div className="flex justify-center mb-10 p-10">
            {/* first experts */}
            <div className="mr-32 ">
              <div className="avatar w-48 mx-auto">
                <img className="rounded-full" src={pic1} alt="" />
              </div>
              <div className="text-center">
                <p className="font-medium text-xl">Mr. Rifat</p>
                <p>Best Web Developer of Our country</p>
              </div>
            </div>
            {/* second experts */}
            <div className="mr-32">
              <div className="avatar w-48 rounded-full ">
                <img className="rounded-full" src={pic2} alt="" />
              </div>
              <div className="text-center">
                <p className="font-medium text-xl">Mr. Rabby</p>
                <p>Best Photographer of Our country</p>
              </div>
            </div>
            {/* third experts */}
            <div className="mr-32">
              <div className="avatar w-48 rounded-full ">
                <img className="rounded-full" src={pic3} alt="" />
              </div>
              <div className="text-center">
                <p className="font-medium text-xl">Mr. Risam</p>
                <p>Best Designer of Our country</p>
              </div>
            </div>
            {/* fourth experts */}
            <div className="mr-32">
              <div className="avatar w-48 rounded-full ">
                <img className="rounded-full" src={pic4} alt="" />
              </div>
              <div className="text-center">
                <p className="font-medium text-xl">Mr. John</p>
                <p>Best Teacher of Our country</p>
              </div>
            </div>
          </div>
        </Marquee>
      </div>
      <hr />
    </div>
  );
};

export default Experts;
