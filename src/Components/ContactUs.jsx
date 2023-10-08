import Navbar from "./Navbar";
import { FcHome, FcPhone } from "react-icons/fc";
import { MdEmail } from "react-icons/md";

const ContactUs = () => {
  return (
    <div>
      <div>
        <Navbar></Navbar>
      </div>
      <div className="hero md:min-h-screen bg-base-200">
        <div className="hero-content  flex-col lg:flex-row  lg:gap-40">
          <div>
            <form>
              <p className=" card-body pb-2 text-2xl font-bold">Message Us :</p>
              <div className="card-body pb-2 flex-row gap-5">
                <div className="form-control">
                  <input
                    type="text"
                    placeholder="Enter Your Name.."
                    className="input input-bordered border-[#135e8a]"
                    required
                  />
                </div>
                <div className="form-control">
                  <input
                    type="text"
                    placeholder="Enter your email.."
                    className="input input-bordered border-[#135e8a]"
                    required
                  />
                </div>
              </div>
              <div className="card-body pt-2 pb-0">
                <div className="form-control w-full">
                  <input
                    type="text"
                    placeholder="Enter Subject.."
                    className="input input-bordered border-[#135e8a]"
                    required
                  />
                </div>
              </div>
              <div className="card-body pt-4 gap-4">
                <div className="form-control w-full">
                  <textarea
                    placeholder="Message.."
                    className="textarea textarea-bordered textarea-lg w-full max-w-lg border-[#135e8a]"
                  ></textarea>
                </div>
                <div className="form-control">
                  <button className="btn normal-case  border hover:border-[#135e8a] text-white bg-[#135e8a] hover:bg-white hover:text-black ">
                    Send
                  </button>
                </div>
              </div>
            </form>
          </div>
          <div>
            <h1 className="text-2xl font-bold">Office Address :</h1>
            <div className="py-6 flex gap-3">
              <span className="pt-2">
                <FcHome className="text-3xl"></FcHome>
              </span>
              <div>
                <p className="text-xl">Buttonwood, California.</p>
                <p className="">Rosemead, CA 91770</p>
              </div>
            </div>
            <div className="py-6 flex gap-3">
              <span className="pt-2">
                <FcPhone className="text-3xl"></FcPhone>
              </span>
              <div>
                <p className="text-xl">+1 253 565 2365</p>
                <p className="">Mon to Fri 9am to 6pm</p>
              </div>
            </div>
            <div className="py-6 flex gap-3">
              <span className="pt-2">
                <MdEmail className="text-3xl text-red-500"></MdEmail>
              </span>
              <div>
                <p className="text-xl ">support@rhr-edu.com</p>
                <p className="">Send us your query anytime!</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
